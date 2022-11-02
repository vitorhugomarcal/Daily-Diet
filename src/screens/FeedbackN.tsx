import { Center, Image, Text, VStack } from "native-base"
import feedbackImg from '@assets/feedbackN.png'
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

export function FeedbackN() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleHome() {
    navigation.navigate("home")
  }

  return (
    <Center flex={1} px={6}>
      <VStack justifyContent="center" alignItems="center">
        <Text color="red.700" fontFamily="body" fontSize="xl" >
          Que pena!
        </Text>
        <Text fontFamily="heading" mt={2} mb={10} textAlign="center">
          Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
        </Text>
        <Image
          source={feedbackImg}
          alt="Imagem de feedback negativo"
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