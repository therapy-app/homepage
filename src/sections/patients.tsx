import { Box, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'

const PatientsSection: NextPage = () => {
  return (
    <Box>
        <Container maxW={'container.xl'} py={10}>
            <Flex height={'auto'} alignItems={'flex-start'}>
                <VStack width={'full'} align={'flex-start'}>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Manage patients</Heading>
                    </Box>
                    <Divider width={200}/>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'xl'}>Manage Findings</Heading>
                    </Box>
                    <Divider width={200}/>
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
