import { HStack, Image } from "native-base";
import LogoImg from '@assets/Logo.png'
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return(
    <HStack
      pt={16}
      pb={8}
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        source={LogoImg}
        alt="Logo Daily Diet"
      />
      <UserPhoto
        source={{ uri: 'https://github.com/vitorhugomarcal.png'}}
        size={16}
        alt="Imagem do usuário"
      />
    </HStack>
  )
}