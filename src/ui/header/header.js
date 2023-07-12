import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DownloadIcon from "@mui/icons-material/Download";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import resume from "../../assets/AdhishResume.pdf";
import linkedin from "../../assets/linkedin.png";

const pages = [
  "Info",
  "Career",
  "Portfolio",
  "Achivements",
  "Travel Blog",
  "Technichal Blog",
  "About",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    if (
      event.target.innerText === "Career" ||
      event.target.innerText === "CAREER"
    ) {
      navigate("career");
    } else if (
      event.target.innerText === "MY PROJECTS" ||
      event.target.innerText === "my project"
    ) {
      navigate("myproject");
    } else if (
      event.target.innerText === "Portfolio" ||
      event.target.innerText === "PORTFOLIO"
    ) {
      navigate("portfolio");
    } else if (
      event.target.innerText === "TRAVEL BLOG" ||
      event.target.innerText === "Travel Blog"
    ) {
      navigate("hobbies");
    } else if (
      event.target.innerText === "ACHIVEMENTS" ||
      event.target.innerText === "Achivements"
    ) {
      navigate("achivements");
    } else if (
      event.target.innerText === "TECHNICHAL BLOG" ||
      event.target.innerText === "Technichal Blog"
    ) {
      navigate("technichalblog");
    } else if (
      event.target.innerText === "ABOUT" ||
      event.target.innerText === "About"
    ) {
      navigate("aboutpage");
    } else if (
      event.target.innerText === "INFO" ||
      event.target.innerText === "Info"
    ) {
      navigate("/");
    }

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="appbar" sx={{ bgcolor: "#F1661B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADHISHNIGAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADHISHNIGAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adhish-nigam-8775a3146/"
          >
            <img
              src={linkedin}
              className="heade-linkedin-image"
              width={20}
              height={20}
              onClick={() => "location.href='https://google.com';"}
            ></img>
          </a>
          <a href={resume} download="AdhishNigam.pdf" className="download-btn">
            <DownloadIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            Resume
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
