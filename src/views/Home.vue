<template>
  <div class="bg-gradient-to-b from-violet-50 to-purple-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- 搜索和筛选区 -->
      <div class="flex items-center gap-4 my-6 bg-base-200 p-4 rounded-lg">
        <div class="flex-1 relative">
          <input type="text" placeholder="Search NFTs..." class="input input-bordered w-full" />
          <i class="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 opacity-50"></i>
        </div>
        <select class="select select-bordered w-auto">
          <option>Latest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <!-- 热门作品 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Trending</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="nft in trendingNFTs" :key="nft.id" 
               class="group bg-base-100 rounded-3xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <!-- 图片区域 -->
            <div class="relative">
              <img :src="nft.image" :alt="nft.name" 
                   class="w-full aspect-square object-cover transform transition-transform duration-300 group-hover:scale-110"
                   @error="handleImageError" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-white font-bold">Buy Now</span>
                    <span class="text-white">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 信息区域 -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-2">
                <img :src="nft.collection.logo" class="w-6 h-6 rounded-full" :alt="nft.collection.name" />
                <span class="text-sm font-semibold">{{ nft.collection.name }}</span>
              </div>
              <h3 class="font-bold text-lg">{{ nft.name }}</h3>
              <div class="flex justify-between items-center mt-2">
                <span class="text-sm opacity-70">Current Price</span>
                <div class="flex items-center gap-1">
                  <i class="fab fa-ethereum text-primary"></i>
                  <span class="text-primary font-bold">{{ nft.price }} ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门卖家 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Top Sellers</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="seller in topSellers" :key="seller.id"
               class="flex flex-col items-center p-4 bg-base-100 rounded-lg hover:shadow-lg transition-all">
            <img :src="seller.avatar" :alt="seller.name" 
                 class="w-20 h-20 rounded-full mb-3 object-cover" />
            <h3 class="font-semibold">{{ seller.name }}</h3>
            <p class="text-sm opacity-70">{{ seller.sales }} items</p>
          </div>
        </div>
      </div>

      <!-- 页脚社交链接 -->
      <footer class="footer items-center p-4 bg-base-200 text-base-content rounded-box">
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="#" class="btn btn-ghost btn-circle">
            <i class="fab fa-telegram text-2xl"></i>
          </a>
          <a href="#" class="btn btn-ghost btn-circle">
            <i class="fab fa-discord text-2xl"></i>
          </a>
          <a href="#" class="btn btn-ghost btn-circle">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" class="btn btn-ghost btn-circle">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// 更新 trendingNFTs 数据，添加第9个 NFT，并调整图片来源
const trendingNFTs = [
  {
    id: 1,
    name: 'Bored Ape #7495',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
    price: '99.9',
    collection: {
      name: 'Bored Ape YC',
      logo: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256'
    }
  },
  {
    id: 2,
    name: 'CryptoPunk #7804',
    image: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=1000',
    price: '88.8',
    collection: {
      name: 'CryptoPunks',
      logo: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256'
    }
  },
  {
    id: 3,
    name: 'Doodle #2891',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
    price: '77.7',
    collection: {
      name: 'Doodles',
      logo: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256'
    }
  },
  {
    id: 4,
    name: 'Azuki #9605',
    image: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=1000',
    price: '66.6',
    collection: {
      name: 'Azuki',
      logo: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256'
    }
  },
  {
    id: 5,
    name: 'Cool Cat #4521',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
    price: '45.5',
    collection: {
      name: 'Cool Cats',
      logo: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256'
    }
  },
  {
    id: 6,
    name: 'World of Women #2193',
    image: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=1000',
    price: '33.3',
    collection: {
      name: 'World of Women',
      logo: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256'
    }
  },
  {
    id: 7,
    name: 'Moonbird #7890',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
    price: '22.2',
    collection: {
      name: 'Moonbirds',
      logo: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256'
    }
  },
  {
    id: 8,
    name: 'CloneX #3456',
    image: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=1000',
    price: '11.1',
    collection: {
      name: 'CloneX',
      logo: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256'
    }
  },
  {
    id: 9,
    name: 'Pudgy Penguin #1234',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
    price: '8.8',
    collection: {
      name: 'Pudgy Penguins',
      logo: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256'
    }
  }
]

// 更新 topSellers 数据
const topSellers = [
  {
    id: 1,
    name: 'NFT King',
    avatar: 'https://i.pravatar.cc/150?img=68',
    sales: '789 items'
  },
  {
    id: 2,
    name: 'Crypto Queen',
    avatar: 'https://i.pravatar.cc/150?img=47',
    sales: '654 items'
  },
  {
    id: 3,
    name: 'Art Master',
    avatar: 'https://i.pravatar.cc/150?img=33',
    sales: '543 items'
  },
  {
    id: 4,
    name: 'Pixel Lord',
    avatar: 'https://i.pravatar.cc/150?img=12',
    sales: '432 items'
  },
  {
    id: 5,
    name: 'Doodle King',
    avatar: 'https://i.pravatar.cc/150?img=3',
    sales: '321 items'
  },
  {
    id: 6,
    name: 'NFT Wizard',
    avatar: 'https://i.pravatar.cc/150?img=15',
    sales: '210 items'
  }
]

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = 'https://placehold.co/400x400/png?text=NFT'; // 使用在线占位图
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
