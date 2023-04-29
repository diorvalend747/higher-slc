import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
// import FacebookIcon from "../assets/fb-icon.png";

export default function SocialMediaIcons() {
  const Item = styled(Link)(({}) => ({
    backgroundColor: "#090808",
    padding: "8px",
    textAlign: "center",
    color: "white",
    width: "2rem",
    borderRadius: "50%",
    marginTop: "2px",
    cursor: "pointer",
  }));

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
        mt={2}
      >
        <Item href="https://www.google.com" target="_blank" rel="noopener">
          <GoogleIcon />
        </Item>
        <Item href="https://www.apple.com" target="_blank" rel="noopener">
          <AppleIcon />
        </Item>
        <Item href="https://www.facebook.com" target="_blank" rel="noopener">
          <FacebookIcon />
        </Item>
      </Stack>
    </>
  );
}
