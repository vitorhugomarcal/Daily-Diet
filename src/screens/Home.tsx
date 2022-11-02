import { Button } from "@components/Button";
import { CardHome } from "@components/CardHome";
import { FoodCard } from "@components/FoodCard";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Heading, ScrollView } from "native-base";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSubHome() {
    navigation.navigate('subHome')
  }
  
  function handleNewFood() {
    navigation.navigate('newFood')
  }

  function handleEditFood() {
    navigation.navigate('editFood')
  }

  return(
    <VStack flex={1} mx={6}>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }} showsVerticalScrollIndicator={false}>

        <HomeHeader />
        <CardHome
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          onPress={handleSubHome}
        />
        <Text fontSize="xl" fontFamily="heading" mb={2} >
          Refeições
        </Text>
        <Button
          title="Nova refeição"
          onPress={handleNewFood}
        />
        <Heading mt={8} mb={2}>
          12.08.22
        </Heading>
        <FoodCard title="X-tudo" hour="20:00" variant="out" onPress={handleEditFood}/>
        <FoodCard title="Whey protein com leite" hour="16:00"/>
        <FoodCard title="Salada cesar com frango" hour="12:30"/>
        <FoodCard title="Vitamina de banana" hour="09:30"/>
        <Heading mt={8} mb={2}>
          11.08.22
        </Heading>
        <FoodCard title="X-tudo" hour="20:00" variant="out"/>
        <FoodCard title="Whey protein com leite" hour="16:00"/>
        <FoodCard title="Salada cesar com frango" hour="12:30"/>
        <FoodCard title="Vitamina de banana" hour="09:30"/>

      </ScrollView>
    </VStack>
  )
}