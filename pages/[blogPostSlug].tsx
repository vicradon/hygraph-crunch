import { Box, Heading } from "@chakra-ui/react";
import client from "api/client";
import {
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST_AND_RESTAURANTS,
} from "api/queries/blog-posts";
import Navbar from "Components/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { BlogPost } from "utils/types";

interface Props {
  blogPost: BlogPost;
}

function SingleBlogPost(props: Props) {
  const {
    blogPost: { title, body },
  } = props;

  return (
    <Box padding={"2rem"}>
      <Box mb={"2rem"}>
        <Navbar />
      </Box>
      <Heading mb={"1rem"} as={"h1"}>
        {title}
      </Heading>

      <Box
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: body?.html || "" }}
        mb={"2rem"}
      />
    </Box>
  );
}

export default SingleBlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request(FETCH_BLOG_POSTS);
  const blogPosts: BlogPost[] = data.blogPosts;

  const paths = blogPosts.map((blogPost) => ({
    params: {
      blogPostSlug: blogPost.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await client.request(FETCH_BLOG_POST_AND_RESTAURANTS, {
    slug: params?.blogPostSlug,
  });
  const blogPost: BlogPost = data.blogPost;

  return {
    props: {
      blogPost,
    },
  };
};
