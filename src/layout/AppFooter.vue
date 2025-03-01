<template>
  <footer class="bg-gradient-to-r from-violet-950 to-purple-900 text-white/90">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Us -->
        <div>
          <h3 class="text-xl font-bold mb-4">About Us</h3>
          <p class="text-white/70">
            Explore, collect, and trade unique digital artworks. Build your NFT portfolio.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/gallery" class="hover:text-white">Browse Market</router-link></li>
            <li><router-link to="/publish" class="hover:text-white">Create NFT</router-link></li>
            <li><router-link to="/my" class="hover:text-white">My Collection</router-link></li>
          </ul>
        </div>
        
        <!-- Help Center -->
        <div>
          <h3 class="text-xl font-bold mb-4">Help Center</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">FAQs</a></li>
            <li><a href="#" class="hover:text-white">Guides</a></li>
            <li><a href="#" class="hover:text-white">Support</a></li>
          </ul>
        </div>
        
        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-white text-2xl transition-colors">
              <i class="fab fa-telegram"></i>
            </a>
            <a href="#" class="hover:text-white text-2xl transition-colors">
              <i class="fab fa-discord"></i>
            </a>
            <a href="#" class="hover:text-white text-2xl transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-white text-2xl transition-colors">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
        <p>&copy; 2024 NFT Market. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 