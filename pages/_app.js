import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

const activeChainId = ChainId.Mumbai

const magicWalletConnector = {
  name: 'magic',
  options: {
    // Replace this with your own magic link api key
    apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY,
    rpcUrls: {
      [ChainId.Mumbai]: "https://mumbai.magic.io/rpc",
    },
  },
}

const connectors = [magicWalletConnector]

function MyApp({ Component, pageProps }) {
  return (
      <ThirdwebProvider desiredChainId={activeChainId} walletConnectors={connectors}>
        <Component {...pageProps} />
      </ThirdwebProvider>
  )
}

export default MyApp