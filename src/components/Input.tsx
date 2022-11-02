import { Input as NativeBaseInpit, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({errorMessage = null, isInvalid, ...rest}: Props) {
  const invalid = !!errorMessage || isInvalid
  
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInpit
        bg="white"
        h={12}
        mt={1}
        px={4}
        borderWidth={1}
        borderColor="gray.400"
        fontSize="md"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "white",
          borderWidth: 1,
          borderColor: "gray.600"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}