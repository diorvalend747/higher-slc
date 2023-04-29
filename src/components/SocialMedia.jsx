import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "../assets/fb-icon.png";

export default function SocialMediaIcons() {
  const Item = styled(Paper)(({}) => ({
    backgroundColor: "#090808",
    padding: "8px",
    textAlign: "center",
    color: "white",
    width: "2rem",
    borderRadius: "50%",
    marginTop: "2px",
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
        <Item>
          <GoogleIcon />
        </Item>
        <Item>
          <AppleIcon />
        </Item>
        <Item>
          <img src={FacebookIcon} width="25" height="25" alt="Facebook" />
        </Item>
      </Stack>
    </>
  );
}
