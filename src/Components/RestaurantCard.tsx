import { Card, CardBody, Text, Image, Flex, Box, Link } from "@chakra-ui/react";
import StarRating from "./StarRating";

interface Props {
  name: string;
  display_phone: string;
  photos: string[];
  rating: number;
  isClosed: boolean;
  location: {
    city: string;
    address1: string;
  };
}

function RestaurantCard(props: Props) {
  const { name, display_phone, photos, rating, location, isClosed } = props;

  return (
    <Card>
      <CardBody>
        <Image
          src={photos[0]}
          alt={name}
          width={"100%"}
          height={{ base: "200px", md: "300px" }}
          objectFit={"cover"}
          mb={"1rem"}
          borderRadius={"lg"}
        />
        <Flex
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
          rowGap={"5px"}
          mb={"0.5rem"}
        >
          <Text fontSize={"lg"}>
            {name}, {location.address1}
          </Text>
          <Box bgColor={"#FFFFFFEB"} px="10px" rounded={"2xl"}>
            {isClosed ? (
              <Text fontSize={"sm"} color={"red.500"}>
                Closed
              </Text>
            ) : (
              <Text fontSize={"sm"} color={"green.500"}>
                Open
              </Text>
            )}
          </Box>
        </Flex>

        <Flex
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
          rowGap={"5px"}
        >
          <Link href={`tel:${display_phone}`}>{display_phone}</Link>
          <StarRating rating={rating} />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default RestaurantCard;
