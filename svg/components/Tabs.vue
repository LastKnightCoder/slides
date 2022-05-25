<template>
  <el-tabs :type="type" style="margin-top: 1rem;" class="tabs">
    <el-tab-pane :label="labels[0]"><slot name="code"></slot></el-tab-pane>
    <el-tab-pane :label="labels[1]"><slot name="preview"></slot></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
const props = defineProps({
  type: {
    default: 'border'
  },
  labels: {
    default: ['Code', 'Preview']
  }
})
</script>

<style>
/* .tabs {
  width: max-content;
} */
</style>