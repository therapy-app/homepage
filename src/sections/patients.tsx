import { Box, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'

const PatientsSection: NextPage = () => {
  return (
    <Box id="patients">
        <Container maxW={'container.xl'} py={75}>
            <HStack alignItems={'flex-start'}>
                <VStack width={'full'} height={'400px'} position={'sticky'} top={50} align={'flex-start'}>
                    <Heading as={'h2'} fontSize={'5xl'}>Patient management</Heading>
                    <Text></Text>
                </VStack>
                <HStack width={'full'} h={'1500px'}>
                    <Divider orientation={'vertical'}></Divider>
                    <VStack align={'flex-start'}>
                        <VStack height={400} px={50} width={'full'} align={'flex-start'}>
                            <Heading as={'h3'} fontSize={'3xl'}>Manage patients</Heading>
                            <Text>Easily create, edit and view patient data using our simple ui. Search any patient and see the most important informations instantly. Use the detail view and analyse the patients progress through visualized data components.</Text>
                        </VStack>
                        <Center width={'full'} py={5}>
                            <Divider width={'80%'}></Divider>
                        </Center>
                        <VStack height={400} px={50} width={'full'} align={'flex-start'}>
                            <Heading as={'h3'} fontSize={'3xl'}>Manage Findings</Heading>
                        </VStack>
                        <Center width={'full'} py={5}>
                            <Divider width={'80%'}></Divider>
                        </Center>
                        <VStack height={400} px={50} width={'full'} align={'flex-start'}>
                            <Heading as={'h3'} fontSize={'3xl'}>Manage Observations</Heading>
                        </VStack>
                    </VStack>
                </HStack>
            </HStack>
        </Container>
    </Box>
  )
}

export default PatientsSection
