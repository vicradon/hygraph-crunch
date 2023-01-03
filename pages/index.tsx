import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
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
        </Box>
      </Box>
    </>
  );
};

export default Home;
