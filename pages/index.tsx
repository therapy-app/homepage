import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Nav from "../components/Nav";
import AnalyticsSection from "../src/sections/analytics";
import AppointmentsSection from "../src/sections/appointments";
import FaqSection from "../src/sections/faq";
import PatientsSection from "../src/sections/patients";

const IndexPage: NextPage = () => {
  return (
    <Box>
      <Box h={"100vh"}>
        <Nav></Nav>
        <Container maxW={"container.xl"} my={10}>
          <Flex alignItems={"center"} height={650}>
            <VStack align={"flex-start"} spacing={5}>
              <Heading as={"h1"} fontSize="7xl">
                Help your practice <br />
                <Text
                  bgGradient="linear(to-l, #36D1DC, #5B86E5)"
                  bgClip="text"
                  fontSize="7xl"
                  fontWeight="extrabold"
                  display={"inline"}
                >
                  {" "}
                  progressing.
                </Text>
              </Heading>
              <Text fontSize="2xl">Improve your workflow, reduce chaos.</Text>
              <Link href={'https://my.therapyapp.ch/auth/signup'}><Button size={'lg'}>Join the alpha</Button></Link>
            </VStack>
          </Flex>
          <Center>
            <Text fontSize={"1xl"}>
              <Link href={'https://my.therapyapp.ch/auth/signup'}>Join the alpha</Link> as an earlybird and enjoy{" "}
              <Link href={'pricing'}>discounted offers</Link>. 🐦
            </Text>
          </Center>
        </Container>
      </Box>
      <AnalyticsSection></AnalyticsSection>
      <PatientsSection></PatientsSection>
      <AppointmentsSection></AppointmentsSection>
      <FaqSection></FaqSection>
    </Box>
  );
};

export default IndexPage;
