import Apartments2 from "@/components/SecondHomePage/Apartments2";
import BlogPosts2 from "@/components/SecondHomePage/BlogPosts2";
import Contact2 from "@/components/SecondHomePage/Contact2";
import DreamHome2 from "@/components/SecondHomePage/DreamHome2";
import FAQs2 from "@/components/SecondHomePage/FAQs2";
import HeroSection2 from "@/components/SecondHomePage/HeroSection2";
import Layout2 from "@/components/SecondHomePage/Layout2";
import NewsLetter2 from "@/components/SecondHomePage/NewsLetter2";
import Properties2 from "@/components/SecondHomePage/Properties2";
import React from "react";

const importApartments = async () => {
  const markdownFiles = require
    .context("../../Apartments", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../../Apartments/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importProperties = async () => {
  const markdownFiles = require
    .context("../../properties", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../../properties/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};
const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../../blog/post", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../../blog/post/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};

const HomePage2 = ({ ApartmentsList, PropertiesList, BlogPostsList }) => (
  <Layout2>
    <HeroSection2 />
    <Properties2 PropertiesList={PropertiesList} />
    <DreamHome2 />
    <Apartments2 ApartmentsList={ApartmentsList} />

    <Contact2 />
    <BlogPosts2 BlogPostsList={BlogPostsList} />
    <FAQs2 />
    <NewsLetter2 />
  </Layout2>
);
export async function getStaticProps() {
  const ApartmentsList = await importApartments();
  const PropertiesList = await importProperties();
  const BlogPostsList = await importBlogPosts();
  return {
    props: {
      ApartmentsList,
      PropertiesList,
      BlogPostsList,
    }, // will be passed to the page component as props
  };
}

export default HomePage2;
