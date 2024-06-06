import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  { name: "Programming", description: "Discuss all things programming." },
  { name: "Hardware", description: "Talk about the latest in hardware." },
  { name: "Software", description: "Share and learn about software." },
];

const Categories = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Categories</Heading>
      <VStack spacing={4} align="stretch">
        {categories.map((category) => (
          <Box key={category.name} p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md">
              <Link as={RouterLink} to={`/categories/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </Heading>
            <Text>{category.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Categories;