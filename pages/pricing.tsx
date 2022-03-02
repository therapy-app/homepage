import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  HStack,
  ListItem,
  List,
  Button,
  ListIcon,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FaqSection from "../src/sections/faq";
import { FaCheck } from 'react-icons/fa';

const PricePlan = () => {
  return (
    <HStack
      py={10}
      textAlign="center"
      justify="center"
      maxW={'350px'}
    >
      <Box shadow={'base'} borderRadius={"2xl"} w={'full'}>
        <Box py={5} px={10} mb={5} textAlign={'left'}>
          <Text fontWeight="700" fontSize="xl">
            Alpha
          </Text>
          <HStack mb="4">
            <Text fontSize="5xl" fontWeight="800">
              CHF
            </Text>
            <Text fontSize="5xl" fontWeight="800">
              0
            </Text>
            <Text fontSize="xl" color="gray.500">
              /month
            </Text>
          </HStack>
          <Text>Become an alpha tester tester</Text>
        </Box>
        <VStack pb={10} borderBottomRadius={"xl"}>
          <List spacing={3} textAlign="start" mb={5}>
            <ListItem><ListIcon as={FaCheck} color='blue.500'/>Advanced analytics</ListItem>
            <ListItem><ListIcon as={FaCheck} color='blue.500'/>Patient management</ListItem>
            <ListItem><ListIcon as={FaCheck} color='blue.500'/>Appointment management</ListItem>
            <ListItem><ListIcon as={FaCheck} color='blue.500'/>SMS Notifications</ListItem>
          </List>
          <Box px={10} w="full">
            <a href="https://my.therapyapp.ch/auth/signup">
              <Button w={'full'} colorScheme='blue' borderRadius={'xl'}>Try now</Button>
            </a>
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
}

const PricingPage: NextPage = () => {
  return (
    <>
      <Nav></Nav>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Plans for all needs
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            The following plans are only valid for the alpha phase.
          </Text>
        </VStack>
        <VStack>
          <PricePlan></PricePlan>
        </VStack>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
