import { Card, CardBody, Text } from "@chakra-ui/react";
import Link from "next/link";
interface Props {
  title: string;
  slug: string;
}

function BlogPostCard(props: Props) {
  const { title, slug } = props;

  return (
    <Link href={slug || ""}>
      <Card>
        <CardBody>
          <Text fontSize={"lg"}>{title}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}

export default BlogPostCard;
