import { Center, Image, Text, VStack } from "native-base"
import feedbackImg from '@assets/feedbackP.png'
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

export function FeedbackP() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleHome() {
    navigation.navigate("home")
  }

  return (
    <Center flex={1}>
      <VStack justifyContent="center" alignItems="center">
        <Text color="green.700" fontFamily="body" fontSize="xl" >
          Continue assim!
        </Text>
        <Text fontFamily="heading" mt={2} mb={10}>
          Você continua dentro da dieta. Muito bem!
        </Text>
        <Image
          source={feedbackImg}
          alt="Imagem de feedback positivo"
        />
        <Button
          title="Ir para página inicial"
          mt={10}
          onPress={handleHome}
        />
      </VStack>
    </Center>
  )
}