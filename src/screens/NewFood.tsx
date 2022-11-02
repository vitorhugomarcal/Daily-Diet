import { Button } from "@components/Button";
import { ButtonOptions } from "@components/ButtonOptions";
import { HeaderFood } from "@components/HeaderFood";
import { Input } from "@components/Input";
import { InputArea } from "@components/InputArea";
import { useNavigation } from "@react-navigation/native";
import { HStack, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

export function NewFood() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleHome() {
    navigation.goBack()
  }

  function handleFeedback() {
    navigation.navigate("feedbackN")
  }

  return (
    <VStack flex={1} bg="gray.300">
      <HeaderFood
        title="Nova refeição"
        onPress={handleHome}
      />
      <VStack
        flex={1}
        bg="gray.100"
        roundedTop={20}
        px={6}
        pt={8}
      >
        <Text color="gray.600" fontSize="sm" fontFamily="heading">
          Nome
        </Text>
        <Input
          name="nome"
        />
        <Text color="gray.600" fontSize="sm" fontFamily="heading">
          Descrição
        </Text>
        <InputArea />

        <HStack justifyContent="space-between">
          <VStack flex={1} mr={2}>
            <Text color="gray.600" fontSize="sm" fontFamily="heading">
              Data
            </Text>
            <Input
              name="data"
            />
          </VStack>
          <VStack flex={1} ml={2}>
            <Text color="gray.600" fontSize="sm" fontFamily="heading">
              Hora
            </Text>
            <Input
              name="hora"
            />
          </VStack>
        </HStack>
        <VStack flex={1}>
          <Text color="gray.600" fontSize="sm" fontFamily="heading" mb={1}>
            Está dentro da dieta?</Text>
          <HStack flex={1} space={2}>
            <ButtonOptions
              title="Sim"
              variant="yes"
              isActive
            />
            <ButtonOptions
              title="Não"
              variant="no"
            />
          </HStack>
        </VStack>
        <VStack flex={1} justifyContent="flex-end" mb={16}>
        <Button
          title="Cadastrar refeição"
          onPress={handleFeedback}
        />
        </VStack>
      </VStack>
    </VStack>
  )
}