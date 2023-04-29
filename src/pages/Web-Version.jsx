import { useState } from "react";
import Image1 from "../assets/image1.png";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

export default function WebVersion() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={7}>
          <img
            src={Image1}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </Grid>
        <Grid
          container
          width="100%"
          item
          xs={5}
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={HigherLogo} width="75" height="75" />
            </div>
            <Typography variant="body" color="white" align="center" mb={3}>
              Higher
            </Typography>
            <ButtonBase
              sx={{
                backgroundColor: "#e9e9e8",
                borderRadius: "16px",
                height: "32px",
                marginTop: "10px",
                fontSize: "12px",
                color: "black",
              }}
            >
              <GoogleIcon sx={{ width: "12px", marginRight: "12px" }} />
              Continue With Google
            </ButtonBase>
            <Typography
              variant="body"
              color="white"
              align="left"
              mt={2}
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
              color="white"
              align="center"
              mt={3}
              sx={{
                fontSize: "12px",
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
