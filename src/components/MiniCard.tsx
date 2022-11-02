import { Heading, Text, VStack } from "native-base";
import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  variant?: 'in' | 'out'
  title: string,
  subtitle: string
 }

export function MiniCard({title, subtitle, variant = 'in', ...rest}: Props) {
  return(
      <VStack
        bg={ variant === 'out' ? 'red.500' : 'green.200'}
        py={5}
        px={6}
        maxW={45}
        alignItems="center"
        justifyContent="center"
        rounded={4}
        >
        <Heading color="gray.700" fontSize="xl" fontFamily="body">{title}</Heading>
        <Text fontFamily="heading" fontSize="sm" color="gray.600" numberOfLines={2} textAlign="center" >{subtitle}</Text>
      </VStack>
  )
}