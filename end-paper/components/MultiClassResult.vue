<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="带噪训练数据">
      <slot name="noise-results"></slot>
    </el-tab-pane>
    <el-tab-pane label="带噪检测效果">
      <div class="img-grid">
        <img src="/detect-results/m1.jpg" style="zoom: 100%;" />
        <img src="/detect-results/m2.jpg" style="zoom: 100%;" />
        <img src="/detect-results/m3.jpg" style="zoom: 100%;" />
        <img src="/detect-results/m4.jpg" style="zoom: 100%;" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="去噪训练数据">
      <slot name="denoise-results"></slot>
    </el-tab-pane>
    <el-tab-pane label="去噪检测效果">
      <div class="img-grid">
        <img src="/detect-results/m5.png" style="zoom: 100%;" />
        <img src="/detect-results/m6.png" style="zoom: 100%;" />
        <img src="/detect-results/m7.png" style="zoom: 100%;" />
        <img src="/detect-results/m8.png" style="zoom: 100%;" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>

<style scoped>
.img-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>