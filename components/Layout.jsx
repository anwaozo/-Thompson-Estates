import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FixedSocial from "./Ui/BlogPosts";
import { Box } from "@chakra-ui/react";
import NewsLetter from "./Ui/NewsLetter";
import FAQs from "./Ui/FAQs";

const Layout = ({ children, metaTitle, metaDescription }) => {
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
      <Navbar />
      {children}
      <FAQs />
      <NewsLetter />
      <Footer />
    </Box>
  );
};

export default Layout;
