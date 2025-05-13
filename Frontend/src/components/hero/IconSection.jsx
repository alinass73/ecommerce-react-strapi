import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

export default function IconSection() {
  const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexGrow: 1,
          alignItems: "ceneter",
          gap: 3,
        //   justifyContent: "center",
        
          py: 1.6,
        }}
        justifyContent={useMediaQuery('(min-width:600px)') ? "center" : "left"}
      >
        {icon}
        <Box>
          <Typography variant="body1"> {title} </Typography>
          <Typography
            sx={{ fontWeight: 300, color: theme.palette.text.second }}
            variant="body1"
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    );
  };
  const theme = useTheme();
  return (
    <Container sx={{mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack
        divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null}
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={useMediaQuery('(min-width:600px)') ? "center" : "left"}
      >
        <MyBox
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
          icon={<ElectricBoltIcon fontSize="large" />}
        />
        <MyBox
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
        />
        <MyBox
          title={"365 Days"}
          subTitle={"For free return"}
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
        />
        <MyBox
          title={"Payment"}
          subTitle={"Secure System"}
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
        />
      </Stack>
    </Container>
  );
}
