<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="训练数据">
      <slot name="results"></slot>
    </el-tab-pane>
    <el-tab-pane label="检测效果">
      <div class="img-grid">
        <img src="/detect-results/o1.jpg" style="zoom: 100%;" />
        <img src="/detect-results/o2.png" style="zoom: 100%;" />
        <img src="/detect-results/o3.jpg" style="zoom: 100%;" />
        <img src="/detect-results/o4.png" style="zoom: 100%;" />
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