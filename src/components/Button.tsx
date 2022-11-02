import { Button as ButtonNativeBase, HStack, IButtonProps, ITextProps, Text } from "native-base"
import { Plus } from 'phosphor-react-native'

type Props = IButtonProps & ITextProps & {
  title: string,
  variant?: 'solid' | 'outline'
  isPressed?: boolean
}

export function Button({title, variant = "solid", isPressed = false, ...rest}: Props) {
  return (
    <ButtonNativeBase
      h={12}
      bg={variant === 'outline' ? "transparent" : "gray.600"}
      borderWidth={ variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      _text={{ color: variant === 'outline' ? "gray.700" : 'white', fontSize: 'md', fontFamily:"heading"}}
      _pressed={{
        _text: {color: "white"},
        bg: "gray.700",
      }}
      
      {...rest}
    >
      <HStack alignItems="center">
        {/* <Plus color="white" size={18}/> */}
        <Text color="white" px={4} fontFamily="body" fontSize="sm">
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  )
}