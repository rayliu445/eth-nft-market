<template>
  <div class="owner-info">
    <h3>所有者信息</h3>
    <div class="info-item">
      <label>地址:</label>
      <span class="address">{{ owner.address }}</span>
    </div>
    <div class="info-item">
      <label>名称:</label>
      <span class="name">{{ owner.name }}</span>
    </div>
    <div v-if="owner.profile">
      <h4>个人资料</h4>
      <div class="profile">
        <p>邮箱: {{ owner.profile.email }}</p>
        <p>社交账号: {{ owner.profile.social }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OwnerInfo',
  props: {
    owner: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.owner-info {
  margin-top: 16px;
  
  .info-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    
    label {
      font-weight: bold;
      margin-right: 8px;
    }
    
    .address {
      color: #666;
      word-break: break-all;
    }
    
    .name {
      color: #333;
    }
  }
  
  .profile {
    margin-top: 12px;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 6px;
  }
}
</style>