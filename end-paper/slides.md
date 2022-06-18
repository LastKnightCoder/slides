---
theme: default
background: /begin.jpg
layout: cover
drawings:
  persist: false
title: 基于深度学习的<br />毫米波图像处理研究
---

# 基于深度学习的<br />毫米波图像处理研究

<div>

导师：林澍

汇报人：熊滔

汇报日期：2022-06-20

</div>

---

## 研究背景及意义

毫米波成像技术是通过接收成像物体与背景之间的辐射差异来进行成像的技术，被广泛应用于医学观察、机场安检、军事侦察等领域。但是毫米波所成图像分辨率较低，图像噪声大，难以区分出人体背景以及物体，检测人员无法有效识别图像，从而为大规模商用带来困难。

毫米波成像存在的问题：

- 噪声高，物体成像不明显
- 分辨率低

拟采用深度学习技术处理毫米波图像，包括：

- 去噪处理
- 目标检测与识别

---

## 去噪算法研究现状

传统的算法如滤波法、变换域法、BM3D：

- 算法复杂，需人工提取特征
- 性能差
- 处理速度慢

基于深度学习的去噪算法：

- 算法简单，易于理解，端对端
- 性能好
- 处理速度快

目前主流的去噪算法均是基于深度学习的算法。本文将使用基于深度学习的算法对毫米波图像进行去噪。由于生成对抗网络生成的图像纹理细节清晰，好于一般的卷积神经网络，因此本文拟采取使用生成对抗网络来进行毫米波图像的去噪处理研究。

---

## 目标检测与识别算法研究现状

传统的目标检测算法，如 HOG 和 DPM：

- 检测速度慢，**40s** 处理一幅图像，无法满足实时应用
- 性能差
- 鲁棒性差，需人工设计特征提取器

基于深度学习的方法：

- 速度快，处理速度可达 **150 帧/s**
- 性能好
- 无需人工提取图像特征，端对端的网络

基于深度学习的目标检测算法分为两类，以 R-CNN 为代表的两阶段算法和以 YOLO 为代表的单阶段算法。双阶段的算法在实时性上差于单阶段的算法，无法保证实时性。单阶段算法在保证实时性还有不错的性能，因此本文拟采用 YOLO 算法对毫米波图像中的目标进行检测。

---
layout: cover
background: /cover1.jpg
---

# 深度学习的理论基础

---

## 多层感知机

<MLP>

<!-- $$ y = f\left( \sum_{i=1}^{n}x_iw_i + b_i \right) $$ -->

<img src="/神经元数学模型.svg" style="zoom: 120%;" />

</MLP>

<!-- ---

## 激活函数

<AvtivationFunction /> -->

---

## 卷积神经网络

使用多层感知机处理图片，模型参数过于巨大，难以展开训练。利用图片的特征，对多层感知机加以限制：

- 平移不变性：指一个物体出现在图片中的不同位置，网络应该有相同的输出，与位置无关
- 局部性：当网络提取的特征时，只需要利用图片的局部信息，而不需要从整个图去提取信息，因为图像中的像素往往只与周围的像素相关，与其较远的像素不相关

多层感知机的数学模型：

<img src="/多层感知机数学模型.svg" style="zoom: 120%;" />

<!-- $$
y_{i,j} = \sum\limits_{k,l} {w_{i,j,k,l}}{x_{k,l}}  = \sum\limits_{a,b} {v_{i,j,a,b}}{x_{i + a,i + b}}
$$ -->

应用平移不变性与局部性，得到卷积神经网络的数学模型：

<img src="/卷积层数学模型.svg" style="zoom: 120%;" />

<!-- $$
y_{i,j} = \sum \limits_{a =  -\Delta }^\Delta \sum \limits_{b = -\Delta}^\Delta v_{a,b}x_{i + a,j + b}
$$ -->

---

## 卷积神经网络

<Conv />

---

## 网络训练流程

监督学习的网络训练流程：

1. 将含有对应标签的数据$x$输入到模型中，输入数据与模型中的参数经过运算得到一个输出$\hat{y}$，这个输出$\hat{y}$就是对真实标签$y$的一个预测
2. 计算真实标签与预测的标签的一个差距，这个需要通过损失函数来进行计算
3. 根据损失函数得到损失之后，使用反向传播算法来计算梯度，
4. 通过优化算法小批量随机梯度下降算法，来更新模型的参数

<img src="/网络训练流程.svg" />

---

## 经典的神经网络

<ClassicConvNet />

---
layout: cover
background: /cover2.jpg
---

# 去噪算法研究

---

## 数据集

<DenoiseDataBase />

<!-- 
采集图像 2300 幅，筛选后剩余 991 幅
枪：180，刀：180，金属条：400，手机与充电宝等其他：200
数据集的划分：3:1:1，随机抽取
数据增广后，数据集扩大为原来四倍
-->

---

## 生成对抗网络

- 生成器：学习目标图像数据分布，生成符合目标图像数据分布的图像
- 判别器：判别输入图像的真假，输出为输入图像为真实图像的概率

<img src="/生成对抗网络.svg" style="zoom: 45%;" />

生成器的目的是使其生成的图像通过判别器时，输出的概率值尽可能的大，而判别器的职责是要尽可能地分辨率出输入图像的真假，二者之间的目标是矛盾。

<!-- 二者在对抗中不断的进化，当判别器无法区分真假时，说明生成器生成的图像可以以假乱真，也就是说生成器学习到了目标图像的数据分布，训练的目的就达成了。  -->

<!-- 可以将生成器和判别器比喻为假币机和验钞机，假币机希望它造出的假币能骗过验钞机，而验钞机则要尽最大可能的分辨真假。 -->

---

## 损失函数

判别器的输出是输入图像是真实图像的概率，这也是一个二分类问题，当输出趋近于 0 时，表示输入图像时生成图像这一类，当输出趋近于 1 时，表示输入图像是真实图像这一类，对于分类问题，一般采用一个交叉熵损失函数:

<!-- $$
\min\limits_G \max\limits_D L(G,D) = \mathbb{E}_{x\sim p_r(x)}\left[\log D(x)\right] + \mathbb{E}_{x\sim p_z(x)} \left[\log (1 - D(G(x))) \right]
$$ -->

<img src="/GAN_loss.svg" style="zoom: 120%;">

判别器的作用是要尽可能的区分真实图像与生成图像，对于输入真实图像，输出要趋近于 1，即$\log D(x)$趋近于$0$，对于输入生成图像，输出要趋近于$0$，即$\log(1-D(G(x)))$趋近于$0$，也就是说判别器要尽可能使表达式的值最大。

生成器要使得生成图像输入至判别器时，判别器的输出要趋近于$1$，也就是说$\log(1-D(G(x)))$趋近于负无穷，所以生成器要使得表达式的值最小。

存在的问题: 当判别器达到有最优时，损失函数为一个常数，无法衡量两个分布之间的距离，无法得到梯度来训练生成器。

---

## Wasserstein 距离

使用 Wasserstein 距离来衡量两个数据分布的距离，定义如下式:

<img src="/Wasserstein.svg" style="zoom: 90%;" />

<!--
$$
W({p_r},{p_g}) = \inf\limits_{\gamma \in \Pi ({p_r},{p_g})} {\mathbb{E}_{(x,y)}}\left[ {\left\| {x - y} \right\|} \right]
$$
-->

基于 Kantorovich-Rubinstein 对偶性，Wasserstein 距离可以变换为:

<img src="/KR对偶.svg" style="zoom: 90%;" />

<!-- $$
W({p_r},{p_g}) = \frac{1}{K}\mathop {\sup }\limits_{||f|{|_L} \le K} {\mathbb{E}_{x \in {p_r}}}\left[ {f(x)} \right] - {\mathbb{E}_{x \in {p_g}}}\left[ {f(x)} \right]
$$ -->

要使得该变换成立，$f$必须满足 K-Lipschitz 连续。

<!-- 判别器的输出不再是输入图像为真实图像的概率，而是Wasserstein距离，它的大小可以反映两个数据分布的距离，值越小表示分布越相似，重要的是，即使两个分布不重叠或者重叠的部分很少，Wasserstein距离也能够反映两个分布的距离。 -->

我们需要对原网络做出如下修改:

1. 去除判别器最后的 Sigmoid 激活函数，因为此时判别器的输出不代表输入图像是真实图像的概率，而是损失
2. 去掉损失函数中的 log 函数
3. 在梯度更新后对权重进行裁剪，或者添加一个梯度惩罚项以满足 K-Lipschitz 连续

---

## 归一化

每次通过小批量更新网络权重时，每一层输入的数据分布一直在发生改变，导致网络的训练在追逐一个移动的目标。使用归一化的技术，使得每一层的网络输入都处于一个固定的分布，避免数据陷入饱和区，并且可以加快模型的收敛速度。

考虑输入一个小批量${x_1},{x_2},...,{x_m}$，对于批量中的每一个张量都有$N$个特征，对于每一个特征，我们求得它在各个批量上的均值与方差:

<img src="/BN_eq1.svg" style="zoom: 75%;">

<!-- $$
\begin{aligned}
\mu _j &= \frac{1}{m}\sum\limits_{i = 1}^m x_{i,j} \\
\sigma _j^2 &= \frac{1}{m}\sum\limits_{i = 1}^m (x_{i,j} - {\mu _j})^2
\end{aligned}
$$ -->

根据计算得到的期望和方差，我们可以得到归一化后的输出:

<img src="/BN_eq2.svg" style="zoom: 75%;" />

<!-- $$
\begin{aligned}
y_{i,j} &= \sum\limits_{i = 1}^m \frac{x_{i,j} - \mu _j}{\sqrt{\sigma ^2} + \epsilon} \\
y_{i,j} &= \gamma \cdot y_{i,j} + \beta
\end{aligned}
$$ -->

<a href="/slides/end-paper/BN.svg" target="_blank">图示</a>

---

## 内容损失

当我们使用生成对抗网络的时候，我们是希望生成器的输出是多样性的，但是生成器它的目标是为了骗过判别器，所以就存在一旦生成器发现一个生成的一个目标可以骗过判别器之后，它就会始终输出这一个结果，这个问题我们称为模型塌陷。

为了避免这种情况的发生，我们必须对生成器的输出加以限制，引导生成器生成有效的图像，在训练生成器时为其添加一个内容损失函数，引导生成图像趋于真实图像。

此处选择 L1 范数作为内容损失函数:

<img src="/内容损失.svg" style="zoom: 90%; margin: 2em auto;">

<!-- $$
L_G = L_{GAN} + \lambda L_{content}
$$ -->

经过多次实验，$\lambda$ 取 $10^3$ 效果较好。

---

## 网络结构

<GAN />

---

## 训练方案

GAN 生成器和判别器训练是分开的，本文中首先训练判别器，而后训练生成器。

<TrainGAN />

---

## 实验结果

<DenoiseResult>

<template v-slot:env>

| 参数名称 | 参数大小 | 参数名称 | 参数大小 |
| -------- | ------- | -------- | ------- |
| CPU | 24核/80GB | Pytorch 版本 | 1.9.0 |
| GPU | 1卡/80GB | CUDA 版本 | 11.1 |
| 操作系统 | Linux/Ubuntu | Python 版本 | 3.8 |

</template>

<template v-slot:results>

| | PSNR(dB) | SSIM |
| --- | --- | --- |
|原始GAN | 4.66 | 0.004 |
| WGAN(无归一化层) | 11.40 | 0.29 |
| WGAN(无内容损失) | 19.99 | 0.86 |
| WGAN(应用所有改进) | 24.02 | 0.91 |

</template>

</DenoiseResult>

---
layout: cover
background: /cover3.jpg
---

# 目标检测与识别

---

## 数据集

<DetectDatabase />

---

## YOLO 算法

<img src="/YOLO算法.jpg" style="zoom: 100%;" />

---

## 损失函数

<img src="/yolo_loss.svg" style="zoom: 90%; margin: 3em;" />

---

## 使用锚框

有多个目标位于同一个网格单元中，至少有一个目标会被遗漏，借鉴 Faster-RCNN，使用锚框:

- 锚框就是先验框，锚框的中心位于网格单元的左上角，根据目标选择不同宽高比的锚框
- 计算每个锚框与真实标注的边界框的交并比，选择最大交并比，大于阈值，锚框就负责预测这个目标
- 每一个锚框都要负责预测类别

网络输出: 坐标 $(t_x, t_y)$、宽高 $t_w,t_h$、置信度 $t_o$

<img src="/anchor-eq.svg" style="zoom: 100%;" />

---

## 多尺度融合

<img src="/多尺度融合.svg" style="zoom: 50%; margin: 5em auto;" />

---

## IOU 损失函数

<img src="/IOU.svg" style="zoom: 45%; margin: 2em 0 0 2em" />

<div style="display: grid; grid-template-columns: 1fr 2fr; align-items: center;">
  <img src="/DIOU-eq.svg" style="zoom: 90%;">
  <img src="/DIOU.svg" style="zoom: 50%;">
</div>

---

## 实验结果

---

## 结论

---
layout: cover
background: /end.jpg
---

# 谢谢