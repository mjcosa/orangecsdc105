import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.mediumMain;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img 
            width="100%"
            height="auto"
            alt="advert"
            src="http://localhost:3001/assets/info4.jpeg"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main}>Put your Advertisement here</Typography>
                <Typography color={medium}>Call: 0123456</Typography>
                
            </FlexBetween>
                <Typography color={medium} m="0.5rem 0">
                    Premium Spot for a cheap price. Ensures that your ads are viewed by many people
                </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;