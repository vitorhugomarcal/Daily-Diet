import { HStack, Image, Text} from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
 
type Props = TouchableOpacityProps & {
  title: string,
  hour: string,
  variant?: 'in' | 'out'
}

export function FoodCard({title, hour, variant = 'in', ...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        rounded="md"
        borderWidth={1}
        borderColor="gray.500"
        p={3}
        mb={2}
        h={12}
        alignItems="center"
        justifyContent="space-between"
        >
        <HStack>
          <Text >
            {hour}
          </Text>
          <Text px={3} color="gray.500">
            |
          </Text>
          <Text>
            {title}
          </Text>
        </HStack>
        <Image
          w={4}
          h={4}
          rounded="full"
          bg={ variant === 'in' ? 'green.500' : 'red.500' }
          alt="Dentro ou Fora"
        />
      </HStack>
    </TouchableOpacity>
  )
}