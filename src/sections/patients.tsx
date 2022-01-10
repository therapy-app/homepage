import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const PatientsSection: NextPage = () => {
  return (
    <Box>
        <Container maxW={'container.xl'} py={10}>
            <Flex height={'auto'} alignItems={'flex-start'}>
                <VStack width={'full'}>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Add patients</Heading>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Add patients</Heading>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Add patients</Heading>
                    </Box>
                </VStack>
                <VStack width={'full'} position={'sticky'} top={0} >
                    <Text fontWeight={700}>Patient Module</Text>
                    <Heading as={'h2'}>Feature-rich patient management</Heading>
                    <Text>TODO:</Text>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default PatientsSection
