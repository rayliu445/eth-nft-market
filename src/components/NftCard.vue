<template>
  <div class="nft-card">
    <div class="nft-image">
      <img :src="nft.image" :alt="nft.name" />
    </div>
    <div class="nft-info">
      <h3>{{ nft.name }}</h3>
      <p>{{ nft.description }}</p>
      <div class="nft-metadata">
        <div class="metadata-item">
          <span class="label">ID:</span>
          <span class="value">{{ nft.id }}</span>
        </div>
        <div class="metadata-item">
          <span class="label">创建时间:</span>
          <span class="value">{{ nft.createdAt }}</span>
        </div>
        <div class="metadata-item">
          <span class="label">所有者:</span>
          <span class="value">{{ nft.owner }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NftCard',
  props: {
    nft: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.nft-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px 0;
  
  .nft-image {
    width: 200px;
    height: 200px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 8px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .nft-info {
    text-align: center;
    
    h3 {
      margin-bottom: 12px;
      color: #333;
    }
    
    p {
      margin-bottom: 16px;
      color: #666;
    }
    
    .nft-metadata {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      .metadata-item {
        display: flex;
        align-items: center;
        gap: 8px;
        
        .label {
          font-weight: bold;
          color: #333;
        }
        
        .value {
          color: #666;
        }
      }
    }
  }
}
</style>