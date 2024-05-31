import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import BlogsScreen from "../blogs-screen/Blogs-Screen";
import { posts } from "./blogs-data";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [componentState, setComponentState] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, content };
    console.log("New Blog:", newBlog);

    // Show a success toast
    toast({
      title: "Blog created.",
      description: "Your new blog has been successfully saved.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form fields
    setTitle("");
    setContent("");
    navigate("/");
  };
  return (
    <>
      {selectedPost && (
        <BlogsScreen
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
        />
      )}
      {!selectedPost && (
        <Box p={5}>
          <Box textAlign="center" mb={10}>
            <Heading
              fontFamily={"serif"}
              color={"white"}
              as="h1"
              size="2xl"
              mb={4}
            >
              Our Blog
            </Heading>
            <Text color={"white"} fontFamily={"monospace"} fontSize="xl">
              Stay updated with the latest trends, insights, and innovations in
              the tech world.
            </Text>
          </Box>
          {!componentState && (
            <Box mb={10}>
              <Button
                onClick={() => setComponentState(true)}
                colorScheme={"whatsapp"}
              >
                Add blog
              </Button>
            </Box>
          )}

          {!componentState && (
            <Grid
              fontFamily={"monospace"}
              color={"white"}
              templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
              gap={6}
            >
              {posts.map((post, index) => (
                <GridItem height={"100%"} key={index} w="100%">
                  <Box
                    _hover={{
                      bg: "red.900",
                      color: "white",
                      transform: "scale(1.05)",
                    }}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="auto"
                    height={500}
                    onClick={() => console.log(setSelectedPost(post))}
                  >
                    <Image src={post.imageUrl} alt={post.title} />

                    <Box p={6}>
                      <Heading as="h3" size="lg" mb={2}>
                        <Link href={post.link} color="teal.500">
                          {post.title}
                        </Link>
                      </Heading>
                      <Text mb={4}>{post.summary}</Text>
                      <Link href={post.link}>
                        <Button colorScheme="teal">Read More</Button>
                      </Link>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          )}

          {componentState && (
            <Box maxW="md" mx="auto" mt={10}>
              <Heading color={"white"} as="h1" mb={6}>
                Add New Blog
              </Heading>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl id="title" isRequired>
                    <FormLabel color={"white"}>Title</FormLabel>
                    <Input
                      color={"white"}
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="content" isRequired>
                    <FormLabel color={"white"}>Content</FormLabel>
                    <Textarea
                      color={"white"}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="md"
                    width="full"
                  >
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
