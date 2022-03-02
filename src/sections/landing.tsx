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
  Image,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Nav from "../../components/Nav";
import Reveal from "react-awesome-reveal";
import { fadeInLeft } from "../../styles/animations";
import dashboard from '../../public/dashboard-3d.png';

const LandingSection: NextPage = () => {
  return (
    <Box minH={"100vh"} maxW={'2200px'} overflow={'hidden'} position={'relative'}>
      <Nav></Nav>
      <Container maxW={"container.xl"} my={10}>
        <Flex
          alignItems={"center"}
          height={650}
          justifyContent={"space-between"}
          direction={{base: 'column', lg: 'row'}}
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
            {/* <Text fontSize={"lg"}>
              <Link href={"https://my.therapyapp.ch/auth/signup"}>
                Join the alpha
              </Link>{" "}
              as an earlybird and enjoy{" "}
              <Link href={"pricing"}>discounted offers</Link>. 🐦
            </Text> */}
          </VStack>
        </Flex>
      </Container>
      <Box position={'absolute'} right={-50} top={{base: 400, lg: 200, xl: 150}} zIndex={-1}>
        <Reveal keyframes={fadeInLeft}>
          <Image rounded='md' mt={40} width={{base: 750,  xl: 1000}} src={dashboard.src} alt="Image showing dashboard." priority={true}></Image>
        </Reveal>
      </Box>
    </Box>
  );
};

export default LandingSection;
