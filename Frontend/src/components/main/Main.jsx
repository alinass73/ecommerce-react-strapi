import React from "react";
import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  useTheme,
  Rating,
  Dialog,
  IconButton,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProuductDetails from "./ProuductDetails";

export default function Main() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{py: 9}}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography>Selected Products</Typography>
          <Typography>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgpa(233, 69, 96, 0.5)",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            MEN Category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            WOMEN Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {["aa", "bb", "cc"].map((item)=>{
          return (
            <Card key={item} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { rotate: "1deg" ,scale: "1.1", transition: "0.3s"} }}>
          <Box sx={{overflow: "hidden"}}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="244"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          </Box>
          <CardContent>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography gutterBottom variant="h6" component="div">
                T-Shirt
              </Typography>
              <Typography variant="subtitle1" component="p">
                $12.99
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              dsfj f;kjask fjskf jsapppppppppppppppppppp
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button sx={{ textTransform: "capitalize" }} size="small"  onClick={handleClickOpen}>
              <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
              add to cart
            </Button>
            <Rating precision={0.5} name="read-only" value={4.5} readOnly />
          </CardActions>
        </Card>
          )
        })

        }
      </Stack>


        <Dialog
        sx={{".MuiPaper-root": {minWidth: {xs: "100%", md: 800}, }}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <IconButton
            onClick={handleClose}
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
              position: "absolute",
              top: 0,
              right: 9,
            }}
          >
            <Close />
          </IconButton>
            <ProuductDetails/>
      </Dialog>
    </Container>
  );
}
