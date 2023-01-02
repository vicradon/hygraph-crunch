import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface Props {
  rating: number;
}

function StarRating(props: Props) {
  const { rating } = props;

  const fullStars = Math.floor(rating);
  const halfStars = Math.floor(rating) !== rating ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <Flex alignItems={"center"} columnGap={"5px"}>
      {Array.from({ length: fullStars }, (_, i) => {
        return (
          <Box key={`filled-${i}`} as={"span"}>
            <BsStarFill fontSize={"15px"} />
          </Box>
        );
      })}
      {Array.from({ length: halfStars }, (_, i) => {
        return (
          <Box key={`half-${i}`} as={"span"}>
            <BsStarHalf fontSize={"15px"} />
          </Box>
        );
      })}
      {Array.from({ length: emptyStars }, (_, i) => {
        return (
          <Box key={`empty-${i}`} as={"span"}>
            <BsStar fontSize={"15px"} />
          </Box>
        );
      })}
    </Flex>
  );
}

export default StarRating;
