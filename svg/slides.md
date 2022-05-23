---
layout: cover
defaults:
  layout: page
title: SVG 介绍及其应用
author: 熊滔
time: 2022-01-24
background: /cover8.jpg
---

# SVG 介绍及应用

### 熊滔

---
layout: chapter
---

# SVG介绍



---

## SVG 介绍

SVG 全称为 Scaleable Vector Graphics，意为**可伸缩矢量图形**，它使用标记语言来描述图形，具有如下优点：

- 可编辑：
  - SVG 图片实际只是文本文件，其中内容要经过浏览器（或 SVG 阅读器）的解析才能呈现出图像
  - 当我们需要修改图像时，只需要使用文本编辑器打开就可以修改
- 可缩放：SVG 中的图形的大小及位置是通过数学坐标确定的，不论缩放多少倍，都不会产生失真
- 体积小：相比于其他类型的图片，SVG 往往具有更小的体积
- 具有动画：SVG 标准提供了制作动画的能力
- 可交互：当我们在网页中使用内联 SVG 图像时，我们可以通过 CSS 或 JavaScript 与 SVG 图像进行交互
- 文字可选中：SVG 中的文字就像网页上的文字一样，是可以被选中的


---

## 使用 SVG

- SVG 作为一种图片，可以通过 `img` 标签进行引用

  <Tabs>
  <template v-slot:code>
  
  ```html
  <img src="/dog.svg" />
  ```
  </template>
  <template v-slot:preview>
    <img src="/dog.svg" />
  </template>
  </Tabs>

- 也可以在 CSS 中作为背景图片

  <Tabs>
  <template v-slot:code>

    ```html
    <div class="dog"></div>
    ```
    ```css
    width: 128px;
    height: 128px;
    background: url(/dog.svg) center/cover;
    ```
  </template>
  <template v-slot:preview>
    <div class="dog"></div>
    <style>
    .dog {
      width: 128px;
      height: 128px;
      background: url(/dog.svg) center/cover;
    }
    </style>
  </template>
  </Tabs>

  
---

- 作为对象被 `iframe` `embed` `object` 等标签进行引用

  <div style="width: 60%;">

  <Tabs>
  <template v-slot:code>
  
    ```html
    <iframe src="/dog.svg"></iframe>
    ```
  </template>
  
  <template v-slot:preview>
    <iframe src="/dog.svg"></iframe>
  </template>
  </Tabs>
  </div>


- 另外，SVG 使用 XML 描述其内容，而 HTML 也是通过 XML 描述其内容，我们可以在 HTML 中直接写 SVG，这种方式称为内联 SVG

  <Tabs>
    <template v-slot:code>
    
    ```html
    <body>
      <div></div>
      <svg width="100" height="100">
        <rect x="0" y="0" width="100" height="100" fill="black" />
      </svg>
    </body>
    ```
    </template>
    <template v-slot:preview>
      <svg width="100" height="100">
        <rect x="0" y="0" width="100" height="100" fill="black" />
      </svg>
    </template>
  </Tabs>

--- 
layout: chapter
---

# 视口、viewBox 与 preserveAspectRatio


---

## 视口

- SVG 包含一个无限大的画布，但是视口(viewport)限制了我们只能看到一部分
- 就像是你在屋子里面通过窗子看外面的风景，外面的世界很大，但是窗子的大小是有限的，所以你只能看到一部分，这里的窗子就是视口的作用，它限制了你能看到的画布的大小。
  <img src="/window.jpg" style="zoom: 20%;">
- 视口的大小我们通过 `width` 属性和 `height` 属性来确 定，**单位默认是像素**，但是也可以指定其他单位，比如 `em`、`px`、`cm`、`in`、`pt`、`%` 等。

  <Tabs>
    <template v-slot:code>

    ```html
    <svg width="100" height="100">
      <circle cx="100" cy="100" r="100" fill="red" />
    </svg>
    ```
    </template>
    <template v-slot:preview>
      <svg width="100" height="100">
        <circle cx="100" cy="100" r="100" fill="red" />
      </svg>
    </template>
  </Tabs>

---

## viewBox

画布中的元素的大小和位置都是通过坐标来定义的，如何定义坐标系统？答案就是 `viewBox` 属性，规定两个部分：

- **视口**左上角的坐标
- **视口**在坐标系统中的大小

格式为 `viewBox="min-x min-y width height"`

- `(min-x, min-y)` 规定了视口左上角的坐标
- `(width, height)` 规定了视口在坐标系统中的大小

---

## viewBox

<Tabs>
  <template v-slot:code>

  ```html
  <svg width="100" height="100" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" fill="#1a66ff" />
  </svg>
  ```
  </template>
  <template v-slot:preview>
    <svg width="100" height="100" viewBox="0 0 50 50" style="border: 1px solid gray;">
      <circle cx="25" cy="25" r="20" fill="#1a66ff" />
    </svg>
  </template>
</Tabs>


<br />

- 视口大小 $100\text{px} \times 100\text{px}$
- 视口左上角坐标 `(0, 0)`，视口在坐标系统中的大小 $50 \times 50$
- 1 单位 = 2px

<Tips>
<code>svg</code> 中形状使用的单位默认为坐标系统单位，不是像素！
</Tips>
---

## preserveAspectRatio

<div style="width: 90%;">

<Tabs>
<template v-slot:code>

```html
<svg width="200" height="100" viewBox="0 0 100 100" style="border: 1px solid gray;">
  <rect x="0" y="0" width="100" height="100" fill="red" />
</svg>
```
</template>
<template v-slot:preview>
<svg width="200" height="100" viewBox="0 0 100 100" style="border: 1px solid gray;">
  <rect x="0" y="0" width="100" height="100" fill="red" />
</svg>
</template>
</Tabs>

</div>

- 视口的宽高比与 `viewBox` 规定的宽高比不同
- 视口宽高比为 $2:1$，`viewBox` 规定的宽高比为 $1:1$
- 1单位 = ?px

坐标系统中单位与实际像素单位的换算，是根据宽度还是高度，换句话说是根据最小比例还是最大比例。

- 根据宽度，按最大比例：1单位 = 2px
- 根据高度，按最小比例：1单位 = 1px

---

## preserveAspectRatio

通过 `preserveAspectRatio` 属性来规定换算比例，有三种取值：

- meet：最小比例，默认值
- slice：最大比例
- none：不进行等比缩放，拉伸填充视口

由于二者宽高比不同，就会导致二者无法完全对齐，`preserveAspectRatio` 属性还可以规定对齐方式，在每个方向都有三种对齐方式，所以总共有 9 种对齐方式：

- min：左对齐或上对齐
- mid：水平居中或垂直居中，默认值
- max：右对齐或下对齐

`preserveAspectRatio` 的写法为 `preserveAspectRatio="对齐方式 缩放方式"`，比如 `preserveAspectRatio="xMidYMid meet"`。

---

## preserveAspectRatio

<Tabs type="card" :labels="['缩放方式', '对齐方式']">
  <template v-slot:code>
    <show-ratio />
  </template>
  <template v-slot:preview>
    <show-align />
  </template>
</Tabs>



---
layout: chapter
---

# 基本形状

---

## line

- `<line />` 绘制一条直线
- `(x1, y1)` 规定线的起点，`(x2, y2)` 规定线的终点
- `stroke` 属性规定线的颜色
- `stroke-width` 规定线的宽度
- `stroke-opacity`：规定线的透明度

<Tabs>
  <template v-slot:code>

  ```html
  <svg width="100" height="100" viewBox="0 0 100 100" >
    <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="5" stroke-opacity=".5"/>
  </svg>
  ```
  </template>
  <template v-slot:preview>
    <svg width="100" height="100" viewBox="0 0 100 100" >
      <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="5" stroke-opacity=".5" />
    </svg>
  </template>
</Tabs>

---

## line

- stroke-dasharray：定义虚线的模式

  - 我们首先明确虚线的组成，由实线和空隙组成，`stroke-dasharray` 就是用来定义实线和虚线的长度的，它由多个值组成，值的数目为偶数，奇数位置上的数表示实线的长度，偶数位置上的数表示空隙的长度

  - 例如 `stroke-dasharray="10 5"`，表示实线 10px，空隙 5px，并且以该模式重复下去。如果指定的长度为奇数，那么就会自我复制一次为偶数长度，例如 `stroke-dasharray="10 5 10"`，相当于 `stroke-dasharray="10 5 10 10 5 10"`

  <Tabs>
    <template v-slot:code>
    
    ```html
    <svg width="200" height="100" viewBox="0 0 200 100">
      <line x1="0" y1="10" x2="200" y2="10" stroke="black" stroke-dasharray="10" />
      <line x1="0" y1="50" x2="200" y2="50" stroke="black" stroke-dasharray="10 5" />
      <line x1="0" y1="90" x2="200" y2="90" stroke="black" stroke-dasharray="10 5 10" />
    </svg>
    ```
    </template>
    <template v-slot:preview>
      <svg width="200" height="100" viewBox="0 0 200 100">
        <line x1="0" y1="10" x2="200" y2="10" stroke="black" stroke-dasharray="10" />
        <line x1="0" y1="50" x2="200" y2="50" stroke="black" stroke-dasharray="10 5" />
        <line x1="0" y1="90" x2="200" y2="90" stroke="black" stroke-dasharray="10 5 10" />
      </svg>
    </template>
  </Tabs>


---

## polyline


---

## rect

---

## circle 与 epplise


---

## polygon


