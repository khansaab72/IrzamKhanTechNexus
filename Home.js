import React from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  Grid,
  GridItem,
  Button,
  Image,
} from "@chakra-ui/react";

import techImg from "./high-tech.jpg";
import techImgOdder1 from "./cardano-blockchain-platform_23-2150411956.avif";
import techImgOdder2 from "./depositphotos_563846192-stock-photo-writing-displaying-text-breaking-news.jpg";
import techImgOdder3 from "./patent-innovation-1280x640.jpg";
import techImgOdder4 from "./shutterstock_272018552.jpg";
import techImgOdder5 from "./1702017594608.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box p={5}>
      {/* Welcome Section */}
      <Box textAlign="center" mb={10}>
        <Heading color={"white"} fontFamily={"serif"} as="h1" size="2xl" mb={4}>
          Welcome to Tech Nexus
        </Heading>
        <Text color={"white"} fontSize="xl" mb={6}>
          Your Gateway to the Future of Technology
        </Text>
        <Box ml={350}>
          <Image
            src={techImg}
            alt="Tech Nexus"
            borderRadius="md"
            style={{ width: "1100px", height: "600px" }}
          />
        </Box>
      </Box>

      <Divider />

      {/* What We Offer Section */}
      <Box my={10}>
        <Heading
          fontFamily={"Papyrus, fantasy"}
          color={"white"}
          as="h2"
          size="lg"
          fontSize={50}
          mb={4}
          textAlign="center"
        >
          What We Offer
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          <GridItem>
            <Box
              _hover={{
                bg: "blue.500",
                color: "white",
                transform: "scale(1.05)",
              }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              height={"100%"}
            >
              <Image
                style={{ width: "800px", height: "300px" }}
                src={techImgOdder1}
                alt="In-Depth Articles"
              />
              <Box p={4}>
                <Heading color={"white"} as="h3" size="md" mb={2}>
                  In-Depth Articles
                </Heading>
                <Text color={"white"}>
                  Explore our comprehensive articles that delve deep into the
                  latest technological advancements. From artificial
                  intelligence and machine learning to blockchain and quantum
                  computing, our expert writers provide detailed analyses and
                  insights.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              _hover={{
                bg: "blue.500",
                color: "white",
                transform: "scale(1.05)",
              }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              height={"100%"}
            >
              <Image
                src={techImgOdder2}
                alt="Breaking News"
                style={{ width: "800px", height: "300px" }}
              />
              <Box p={4}>
                <Heading color={"white"} as="h3" size="md" mb={2}>
                  Breaking News
                </Heading>
                <Text color={"white"}>
                  Stay up-to-date with the latest news in the tech industry. Our
                  team is dedicated to bringing you real-time updates and
                  breaking stories from around the world.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              _hover={{
                bg: "blue.500",
                color: "white",
                transform: "scale(1.05)",
              }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              height={"100%"}
            >
              <Image
                style={{ width: "800px", height: "300px" }}
                src={techImgOdder3}
                alt="Expert Reviews"
              />
              <Box p={4}>
                <Heading color={"white"} as="h3" size="md" mb={2}>
                  Expert Reviews
                </Heading>
                <Text color={"white"}>
                  Read our unbiased reviews on the latest gadgets, software, and
                  tech services. We test and evaluate products to help you make
                  informed decisions.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              _hover={{
                bg: "blue.500",
                color: "white",
                transform: "scale(1.05)",
              }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              height={"100%"}
            >
              <Image
                style={{ width: "800px", height: "300px" }}
                src={techImgOdder4}
                alt="Tutorials and How-Tos"
              />
              <Box p={4}>
                <Heading color={"white"} as="h3" size="md" mb={2}>
                  Tutorials and How-Tos
                </Heading>
                <Text color={"white"}>
                  Enhance your skills with our easy-to-follow tutorials and
                  how-to guides. Whether you're looking to master a new
                  programming language or troubleshoot a tech issue, our
                  step-by-step instructions have you covered.
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Divider />

      {/* Community Engagement Section */}
      <Box my={10}>
        <Heading
          fontFamily={"sans-serif"}
          color={"white"}
          as="h2"
          size="lg"
          mb={4}
          textAlign="center"
        >
          Community Engagement
        </Heading>
        <Text
          fontFamily={"monospace"}
          color={"white"}
          textAlign="center"
          mb={6}
          fontSize={18}
        >
          Join our vibrant community of tech enthusiasts. Share your ideas, ask
          questions, and connect with like-minded individuals in our forums and
          comment sections.
        </Text>
        <Box textAlign="center" ml={420}>
          <Image
            src={techImgOdder5}
            style={{ width: "1000px", height: "600px" }}
            alt="Community Engagement"
            borderRadius="md"
          />
        </Box>
      </Box>

      <Divider />

      {/* Featured Topics Section */}
      <Box my={10}>
        <Heading color={"white"} as="h2" size="lg" mb={4} textAlign="center">
          Featured Topics
        </Heading>
        <Grid
          color={"white"}
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={6}
        >
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Artificial Intelligence
              </Heading>
              <Text>
                Discover how AI is transforming industries and what the future
                holds.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Blockchain Technology
              </Heading>
              <Text>
                Learn about the impact of blockchain on finance, security, and
                beyond.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Cybersecurity
              </Heading>
              <Text>
                Stay informed on the latest threats and how to protect yourself.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Gadgets and Devices
              </Heading>
              <Text>Get the scoop on the newest tech toys and tools.</Text>
            </Box>
          </GridItem>
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Software Development
              </Heading>
              <Text>
                Find resources and tips for becoming a better developer.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            _hover={{
              bg: "blue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
              <Heading as="h4" size="md" mb={2}>
                Tech Innovations
              </Heading>
              <Text>
                Explore groundbreaking inventions and futuristic concepts.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Divider />

      {/* Call to Action Section */}
      <Box color={"white"} textAlign="center" my={10}>
        <Heading as="h2" size="lg" mb={4}>
          Join Us
        </Heading>
        <Text fontSize="lg" mb={6}>
          Subscribe to our newsletter to receive the latest updates, or follow
          us on social media to stay connected. If you have any questions,
          suggestions, or feedback, don't hesitate to reach out. We're here to
          help you navigate the exciting world of technology.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/contact")}
        >
          Contact Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
