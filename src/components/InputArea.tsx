import { TextArea, ITextAreaProps, FormControl } from 'native-base'

type Props = ITextAreaProps & {
  errorMessage?: string | null;
}

export function InputArea({errorMessage = null, isInvalid, ...rest}: Props) {
  const invalid = !!errorMessage || isInvalid
  
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <TextArea
        h={32}
        borderWidth={1}
        borderColor="gray.400"
        fontSize="md"
        fontFamily="heading"
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