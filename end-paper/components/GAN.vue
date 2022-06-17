<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="生成器">
      <img src="/Generator.svg" style="zoom: 40%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="判别器">
      <img src="/Discriminator.svg" style="zoom: 40%; margin: 0;" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>