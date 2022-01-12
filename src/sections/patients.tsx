import { Box, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'

const PatientsSection: NextPage = () => {
  return (
    <Box id="patients">
        <Container maxW={'container.xl'} py={10}>
            <Flex height={'auto'} alignItems={'flex-start'}>
                <VStack width={'full'} align={'flex-start'}>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'3xl'}>Manage patients</Heading>
                        <Text>Easily create, edit and view patient data using our simple ui. Search any patient and see the most important informations instantly. Use the detail view and analyse the patients progress through visualized data components.</Text>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'3xl'}>Manage Findings</Heading>
                    </Box>
                    <Box height={300}>
                        <Heading as={'h3'} fontSize={'3xl'}>Manage Observations</Heading>
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
