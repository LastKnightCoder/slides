<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="Sigmoid">
      <img src="/sigmoid.svg" style="zoom: 80%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="Tanh">
      <img src="/tanh.svg" style="zoom: 80%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="ReLU">
      <img src="/ReLU.svg" style="zoom: 80%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="LeakyReLU">
      <img src="/LeakyReLU.svg" style="zoom: 80%; margin: 0;" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>