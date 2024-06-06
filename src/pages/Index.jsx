import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Welcome to Tech Forum</Heading>
        <Text>Join the conversation and share your knowledge with the community.</Text>
      </VStack>
    </Box>
  );
};

export default Index;