import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

export default function BlogsScreen({ setSelectedPost, selectedPost }) {
  return (
    <div>
      <Button
        color={"white"}
        size={"lg"}
        colorScheme=""
        leftIcon={<GoArrowLeft size={20} />}
        onClick={() => setSelectedPost(null)}
      >
        Back
      </Button>

      <Container maxW="container.md" py={10}>
        <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="2xl" mb={4}>
            {selectedPost.title}
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            By {selectedPost.author}
          </Text>

          <Text fontSize="md" color="gray.600" mb={4}>
            {selectedPost.date}
          </Text>

          <Divider mb={6} />
          <VStack spacing={4} align="start">
            <Text fontSize="lg">{selectedPost.portion1}</Text>
            <Text fontSize="lg">{selectedPost.portion2}</Text>
            <Text fontSize="lg">{selectedPost.portion3}</Text>
            <Text fontSize="lg">{selectedPost.portion4}</Text>
            <Text fontSize="lg">{selectedPost.portion5}</Text>
            <Text fontSize="lg">{selectedPost.portion6}</Text>
            <Text fontSize="lg">{selectedPost.portion7}</Text>
            <Text fontSize="lg">{selectedPost.portion8}</Text>
          </VStack>
        </Box>
      </Container>
    </div>
  );
}
