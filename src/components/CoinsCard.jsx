import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinsCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
    <Link to={`${id}`} >
        <VStack
            w={'52'}
            borderRadius={'lg'}
            shadow={'lg'}
            p={'8'}
            transition={'all 0.3s'}
            m={'4'}
            css={{
                "&:hover": {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='Exchanges'></Image>
            <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
            <Text size={'md'} noOfLines={1}>{name}</Text>
            <Text size={'md'} noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
        </VStack>
    </Link>
)

export default CoinsCard