<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="LeNet">
      <p>最早发表的卷积神经网络，当时的目的是为了识别图像中的数字，网络整体结构由卷积层和全连接层组成。</p>
      <img src="/LeNet.svg" style="margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="AlexNet">
      <p>2012 年 ImageNet 图片分类比赛冠军，由此进入深度学习时代。</p>
      <img src="/AlexNet.svg" style="margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="VGGNet">
      <p>首次提出了块的概念，通过连接块来组成一个网络。</p>
      <img src="/VGGNet.svg" style="zoom: 40%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="GoogLeNet">
      <p>首次提出并行网络结构，组合不同大小的卷积核来提取图像特征。</p>
      <img src="/GoogLeNet.svg" style="zoom: 45%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="ResNet">
      <p>使训练更深的网络成为了可能。</p>
      <img src="/ResNet.svg" style="zoom: 45%; margin: 0;" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>