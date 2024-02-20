import React from "react";
import Head from "next/head";

import Footer from "../Footer";

import { Box } from "@chakra-ui/react";
import Navbar2 from "./Navbar2";

const Layout2 = ({ children, metaTitle, metaDescription }) => {
  return (
    <Box>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>
      <Navbar2 />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout2;
