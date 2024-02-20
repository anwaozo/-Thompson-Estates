import { Inter } from "next/font/google";
import HeroSection from "@/components/Ui/HeroSection";
import Layout from "@/components/Layout";
import DreamHome from "@/components/Ui/DreamHome";
import Apartments from "@/components/Ui/Apartments";
import Properties from "@/components/Ui/Properties";
import Contact from "@/components/Ui/Contact";
import BlogPosts from "@/components/Ui/BlogPosts";
import { attributes } from "../content/pages/home.md";
const inter = Inter({ subsets: ["latin"] });

const importApartments = async () => {
  const markdownFiles = require
    .context("../Apartments", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../Apartments/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importProperties = async () => {
  const markdownFiles = require
    .context("../properties", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../properties/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};
const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../blog/post", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../blog/post/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Home = ({ ApartmentsList, PropertiesList, BlogPostsList }) => (
  <Layout
    metaDescription={MetaTags.metaDescription}
    metaTitle={MetaTags.metatitle}
  >
    <HeroSection />
    <DreamHome />
    <Apartments ApartmentsList={ApartmentsList} />
    <Properties PropertiesList={PropertiesList} />
    <Contact />
    <BlogPosts BlogPostsList={BlogPostsList} />
  </Layout>
);
const { MetaTags } = attributes;
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

export default Home;
