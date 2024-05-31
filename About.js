import React from "react";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Link,
  IconButton,
  Stack,
} from "@chakra-ui/react";

import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Box textAlign="center">
          <Heading color={"white"} as="h1" size="2xl" mb={4}>
            About Tech Nexus
          </Heading>
        </Box>

        <Divider />

        <Box>
          <Text fontFamily={"monospace"} color={"white"} fontSize="xl" mb={4}>
            Tech Nexus was founded by a group of tech aficionados with a mission
            to make technology accessible and understandable to everyone. We
            believe that technology has the power to change the world, and we
            aim to be at the forefront of this transformation by providing
            high-quality content and fostering a community of learners and
            innovators.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading
            fontFamily={"monospace"}
            color={"white"}
            as="h2"
            size="lg"
            mb={4}
          >
            Our Mission
          </Heading>
          <Text fontFamily={"monospace"} fontSize="lg" color={"white"}>
            Our mission is to be the premier source of tech knowledge and
            innovation. We strive to bring you the latest in technological
            advancements and insights, enabling you to stay ahead in the
            fast-paced world of technology. Whether you're a beginner or an
            expert, our goal is to provide you with the resources you need to
            thrive.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading color={"white"} as="h2" size="lg" mb={4}>
            Our Team
          </Heading>
          <VStack color={"white"} align="stretch" spacing={4}>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 1"
              />
              <Box>
                <Heading as="h3" size="md">
                  Irzam Khan
                </Heading>
                <Text>Founder & CEO</Text>
                <Text>
                  Irzam has over 20 years of experience in the tech industry,
                  leading innovative projects and startups.
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 2"
              />
              <Box>
                <Heading as="h3" size="md">
                  Ali Moajiz
                </Heading>
                <Text>Chief Technology Officer</Text>
                <Text>
                  Ali is a tech visionary with a passion for developing
                  cutting-edge solutions and mentoring young tech enthusiasts.
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 3"
              />
              <Box>
                <Heading as="h3" size="md">
                  Sher Ali
                </Heading>
                <Text>Head of Content</Text>
                <Text>
                  Sher is dedicated to creating informative and engaging
                  content, ensuring that our readers get the most out of our
                  site.
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box color={"white"}>
          <Heading as="h2" size="lg" mb={4}>
            Join Us
          </Heading>
          <Text fontSize="lg">
            We are always looking for passionate and talented individuals to
            join our team. If you are interested in contributing to Tech Nexus,
            please reach out to us. Let's shape the future of technology
            together!
          </Text>
        </Box>
      </VStack>
      <Stack direction="row" spacing={4} mt={6} mb={6}>
        <IconButton
          icon={<FaTwitter />}
          aria-label="Twitter"
          variant="outline"
          colorScheme="twitter"
        />
        <IconButton
          icon={<FaFacebook />}
          aria-label="Facebook"
          variant="outline"
          colorScheme="facebook"
        />
        <IconButton
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
          variant="outline"
          colorScheme="linkedin"
        />
        <IconButton
          icon={<FaInstagram />}
          aria-label="Instagram"
          variant="outline"
          colorScheme="pink"
        />
      </Stack>
      <Text color={"white"} mb={4}>
        Connect with us on social media to stay updated with our latest news,
        products, and events.
      </Text>
      <Text color={"white"}>
        For inquiries and collaborations, please email us at{" "}
        <Link href="mailto:info@technexus.com">info@technexus.com</Link>
      </Text>
    </Box>
  );
}
