<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-900 to-purple-800 shadow-lg">
    <div class="flex justify-between items-center h-16">
      <ul class="flex items-center pl-3 md:pl-12 xl:pl-48">
        <li class="mr-4 text-sm font-bold text-white/90 transition-all cursor-pointer md:text-base lg:text-lg sm:mr-6 hover:text-white hover:border-b-white hover:border-b-2">
          <router-link to="/home" class="block">Home</router-link>
        </li>
        <li class="mr-4 text-sm font-bold text-white/90 transition-all cursor-pointer md:text-base lg:text-lg sm:mr-6 hover:text-white hover:border-b-white hover:border-b-2">
          <router-link to="/my" class="block">My NFTs</router-link>
        </li>
        <li class="mr-4 text-sm font-bold text-white/90 transition-all cursor-pointer md:text-base lg:text-lg sm:mr-6 hover:text-white hover:border-b-white hover:border-b-2">
          <router-link to="/publish" class="block">Create</router-link>
        </li>
        <li class="mr-4 text-sm font-bold text-white/90 transition-all cursor-pointer md:text-base lg:text-lg sm:mr-6 hover:text-white hover:border-b-white hover:border-b-2">
          <router-link to="/gallery" class="block">Marketplace</router-link>
        </li>
      </ul>
      <div class="pr-3 md:pr-12 xl:pr-48">
        <button v-if="!isConnected" 
                @click="openWalletModal"
                class="btn btn-primary btn-sm md:btn-md gap-2 bg-violet-600 hover:bg-violet-700 border-none">
          <i class="fas fa-wallet"></i>
          Connect Wallet
        </button>
        <button v-else
                @click="openAccountModal" 
                class="btn btn-ghost btn-sm md:btn-md text-white gap-2">
          <i class="fas fa-circle text-green-400 text-xs"></i>
          {{ shortAddress }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWallet } from '@/hooks/useWallet'

const { 
  isConnected, 
  shortAddress, 
  connect: openWalletModal, 
  disconnect 
} = useWallet()

const openAccountModal = () => {
  disconnect()
}
</script>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>
<style scoped>
.btn {
  text-transform: none;
}
</style>
