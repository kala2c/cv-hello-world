<template>
  <div class="index-page">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="本地" name="local">
        <Local />
      </el-tab-pane>
      <el-tab-pane label="错误" name="error">
        <Error />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Local from './block/Local.vue';
import Error from './block/Error.vue';

const activeTab = ref('local');

</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  height: 100%;
}
</style>
