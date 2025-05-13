import { Container, Box, Typography, Stack, Link, Button } from "@mui/material";
import React from "react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Translate } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "./IconSection";

export default function Hero() {
  const mySlider=[
    {text: "MEN", link: "src/images/banner-15.jpg"},
    {text: "WOMEN", link: "src/images/banner-25.jpg"},

  ]
  return (
    <Container >
       <Box sx={{pt: 2, mt: 2.5, display: "flex", gap: 2, alignItems: "center" }}>
         <Swiper
          loop
          grabCursor
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <img src="rc\images\banner-25.jpg" alt="" />
          </SwiperSlide> */}
          {mySlider.map((item)=>{
            return (
            <SwiperSlide key={item.link} sx={{position: "relative"}} >
              <img src={item.link} alt="" />
              <Box sx={{position: "absolute", left: "10%", textAlign:"left"}}>
                <Typography sx={{
                  color: "#222",

                }}
                variant="h6"
                >
                  LIFESTYLE COLLECTION
                </Typography>
                
                <Typography sx={{
                  color: "#222",
                  fontWeight: 400,
                  my: 1,
                }}
                variant="h4"
                >
                  {item.text}
                </Typography>
                
                <Stack sx={{
                  justifyContent:{xs: "center",sm : "left"},
                }}
                direction={"row"}
                alignItems={"center"}
                >
                  <Typography color={"#333"} mr={1} variant="h5">
                    SALE UP TO 
                  </Typography>
                  <Typography color={"#D23F57"} mr={1} variant="h5">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography sx={{
                  color: "#000",
                  fontWeight: 300,
                  my: 1,
                }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>
                <Button 
                  sx={{
                    px:5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover":{
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px  rgba(43, 52, 69, 0.1)"
                    }
                  }}
                  variant="contained"
                >
                  Shope Now
                </Button>
              </Box>
            </SwiperSlide>
            )
          })}
        </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src\images\banner-17.jpg" alt="" srcset="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "TranslateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "16px",
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardSharpIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "TranslateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "16px",
              }}
            >
              DESKTOPS &
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              LAPTOPS
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardSharpIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>

       </Box>
      <IconSection/>
    </Container>
  );
}
