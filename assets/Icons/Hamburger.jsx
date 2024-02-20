import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

const Hamburger = (props) => {
  return (
    <Icon
      width="35"
      height="23"
      viewBox="0 0 35 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.125 2.38311V0.341446H34.8333V2.38311H0.125ZM34.8333 10.5498V12.5914H0.125V10.5498H34.8333ZM0.125 20.7581H34.8333V22.7998H0.125V20.7581Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Hamburger;
