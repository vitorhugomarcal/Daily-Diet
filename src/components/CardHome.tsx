import { Heading, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ArrowUpRight } from 'phosphor-react-native'
type Props = TouchableOpacityProps & {
  variant?: 'in' | 'out'
  title: string,
  subtitle: string
 }

export function CardHome({title, subtitle, variant = 'in', ...rest}: Props) {
  return(
      <VStack
        bg={ variant === 'out' ? 'red.500' : 'green.200'}
        px={4}
        py={5}
        mb={10}
        rounded={4}
        alignItems="flex-end"
        justifyContent="flex-end"
        >
      <TouchableOpacity {...rest}>
        <ArrowUpRight color="#639339" size={24}/>
      </TouchableOpacity>
      <VStack alignItems="center" justifyContent="center" w="full">
        <Heading color="gray.700" fontSize="xxl" fontFamily="body">{title}</Heading>
        <Text fontFamily="heading" fontSize="lg" color="gray.600" >{subtitle}</Text>
      </VStack>
      </VStack>
  )
}