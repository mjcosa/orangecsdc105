import React from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
    Divider
} from "@mui/material";
import EditOutLinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Token } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "scenes/navbar";
import WidgetWrapper from "components/WidgetWrapper";

const editSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    bio: yup.string(),
    location: yup.string(),
    occupation: yup.string(),
    picture: yup.string(),
});


const EditProfile = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, 
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`}
            }
        )

        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, []);

    if (!user) return null;

    const edit = async (values, onSubmitProps) => {
        // allows us to send more info with image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value])
        }
        formData.append('picturePath', values.picture.name);

        const updatedUserResponse = await fetch(
            `http://localhost:3001/users/${userId}/edit`,
            {
                method: "PATCH",
                headers: { Authorization: `Bearer ${token}`},
                body: formData,
            }
        );

        const updatedUser = await updatedUserResponse.json();
    };
    
    const handleFormSubmit = async(values, onSubmitProps) => {
        await edit(values, onSubmitProps);
    };
        
    return (
        <>
            <Navbar />
            <Box
            width="100%"
            display="flex"
            justifyContent="center"
            mt="2rem"
            px="3rem"
            >
            <WidgetWrapper width={isNonMobileScreens ? "50%" : "100%"}>
                <Formik
                onSubmit={handleFormSubmit}
                initialValues={{
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    bio: user.bio || '',
                    location: user.location || '',
                    occupation: user.occupation || '',
                    picture: user.picture || '',
                }}
                validationSchema={editSchema}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                    {/* === Header Section === */}
                    <FlexBetween gap="1rem" mb="1.5rem">
                        <Typography variant="h5" fontWeight="600">
                        Edit Your Profile
                        </Typography>
                        <EditOutLinedIcon
                        onClick={() => navigate(`/profile/edit/${userId}`)}
                        sx={{ cursor: "pointer" }}
                        />
                    </FlexBetween>

                    <Divider sx={{ mb: "1rem" }} />

                    {/* === Name Section === */}
                    <Box display="flex" flexDirection="column" gap="1rem">
                        <TextField
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                        />
                        <TextField
                        label="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        fullWidth
                        />
                    </Box>

                    <Divider sx={{ my: "1.5rem" }} />

                    {/* === Bio Section === */}
                    <TextField
                        label="Profile Bio"
                        name="bio"
                        value={values.bio}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.bio) && Boolean(errors.bio)}
                        helperText={touched.bio && errors.bio}
                        fullWidth
                        multiline
                        rows={3}
                    />

                    <Divider sx={{ my: "1.5rem" }} />

                    {/* === Location & Occupation Section === */}
                    <Box display="flex" flexDirection="column" gap="1rem">
                        <TextField
                        label="Location"
                        name="location"
                        value={values.location}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.location) && Boolean(errors.location)}
                        helperText={touched.location && errors.location}
                        fullWidth
                        />
                        <TextField
                        label="Occupation"
                        name="occupation"
                        value={values.occupation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                        helperText={touched.occupation && errors.occupation}
                        fullWidth
                        />
                    </Box>

                    <Divider sx={{ my: "1.5rem" }} />

                    {/* === Profile Picture Upload === */}
                    <Box>
                        <Typography fontWeight="500" mb="0.5rem">
                        Profile Picture
                        </Typography>
                        <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) =>
                            setFieldValue("picture", acceptedFiles[0])
                        }
                        >
                        {({ getRootProps, getInputProps }) => (
                            <Box
                            {...getRootProps()}
                            border={`2px dashed ${palette.primary.main}`}
                            p="1rem"
                            sx={{
                                "&:hover": { cursor: "pointer" },
                                borderRadius: "5px",
                                textAlign: "center",
                            }}
                            >
                            <input {...getInputProps()} />
                            {!values.picture ? (
                                <Typography color="textSecondary">
                                Click or drag to change your profile picture
                                </Typography>
                            ) : (
                                <FlexBetween>
                                <Typography>{values.picture.name}</Typography>
                                <EditOutLinedIcon />
                                </FlexBetween>
                            )}
                            </Box>
                        )}
                        </Dropzone>
                    </Box>

                    <Divider sx={{ my: "1.5rem" }} />

                    {/* === Submit Button === */}
                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                        p: "0.75rem",
                        backgroundColor: palette.primary.main,
                        color: palette.background.alt,
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: palette.primary.dark,
                            color: palette.background.default,
                        },
                        }}
                    >
                        Save Changes
                    </Button>
                    </form>
                )}
                </Formik>
            </WidgetWrapper>
            </Box>
        </>
        );



}

export default EditProfile;