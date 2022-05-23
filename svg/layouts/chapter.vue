<template>
  <div class="chapter">
    <slot />
  </div>
</template>

<style scoped>
.chapter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/chapter-bg5.jpg) center/cover no-repeat;
}
</style>