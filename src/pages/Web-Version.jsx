import { useState, useEffect } from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import HigherLogo from "../assets/higher-logo.png";
import {
  TextField,
  ButtonBase,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Link,
  Stack,
  CardMedia,
  InputBase,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

export default function WebVersion() {
  const [showPassword, setShowPassword] = useState(false);

  const images = [Image1, Image2, Image3, Image4, Image5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [currentImageIndex]);

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={7}>
          <div
            style={{
              position: "fixed",
              height: "100vh",
              width: "58%",
            }}
          >
            {images.map((imageUrl, index) => {
              return (
                <CardMedia
                  key={index}
                  image={imageUrl}
                  component="img"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    transition: "opacity 2s ease-in-out",
                    opacity: index === currentImageIndex ? 1 : 0,
                  }}
                />
              );
            })}
          </div>
        </Grid>
        <Grid
          item
          xs={5}
          container
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={3} width="58%">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={HigherLogo} width="100" height="100" />
            </div>
            <Typography variant="h5" color="white" align="center">
              Higher
            </Typography>
            <ButtonBase
              sx={{
                backgroundColor: "#e9e9e8",
                borderRadius: "16px",
                height: "32px",
                fontSize: "12px",
                color: "black",
                letterSpacing: "2px",
              }}
            >
              <GoogleIcon
                sx={{
                  width: "12px",
                  marginRight: "12px",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              />
              Continue With Google
            </ButtonBase>
            <Typography
              variant="body"
              color="white"
              align="left"
              mt={4}
              sx={{
                fontSize: "12px",
              }}
            >
              Or Signin with
            </Typography>
            <TextField
              placeholder="Email"
              size="small"
              sx={{
                backgroundColor: "#090808",
                borderRadius: "16px",
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
              inputProps={{
                sx: {
                  color: "white",
                  fontSize: "12px",
                },
              }}
            />
            <TextField
              placeholder="Password"
              size="small"
              type={!showPassword && "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityOff
                          style={{ color: "white", fontSize: "12px" }}
                        />
                      ) : (
                        <Visibility
                          style={{ color: "white", fontSize: "12px" }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#090808",
                borderRadius: "16px",
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
              inputProps={{
                sx: {
                  color: "white",
                  fontSize: "12px",
                },
              }}
            />
            <ButtonBase
              sx={{
                backgroundColor: "#0fd5c1",
                borderRadius: "16px",
                height: "32px",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              Sign In Account
            </ButtonBase>

            <Typography
              variant="body"
              color="#898989"
              align="center"
              mt={3}
              sx={{
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              Create an account?
              <Link
                ml={1}
                color="#3eab9c"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
