import { Image, Box } from "@chakra-ui/react";
import React from "react";
import { attributes } from "../../content/pages/home.md";
const Logo = () => {
  const { Logo } = attributes;
  return (
    <Box>
      <Image src={Logo.icon} w={{ base: "80px", lg: "100px" }} alt="" />
    </Box>
  );
};

export default Logo;
export const DarkLogo = () => {
  const { Logo } = attributes;
  return (
    <Box>
      <Image src={Logo.footerIcon} w={{ base: "80px", lg: "100px" }} alt="" />
    </Box>
  );
};
