<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="数据标注">
      <img src="/detect-database/label.png" style="margin: 2em;" />
    </el-tab-pane>
    <el-tab-pane label="多类标注">
      <div class="image-grid">
        <figure>
          <img src="/detect-database/gun.png" />
          <figcaption>gun</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/gun2.png" />
          <figcaption>gun2</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/ms1.png" />
          <figcaption>ms</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/ms2.png" />
          <figcaption>ms</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/knief.png" />
          <figcaption>knief</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/knief2.png" />
          <figcaption>knief2</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/others1.png" />
          <figcaption>others</figcaption>
        </figure>
        <figure>
          <img src="/detect-database/others2.png" />
          <figcaption>others</figcaption>
        </figure>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Mosaic数据增强">
      <img src="/detect-database/mosaic.png" style="zoom: 38%; margin: 0;" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>

<style scoped>
.image-grid {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.image-grid figure{
  text-align: center;
  font-size: 0.75em;
}
</style>