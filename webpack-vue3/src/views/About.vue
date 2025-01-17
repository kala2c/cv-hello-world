<template>
  <div class="page-container">
    <p>{{ msg }}。</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('这是关于页面');
</script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>