import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast({
          title: "Message sent.",
          description:
            "We've received your message and will get back to you shortly.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        resolve();
      }, 1000);
    });
  };
  return (
    // <div>
    //   <Box p={4}>
    //     <Heading as="h1" mb={4}>
    //       {contact.title}
    //     </Heading>
    //     <Stack spacing={2}>
    //       <Text>Email: {contact.email}</Text>
    //       <Text>Phone: {contact.phone}</Text>
    //       <Text>Address: {contact.address}</Text>
    //     </Stack>
    //   </Box>
    // </div>

    <Box height={"150%"} p={5}>
      {/* Header Section */}
      <Box textAlign="center" mb={10}>
        <Heading
          fontFamily={"monospace"}
          color={"white"}
          as="h1"
          size="2xl"
          mb={4}
        >
          Contact Us
        </Heading>
        <Text fontSize="xl" fontFamily={"monospace"} color={"white"}>
          We would love to hear from you! Please fill out the form below to get
          in touch with us.
        </Text>
      </Box>

      <Divider />

      {/* Contact Form Section */}
      <Box mt={10} maxWidth="600px" mx="auto">
        <Heading
          fontFamily={"monospace"}
          color={"white"}
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
        >
          Get in Touch
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={5}>
            <FormControl isInvalid={errors.name}>
              <FormLabel color={"white"} htmlFor="name">
                Name
              </FormLabel>
              <Input
                textColor={"white"}
                id="name"
                placeholder="Your Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel color={"white"} htmlFor="email">
                Email
              </FormLabel>
              <Input
                textColor={"white"}
                id="email"
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message}>
              <FormLabel color={"white"} htmlFor="message">
                Message
              </FormLabel>
              <Textarea
                textColor={"white"}
                id="message"
                placeholder="Your Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
              width="full"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
