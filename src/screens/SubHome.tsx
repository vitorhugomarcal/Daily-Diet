import { CardGray } from "@components/CardGray";
import { CardHome } from "@components/CardHome";
import { MiniCard } from "@components/MiniCard";
import { SubHeader } from "@components/SubHeader";
import { useNavigation } from "@react-navigation/native";
import { HStack, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

export function SubHome() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <VStack flex={1} bg="green.200">
      <SubHeader
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={handleGoHome}
        />
      <VStack
        flex={1}
        bg="gray.100"
        roundedTop={20}
        alignItems="center"
        px={6}
        pt={8}
      >
        <Text mb={6}>
          Estatísticas gerais
        </Text>
        <CardGray
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <CardGray
          title="109"
          subtitle="refeições registradas"
        />
        <HStack w="full" justifyContent="space-between">
          <MiniCard
            title="99"
            subtitle="refeições dentro
            da dieta"
            />
          <MiniCard
            title="10"
            subtitle="refeições fora da dieta"
            variant="out"
          />
        </HStack>
      </VStack>
    </VStack>
  )
}