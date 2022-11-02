import { HStack, IPressableProps, Image, Pressable, Text } from "native-base"

type Props = IPressableProps & {
  title: string,
  variant?: 'yes' | 'no'
  isActive?: boolean
}

export function ButtonOptions({title, variant = "yes", isActive = false, ...rest}: Props) {
  return (
    <Pressable
      flex={1}
      h={12}
      bg="gray.200"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        bg: "green.500",
        borderColor: "green.700",
        borderWidth: 1
      }}
      {...rest}
    >
      <HStack alignItems="center">
        <Image
          w={2}
          h={2}
          rounded="full"
          bg={ variant === 'yes' ? 'green.700' : 'red.700' }
          alt="Dentro ou Fora"
        />
        <Text color="gray.600" pl={4} fontFamily="heading" fontSize="sm">
          {title}
        </Text>
      </HStack>
    </Pressable>
  )
}