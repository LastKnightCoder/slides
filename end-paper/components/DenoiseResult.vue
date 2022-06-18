<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="实验环境">
      <slot name="env"></slot>
    </el-tab-pane>
    <el-tab-pane label="评价指标">
      <p>峰值信噪比(PSNR)表示信号最大功率值与噪声功率的比值，PSNR 越大，则表示模型学习的效果越好，PSNR 越小，则说明生成的图像与目标图像的差异较大，模型学习的效果越差。</p>
      <img src="/PSNR.svg" style="zoom: 90%;">
      <p>结构相似性系数(SSIM)从亮度、对比度和结构这三个方面来比较图像之间的相似性。SSIM的值位于[0, 1]之间，两幅图像之间的SSIM值越接近于1，表示两幅图像越相近。</p>
      <img src="/SSIM1.svg" style="zoom: 90%;">
      <img src="/SSIM2.svg" style="zoom: 90%;">
    </el-tab-pane>
    <el-tab-pane label="实验结果">
      <slot name="results"></slot>
    </el-tab-pane>
    <el-tab-pane label="最终效果图">
      <div class="image-display">
        <img src="/gan-results/origin.png" />
        <img src="/gan-results/result.png" />
        <img src="/gan-results/target.png" />
      </div>
      <p>从左到右分别为原始图像、生成结果与目标图像。</p>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>

<style scoped>
.image-display {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.image-display img {
  zoom: 100%;
}
</style>