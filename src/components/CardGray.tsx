import { Heading, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string,
  subtitle: string,
 }

export function CardGray({title, subtitle, ...rest}: Props) {
  return(
      <VStack
        width="100%"
        bg="gray.200"
        maxH={20}
        marginX={6}
        p={4}
        alignItems="center"
        rounded={4}
        mb={3}
        >
        <Heading color="gray.700" fontSize="xl" fontFamily="body">{title}</Heading>
        <Text fontFamily="heading" fontSize="sm" color="gray.600" >{subtitle}</Text>
      </VStack>
  )
}