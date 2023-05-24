import { Box, Stack, VStack, Avatar, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            color={'whiteAlpha.700'}
            minH={'48'}
            px={'16'}
            py={["16", "8"]}
        >
            <Stack
                direction={["column", "row"]}
                h={'full'}
                alignItems={'center'}
            >
                <VStack w={'full'} alignItems={['center', 'flex-start']} >
                    <Text fontWeight={'bold'}>About Us</Text>
                    <Text fontSize={'sm'}
                        letterSpacing={'widest'}
                        textAlign={['center', 'left']}
                    >
                        We are the best crypto guider in India
                    </Text>
                </VStack>
                <VStack >
                    <Avatar mt={["4", "0"]} boxSize={'28'} />
                    <Text>Our Founder</Text>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer
