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
      <ul class="flex items-center py-3 pr-3 md:pr-12 xl:pr-48">
        <!-- <li class="btn btn-indigo btn-sm sm:btn-md">登录</li> -->
      </ul>
    </div>
  </header>
</template>

<script setup></script>
