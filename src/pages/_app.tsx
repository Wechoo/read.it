import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import { readitTheme } from '../theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={readitTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
