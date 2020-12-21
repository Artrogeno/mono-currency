import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    bg: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      body: string
      default: string
      dark: string
      light: string
    }
    fg: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      body: string
      default: string
      dark: string
      light: string
    }
  }
}
