import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, useRadio, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

function RadioCard(props : any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' width={250}>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

const FaqSection: NextPage = () => {
  return (
    <Container maxW={'container.xl'} py={10}>
            <Flex height={'auto'} alignItems={'flex-start'}>
                <VStack width={'full'} position={'sticky'} top={0} align={'flex-start'}>
                    <Heading as={'h2'} fontSize={'5xl'}>Frequently asked questions</Heading>
                    <RadioCard>General</RadioCard>
                    <RadioCard>Subscription</RadioCard>
                </VStack>
                <SimpleGrid width={'full'} columns={2} spacing={10}>
                    <VStack align={'flex-start'} height='150px'>
                        <Heading as={'h3'} fontSize={'xl'}>What is therapyapp?</Heading>
                        <Text fontSize={'lg'}>asdfasdfasdf asdf asdfasd asdfasd fasd fasd</Text>
                    </VStack>
                    <VStack align={'flex-start'} height='150px'>
                        <Heading as={'h3'} fontSize={'xl'}>What is therapyapp?</Heading>
                        <Text fontSize={'lg'}>asdfasdfasdf asdf asdfasd asdfasd fasd fasd</Text>
                    </VStack>
                    <VStack align={'flex-start'} height='150px'>
                        <Heading as={'h3'} fontSize={'xl'}>What is therapyapp?</Heading>
                        <Text fontSize={'lg'}>asdfasdfasdf asdf asdfasd asdfasd fasd fasd</Text>
                    </VStack>
                    <VStack align={'flex-start'} height='150px'>
                        <Heading as={'h3'} fontSize={'xl'}>What is therapyapp?</Heading>
                        <Text fontSize={'lg'}>asdfasdfasdf asdf asdfasd asdfasd fasd fasd</Text>
                    </VStack>
                </SimpleGrid>
            </Flex>
        </Container>
  )
}

export default FaqSection
