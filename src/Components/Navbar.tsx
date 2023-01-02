import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Flex as={"nav"}>
      <Link href={"/"}>
        <Text fontSize={"2xl"}>Hygraph Crunch</Text>
      </Link>
    </Flex>
  );
}

export default Navbar;
