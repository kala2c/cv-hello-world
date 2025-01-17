<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      |
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 5px 0;
  margin: 0;
  display: flex;
  justify-content: center;
  li {
    padding: 0 10px;
  }
}
</style>