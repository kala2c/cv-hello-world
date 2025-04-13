<template>
  <router-view/>
</template>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
  
  &:hover {
    background: #a8a8a8;
  }
}

::-webkit-scrollbar-corner {
  background: #f1f1f1;
}

</style>
