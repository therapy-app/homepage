import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ReactElement } from 'react';

const AppointmentsSection: NextPage = () => {
  return (
    <Box id="appointments">
        <Container maxW={'container.xl'} height={500} py={10}>
            <Flex>
                <VStack align={'flex-start'}>
                    <Heading as={'h2'} fontSize={'4xl'}>Manage Appointments</Heading>
                    <Text></Text>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default AppointmentsSection
