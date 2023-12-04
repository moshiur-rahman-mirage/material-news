import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeadImg from "@/assets/headerimg.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          className="text-center mx-auto"
          src={HeadImg}
          alt=""
          width={500}
          height={500}
        
        />
        <Typography
          className="capitalize text-center"
          color="gray"
          variant="body2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          className="capitalize text-center"
          color="gray"
         
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
