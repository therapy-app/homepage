import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const AppointmentsSection: NextPage = () => {
  return (
    <Box bgGradient='linear(to-r, gray.100, transparent)'>
        <Container maxW={'container.xl'} height={500} py={10}>
            <Flex>
                <VStack align={'flex-start'}>
                    <Text fontWeight={700}>Appointments and badging</Text>
                    <Heading as={'h2'} fontSize={'5xl'}>Manage Appointments</Heading>
                    <Text>Advanced Analytics</Text>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default AppointmentsSection
