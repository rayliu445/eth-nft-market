import { ref, computed } from 'vue'
import { ethers } from 'ethers'
import { getProvider } from './useWeb3'

export function useWallet() {
  const isConnected = ref(false)
  const account = ref('')
  const chainId = ref('')
  const provider = ref<any>(null)

  const shortAddress = computed(() => {
    if (!account.value) return ''
    return `${account.value.slice(0, 6)}...${account.value.slice(-4)}`
  })

  const connect = async () => {
    try {
      provider.value = await getProvider()
      const signer = provider.value.getSigner()
      const address = await signer.getAddress()
      const network = await provider.value.getNetwork()
      
      account.value = address
      chainId.value = network.chainId
      isConnected.value = true

      // 监听账户变化
      provider.value.provider.on("accountsChanged", (accounts: string[]) => {
        account.value = accounts[0]
      })

      // 监听链变化
      provider.value.provider.on("chainChanged", () => {
        window.location.reload()
      })
    } catch (error) {
      console.error("Could not connect to wallet:", error)
    }
  }

  const disconnect = async () => {
    isConnected.value = false
    account.value = ''
    chainId.value = ''
    provider.value = null
  }

  return {
    isConnected,
    account,
    chainId,
    provider,
    shortAddress,
    connect,
    disconnect
  }
} 