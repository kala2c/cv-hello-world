<template>
  <div class="page-container">
    <div>
      <p class="text">{{ msg.title }}, {{ msg.name }}</p>
      <button @click="add">+1</button> {{ count }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

const msg = reactive({
  title: "Hello",
  name: "Vue 3",
});

const count = ref(0);

const add = () => {
  count.value++;
};

</script>

<style lang="less">
.page-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>