import { Box, Grid, Heading } from "@chakra-ui/react";
import Navbar from "Components/Navbar";
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
