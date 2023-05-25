import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const btcSrc = "https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png"

const Home = () => {
    return (
        <Box w={'full'} h={'85vh'} bgColor={'blackAlpha.900'}>
            <motion.div style={{
                height: '80vh',
            }}
                animate={{
                    translateY: '20px',
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            >
                <Image
                    w={'full'}
                    h={'full'}
                    objectFit={'contain'}
                    src={btcSrc}
                    filter={'grayscale(1)'}
                />
            </motion.div>
            <Text
                fontSize={'6xl'}
                textAlign={'center'}
                fontWeight={'thin'}
                color={'whiteAlpha.500'}
                mt={'-15'}
            >Gcrypto</Text>
        </Box>
    )
}

export default Home
