import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Link from "next/link"

const Nav: NextPage = () => {
    return (
      <Flex justify={'space-between'} py="3" px="6" alignItems="center">
        <Link href={"/"}>
          <a>
          <Heading as='h3' size='md'>
            therapyapp
          </Heading>
          </a>
        </Link>
        <HStack spacing={5}>
          <a>
            <Text fontSize='md' fontWeight={700}>Features</Text>
          </a>
          <a>
            <Text fontSize='md' fontWeight={700}>FAQ</Text>
          </a>
          <Link href={"pricing"}>
            <a>
              <Text fontSize='md' fontWeight={700}>Pricing</Text>
            </a>
          </Link>
        </HStack>
        <HStack>
          <Link href={"https://my.therapyapp.ch/auth/signin"}>
            <a>
              <Button variant='outline'>Sign In</Button>
            </a>
          </Link>
          <Link href={"https://my.therapyapp.ch/auth/signup"}>
            <a>
              <Button variant='solid'>Sign Up</Button>
            </a>
          </Link>
        </HStack>
      </Flex>
    )
}

export default Nav