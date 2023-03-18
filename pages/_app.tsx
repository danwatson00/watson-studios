import { ThemeProvider, Box } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import TopMenu from '../components/TopMenu'

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  Component: any,
  emotionCache: any,
  pageProps: any
}

function MyApp ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps){
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <TopMenu />
        <Box sx={{ m: 2 }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;