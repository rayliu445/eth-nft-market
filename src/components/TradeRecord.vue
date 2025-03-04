<template>
  <div class="trade-record">
    <h3>交易记录</h3>
    <div v-if="records.length === 0">
      <p>暂无交易记录</p>
    </div>
    <div v-else>
      <div class="record-item" v-for="(trade, index) in records" :key="index">
        <div class="record-header">
          <span>交易时间: {{ trade.time }}</span>
          <span>交易金额: {{ trade.amount }} ETH</span>
        </div>
        <div class="record-details">
          <p>买家: {{ trade.buyer }}</p>
          <p>卖家: {{ trade.seller }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
interface TradeRecordType {
  time: string
  amount: string
  buyer: string
  seller: string
}

export default defineComponent({
  name: 'TradeRecord',
  props: {
    records: {
      type: Array as PropType<TradeRecordType[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.trade-record {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;

    .record-item {
        margin-bottom: 16px;
        background-color: #f5f5f5;
        padding: 12px;
        border-radius: 6px;
    }

    .record-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-weight: bold;
    }

    .record-details {
        font-size: 0.9em;
        color: #666;
    }
}
</style>