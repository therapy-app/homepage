import { Box, Container, Flex, Heading, Button, SimpleGrid, Text, useRadio, VStack, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'

const JoinAlphaBox: NextPage = () => {
  return (
    <Container maxW={{md: 'container.md', lg: 'container.lg', xl: 'container.xl'}} mb={10}>
        <Flex alignItems={'center'} justifyContent={'center'} py={20} borderRadius={'2xl'} bgGradient='linear(to-b, purple.300, purple.400)'>
            <VStack spacing={4}>
                <Heading color={'white'} as={'h2'}>Interested?</Heading>
                <Text color={'gray.100'} fontWeight={600} fontSize={'xl'}>Try out the alpha of therapyapp for free.</Text>
                <Button color={'purple.400'} backgroundColor={'white'} borderRadius={'xl'} size={'lg'}>Join the alpha</Button>
            </VStack>
        </Flex>
    </Container>
  );
}

export default JoinAlphaBox;
