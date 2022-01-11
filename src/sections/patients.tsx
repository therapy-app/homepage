import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const PatientsSection: NextPage = () => {
  return (
    <Box>
        <Container maxW={'container.xl'} py={10}>
            <Flex height={'auto'} alignItems={'flex-start'}>
                <VStack width={'full'} align={'flex-start'}>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Manage patients</Heading>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Manage Findings</Heading>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Manage Observations</Heading>
                    </Box>
                </VStack>
                <VStack width={'full'} position={'sticky'} top={0} >
                    <Text fontWeight={700}>Patient Module</Text>
                    <Heading as={'h2'} fontSize={'5xl'}>Feature-rich patient management</Heading>
                    <Text>TODO:</Text>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default PatientsSection
