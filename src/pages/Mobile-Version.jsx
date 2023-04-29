import { useState } from "react";
import HigherLogo from "../assets/higher-logo.png";
import {
  TextField,
  Button,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  Link,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SocialMediaIcons from "../components/SocialMedia";

export default function MobileVersion() {
  const [showPassword, setShowPassword] = useState({
    pass: false,
    conf: false,
  });
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Stack spacing={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={HigherLogo} width="100" height="100" />
          </div>
          <Typography variant="body" color="white" align="center" mb={3}>
            Higher
          </Typography>
          <Tabs
            onChange={handleTabChange}
            value={tab}
            centered
            textColor="inherit"
            TabIndicatorProps={{
              style: { color: "white", backgroundColor: "white" },
            }}
          >
            <Tab
              label="Sign In"
              sx={{
                color: "white",
              }}
            />
            <Tab
              label="Sign Up"
              sx={{
                color: "white",
              }}
            />
          </Tabs>
          <TextField
            placeholder="Email"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            inputProps={{
              sx: {
                color: "black",
                fontSize: "16px",
              },
            }}
          />
          <TextField
            placeholder="Password"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            inputProps={{
              sx: {
                color: "black",
                fontSize: "16px",
              },
            }}
            type={!showPassword.pass && "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword({ pass: !showPassword.pass })
                    }
                  >
                    {showPassword.pass ? (
                      <VisibilityOff style={{ fontSize: "12px" }} />
                    ) : (
                      <Visibility style={{ fontSize: "12px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {tab === 1 && (
            <TextField
              placeholder="Confirm Password"
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
              inputProps={{
                sx: {
                  color: "black",
                  fontSize: "16px",
                },
              }}
              type={!showPassword.conf && "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword({ conf: !showPassword.conf })
                      }
                    >
                      {showPassword.conf ? (
                        <VisibilityOff style={{ fontSize: "12px" }} />
                      ) : (
                        <Visibility style={{ fontSize: "12px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          <Button
            sx={{
              backgroundColor: "#0fd5c1",
              borderRadius: "8px",
              height: "36px",
              marginTop: "10px",
              fontSize: "12px",
            }}
            variant="contained"
          >
            {tab === 0 ? "Login" : "Create Account"}
          </Button>

          {tab === 0 && (
            <Link
              color="#ffff"
              align="center"
              sx={{
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>
          )}

          <Typography
            variant="body"
            color="white"
            align="center"
            mt={3}
            sx={{
              fontSize: "12px",
            }}
          >
            Or use social account to {tab === 0 ? "login" : "create account"}
          </Typography>
          <SocialMediaIcons />
        </Stack>
      </Grid>
    </>
  );
}
