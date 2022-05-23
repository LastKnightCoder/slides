<template>
  <el-tabs type="card">
    <el-tab-pane label="xMinYMid">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="xMinYMid meet"
      >
        <image
          x="0"
          y="0"
          width="100"
          height="100"
          xlink:href="/PAR-demo.png"
        />
      </svg>
    </el-tab-pane>
    <el-tab-pane label="xMaxYMid">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="xMaxYMid meet"
      >
        <image
          x="0"
          y="0"
          width="100"
          height="100"
          xlink:href="/PAR-demo.png"
        />
      </svg>
    </el-tab-pane>
    <el-tab-pane label="xMidYMin">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="xMidYMin slice"
      >
        <image
          x="0"
          y="0"
          width="100"
          height="100"
          xlink:href="/PAR-demo.png"
        />
      </svg>
    </el-tab-pane>
    <el-tab-pane label="xMidYMax">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="xMidYMax slice"
      >
        <image
          x="0"
          y="0"
          width="100"
          height="100"
          xlink:href="/PAR-demo.png"
        />
      </svg>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from "element-plus";
</script>