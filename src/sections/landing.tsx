import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Nav from "../../components/Nav";

const LandingSection: NextPage = () => {
  return (
    <Box h={"100vh"}>
      <Nav></Nav>
      <Container maxW={"container.xl"} my={10}>
        <Flex
          alignItems={"center"}
          height={650}
          justifyContent={"space-between"}
        >
          <VStack align={"flex-start"} spacing={5}>
            <Heading as={"h1"} fontSize="7xl">
              Let your practice
              <Text
                bgGradient="linear(to-l, #36D1DC, #5B86E5)"
                bgClip="text"
                fontSize="7xl"
                fontWeight="extrabold"
              >
                {" "}
                feel relief.
              </Text>
            </Heading>
            <Text fontSize="2xl">Improve your workflow, reduce chaos.</Text>
            <Link href={"https://my.therapyapp.ch/auth/signup"}>
              <Button size={"lg"}>
                <Text>
                  Join the <i>free</i> alpha
                </Text>
              </Button>
            </Link>
          </VStack>
        </Flex>
        <Center>
          <Text fontSize={"1xl"}>
            <Link href={"https://my.therapyapp.ch/auth/signup"}>
              Join the alpha
            </Link>{" "}
            as an earlybird and enjoy{" "}
            <Link href={"pricing"}>discounted offers</Link>. 🐦
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default LandingSection;
