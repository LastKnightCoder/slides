<template>
  <el-tabs type="card">
    <el-tab-pane label="meet">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black;"
        preserveAspectRatio="xMidYMid meet"
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
    <el-tab-pane label="slice">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="xMidYMid slice"
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
    <el-tab-pane label="none">
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        style="border: 1px solid black"
        preserveAspectRatio="none"
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