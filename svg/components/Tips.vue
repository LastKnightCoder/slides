<template>
  <div class="tip">
    <p class="title">{{ title }}</p>
    <p class="content">
      <slot/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Tips'
    }
  }
}
</script>

<style scoped>
.tip {
  margin: .5rem 0;
  padding: 0.25rem 1rem;
  border-color: #009400;
  background: #e6f6e6;
  border-left-width: .3rem;
  border-left-style: solid;
  border-radius: .5rem;
  position: relative;
}
.title {
  color: #003100;
  padding-left: 1.5rem;
  font-weight: 600;
  line-break: 1.25;
  position: relative;
  margin-bottom: -.25rem;
}

.title::before {
  content: ' ';
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(/tips.svg);
}

p {
  margin: 1rem 0;
}
</style>