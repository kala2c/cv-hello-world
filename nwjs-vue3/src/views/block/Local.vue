<template>
  <div class="local">
    <UploadArea nw-dir v-model="testDir" :before-choose="handleChooseAppRunDir">
      <span class="tip-text" v-if="testDir">{{ testDir }}</span> &nbsp;
      <el-button type="primary" size="small">{{ testDir ? '修改' : '选取文件夹' }}</el-button>
    </UploadArea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UploadArea from '@/components/UploadArea.vue';

const testDir = ref('');

const handleChooseAppRunDir = (value) => {
  console.log('选择文件夹', value);
}
</script>

<style lang="scss" scoped>
.local {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
}
</style>
