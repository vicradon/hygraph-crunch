import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { FETCH_BLOG_POSTS } from "api/queries/blog-posts";
import Head from "next/head";
import client from "api/client";
import { BlogPost } from "utils/types";
import BlogPostCard from "Components/BlogPostCard";

const Home = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <>
      <Head>
        <title>Hygraph Crunch</title>
        <meta
          name="description"
          content="Learn about different cities and their restaurants."
        />
      </Head>

      <Box padding={"2rem"}>
        <Flex
          alignItems={"center"}
          flexDirection={"column"}
          rowGap={"1rem"}
          justifyContent={"center"}
          mb={"2rem"}
        >
          <Heading as={"h1"} fontWeight={"medium"} fontSize={"5xl"}>
            Hygraph Crunch
          </Heading>
          <Text>Learn about different cities and their restaurants.</Text>
        </Flex>

        <Box>
          <Heading
            as={"h2"}
            fontWeight={"medium"}
            fontSize={"3xl"}
            mb={"2rem"}
            textAlign={"center"}
          >
            Featured Blog Posts
          </Heading>
          <Grid
            width={"100%"}
            maxW={"800px"}
            margin={"0 auto"}
            columnGap={6}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            rowGap={6}
            justifySelf={"center"}
          >
            {blogPosts.map((blogPost) => {
              return (
                <BlogPostCard
                  key={blogPost.id}
                  title={blogPost.title}
                  slug={blogPost.slug}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await client.request(FETCH_BLOG_POSTS);
  const blogPosts: BlogPost[] = data.blogPosts;

  return {
    props: {
      blogPosts,
    },
  };
}
