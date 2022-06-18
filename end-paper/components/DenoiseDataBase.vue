<template>
  <el-tabs type="card" style="margin-top: 1rem">
    <el-tab-pane label="数据采集">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <img src="/origin/015.png" style="zoom: 100%;" />
        <img src="/origin/031.png" style="zoom: 100%;" />
        <img src="/origin/070.png" style="zoom: 100%;" />
        <img src="/origin/282.png" style="zoom: 100%;" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="数据处理">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <img src="/train/015.png" style="zoom: 100%;" />
        <img src="/train/031.png" style="zoom: 100%;" />
        <img src="/train/070.png" style="zoom: 100%;" />
        <img src="/train/282.png" style="zoom: 100%;" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="数据增广">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr);gap: 10px;">
        <img src="/gan-aug/aug-origin.jpg" style="zoom: 100%;" />
        <img src="/gan-aug/aug-fliph.jpg"  style="zoom: 100%;" />
        <img src="/gan-aug/aug-flipv.jpg"  style="zoom: 100%;" />
        <img src="/gan-aug/aug-rotate.jpg" style="zoom: 100%;" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>
