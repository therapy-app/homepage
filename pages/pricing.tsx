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
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FaqSection from "../src/sections/faq";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={"gray.200"}
      borderRadius={"xl"}
    >
      {children}
    </Box>
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
        <HStack
          py={10}
          textAlign="center"
          justify="center"
        >
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={"blue.300"}
                  px={3}
                  py={1}
                  color={"gray.900"}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Alpha Tester
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    0
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>Advanced analytics</ListItem>
                  <ListItem>Patient management</ListItem>
                  <ListItem>Appointment management</ListItem>
                  <ListItem>SMS Notifications</ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="blue">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </HStack>
      </Box>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
