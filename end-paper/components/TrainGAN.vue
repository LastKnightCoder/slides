<template>
  <el-tabs type="card" style="margin-top: 1rem;">
    <el-tab-pane label="训练判别器">
      <p>训练判别器时，需要先固定生成器。判别器将会接收两种输入，一个是生成的毫米波图像，另一个是去噪图像，判别器输出损失，将去噪图像的损失减去生成图像的损失，便得到了Wasserstein距离作为总损失，用以更新判别器。</p>
      <img src="/train_d.svg" style="zoom: 40%; margin: 0;" />
    </el-tab-pane>
    <el-tab-pane label="训练生成器">
      <p>训练生成器时，需要固定判别器。生成器接收未处理图像，生成器根据学习到的数据分布生成图像，生成图像流向两次，一处用以计算内容损失，另一处用以输入判别器得到对抗损失，二者之和作为总损失，用以更新生成器。</p>
      <img src="/train_g.svg" style="zoom: 40%; margin: 0;" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
</script>