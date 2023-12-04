import { Facebook } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "Contacts",
      pathname: "/contacts",
    },
    {
      route: "About",
      pathname: "/about",
    },
  ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <Facebook />
            <Facebook />
            <Facebook />
            <Facebook />
          </IconButton>
        </Box>

        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography className="capitalize text-center" color="gray" variant="body2">
            @The dragon news design by programming hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
