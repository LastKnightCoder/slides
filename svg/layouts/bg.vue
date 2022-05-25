<template>
  <div class="cover">
    <div class="title">
      <h1>{{ $slidev.configs.title }}</h1>
    </div>
    <div class="details">
      <span>{{ $slidev.configs.author }}</span>
      <span>{{ $slidev.configs.time.slice(0,10) }}</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  background: url(/cover8.jpg) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.title {
  transform: translateY(25px);
}

.title h1 {
  color: #29323c;
  font-size: 4rem;
  font-weight: bold;
}

.details {
  color: #29323c;
  transform: translateY(25px);
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>