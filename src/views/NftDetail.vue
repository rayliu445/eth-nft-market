<template>
  <div class="nft-detail-container bg-gradient-to-b from-violet-50 to-purple-50 min-h-screen">
    <button class="back-button" @click="$router.go(-1)">
      ← 返回
    </button>
    <div class="nft-detail">
      <h1>NFT 详情</h1>
      <div class="nft-info">
        <div class="nft-metadata">
          <h2>元数据</h2>
          <NftCard :nft="nft" />
        </div>
        <div class="trade-history">
          <h2>交易记录</h2>
          <TradeRecord :records="tradeRecords" />
        </div>
        <div class="owner-info">
          <h2>所有者信息</h2>
          <OwnerInfo :owner="owner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NftCard from '@/components/NftCard.vue'
import TradeRecord from '@/components/TradeRecord.vue'
import OwnerInfo from '@/components/OwnerInfo.vue'

export default defineComponent({
  name: 'NftDetail',
  components: {
    NftCard,
    TradeRecord,
    OwnerInfo
  },
  data() {
    return {
      nft: {
        id: 1,
        name: '示例 NFT',
        description: '这是一个示例 NFT 用于展示',
        image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=1000',
        price: '1.0 ETH'
      },
      tradeRecords: [],
      owner: {
        address: '0x1234567890abcdef',
        name: '用户1'
      }
    }
  }
})
</script>

<style lang="less" scoped>
.nft-detail-container {
  padding: 20px;
  
  .back-button {
    margin-bottom: 20px;
  }

  .nft-detail {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .nft-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .nft-metadata, .trade-history, .owner-info {
    background: #f5f5f5;
    padding: 16px;
    border-radius: 6px;
  }

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 12px;
    color: #333;
  }
}
</style>