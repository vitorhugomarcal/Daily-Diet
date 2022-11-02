import { Center, Heading, HStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native"
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
  title: string,
 }

export function HeaderFood({title, ...rest}: Props) {
  return(
    <HStack
      bg="gray.300"
      maxH={32}
      pt={16}
      px={6}
      pb={8}
      flex={1}
      alignItems="center"
    >
      <TouchableOpacity {...rest}>
        <ArrowLeft
          color="black"
          size={24}
          weight="bold"
        />
      </TouchableOpacity>
        <Center flex={1} alignItems="center" justifyContent="center">
        <Heading color="gray.700" fontSize="xl" fontFamily="body">
          {title}
        </Heading>
      </Center>
    </HStack>
  )
}