import { extendTheme } from "native-base";

export const THEME = extendTheme(
  {
    colors: {
      white: '#FFFFFF',
      green:{
        700: '#639339',
        500: '#CBE4B4',
        200: '#E5F0DB',
      },
      red: {
        200: '#F4E6E7',
        500: '#F3BABD',
        700: '#AA2834',
      },
      gray: {
        700: '#1B1D1E',
        600: '#333638',
        500: '#5C6265',
        400: '#B9BBBC',
        300: '#DDDEDF',
        200: '#EFF0F0',
        100: '#FAFAFA'
      },
    },
    fonts: {
      heading: 'NunitoSans_400Regular',
      body: 'NunitoSans_700Bold'
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
    sizes: {
      45: 180
    }
  }
)