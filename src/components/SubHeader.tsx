import { Heading, Text, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native"
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
  title: string,
  subtitle: string,
 }


export function SubHeader({title, subtitle, ...rest}: Props) {
  return(
    <VStack
      bg="green.200"
      maxH={48}
      pt={16}
      px={6}
      pb={8}
      flex={1}
    >
      <TouchableOpacity {...rest}>
        <ArrowLeft
          color="#639339"
          size={24}
          weight="bold"
        />
      </TouchableOpacity>
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Heading color="gray.700" fontSize="xxl" fontFamily="body">
          {title}
        </Heading>
        <Text fontFamily="heading" fontSize="lg" color="gray.600">
          {subtitle}
        </Text>
      </VStack>
    </VStack>
  )
}