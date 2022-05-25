---
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg
highlighter: prism
canvasWidth: 1300
layout: cover
---

# Flex 布局

<!-- ## 现代布局方案 -->

---

# Flex 布局

2009 年，W3C 提出了一种新的布局方案----Flex 布局。

Flex 是 Flexible Box 的缩写，意为弹性盒子，通过 Flex 布局可以简便、响应式地实现各种页面布局。

<v-clicks>

- 布局的传统解决方案基于盒模型，借助 <kbd>display</kbd>、<kbd>position</kbd>、<kbd>float</kbd> 进行布局，对于一些特殊布局非常的不方便，而通过 Flex
布局可以轻易实现基于盒模型无法实现或者很难实现的布局。
- 目前 Flex 布局已得到所有浏览器的支持，Flex 布局已经成为未来布局的首选方案。[Learn More](https://caniuse.com/?search=flex).
<img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-flex.3jpw2y28lba0.png">
- 当我们设置元素 <kbd>display: flex</kbd>，那么该元素就变为了弹性盒子，弹性盒子中的元素按照某种规则进行排列。

</v-clicks>

---

# 属性初览

FlexBox 上的属性介绍。

FlexBox 中元素的排列主要是通过一系列的属性来决定的，我们将 FlexBox 称为 Container(容器)，而 FlexBox 中的元素称为 Item(子项)，在容器和子项中均可设置相应的属性值来规定 子项在容器中的排列。

<div grid="~ cols-2 gap-2" m="-t-2">
<div>

<kbd>Container</kbd> 上的属性：

- <kbd>flex-direction</kbd>
- <kbd>flex-wrap</kbd>
- <kbd>flex-flow</kbd>
- <kbd>jusitify-content</kbd>
- <kbd>align-items</kbd>
- <kbd>align-content</kbd>

</div>
<div>

<kbd>Item</kbd> 上的属性：
- <kbd>flex-basis</kbd>
- <kbd>flex-grow</kbd>
- <kbd>flex-shrink</kbd>
- <kbd>flex</kbd>
- <kbd>order</kbd>
- <kbd>align-self</kbd>

</div>
</div>

其中 <kbd>flex-flow</kbd> 和 <kbd>flex</kbd> 为简写形式。

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/display-bg.1ynu0b2f6g3k.jpeg
---

# display: flex

当不设置任何属性时 FlexBox 中元素的排列。

```html
<div class="container">
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
</div>
```

```css
<style>
.container {
display: flex;
}

.item {
width: 100px;
height: 100px;
background: #ce5777;
}
</style>
```

<v-click>
<div class="mt-8">
<FlexItemBox :counts="4" />
</div>

<div class="mt-8">
元素依次从左向右排列，元素之间紧紧挨着没有空隙。
</div>
</v-click>

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/container-bg.4x2ywhgh2yo0.jpeg
---

# Container 上的属性

---

# flex-direction

控制主轴和副轴的方向

<div class="grid grid-cols-2 gap-2">

<div class="grid grid-rows-2 gap-2">

<v-click>
<div>
```css {2}
.container {
  flex-direction: row;
}
```
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
```css {2}
.container {
  flex-direction: row-reverse;
}
```
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

<div class="grid grid-cols-2 gap-2">

<v-click>
<div>
```css {2}
.container {
  flex-direction: column;
}
```
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
```css {2}
.container {
  flex-direction: column-reverse;
}
```
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

</div>

---

# flex-wrap

当子项的总长度超过容器宽度时，子项是否折叠

<div grid="~ cols-2 gap-2">

<div>
<v-click>

```html {all}
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

```css {all}
.container {
  width: 400px;
  display: flex;
}
.item {
  width: 100px;
  height: 100px;
}
```

</v-click>

<v-click>
<FlexItemBox :counts="5" :containerStyle="{width: '400px', marginTop: '40px'}" />
</v-click>

</div>

<div>

<v-click>

```css {2}
.container {
  flex-wrap: wrap;
}
```

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap'}" />

</v-click>

<v-click>

```css {2}
.container {
  flex-wrap: wrap-reverse;
}
```

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap-reverse'}" />

</v-click>

</div>
</div>

---

# flex-flow

<kbd>flex-flow</kbd> 为 <kbd>flex-direction</kbd> 与 <kbd>flex-wrap</kbd> 的简写形式

<kbd>flex-flow</kbd> 有 $4*3 = 12$ 种组合，下面演示了四种<kbd>row wrap</kbd>、<kbd>row no-wrap</kbd>、<kbd>column
wrap</kbd>、<kbd>column no-wrap</kbd>

<div grid="~ cols-2 gap-4">

<div grid="~ rows-2 gap-2">

<v-click>

<div>

```css
.container {
  width: 400px;
  flex-flow: row wrap;
}
```

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row wrap'}" />

</div>

</v-click>

<v-click>

<div>

```css
.container {
  width: 400px;
  flex-flow: row nowrap;
}
```

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row nowrap'}" />

</div>

</v-click>

</div>

<div grid="~ cols-2 gap-2">

<v-click>

<div>

```css
.container {
  height: 400px;
  flex-flow: column wrap;
}
```

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column wrap'}" />

</div>

</v-click>

<v-click>

<div>

```css
.container {
  height: 400px;
  flex-flow: column nowrap;
}
```

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column nowrap'}" />

</div>

</v-click>

</div>

</div>

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/justify-bg.18ryxf9vkfa8.jpeg
---

# jusitify-content

控制子项在主轴上的对齐

<div>

|                          |                         |                         |
| ------------------------ | ----------------------- | ----------------------- |
| <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     | <kbd>center</kbd>       |
| <kbd>space-between</kbd> | <kbd>space-around</kbd> | <kbd>space-evenly</kbd> |

<v-click>

<div class="mt-13">
<kbd>flex-start:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div class="mt-8">
<kbd>flex-end:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-end'}" />
</div>

</v-click>

</div>

---

# justify-content(续)

<div class="grid grid-cols-2 gap-30">

<v-click>

<div>
<kbd>center:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'center'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-between:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-between'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-around:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-around'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-evenly:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-evenly'}" />
</div>

</v-click>

</div>

---

# align-items

控制子项在副轴上的对齐

|                    |                       |                     |
| ------------------ | --------------------- | ------------------- |
| <kbd>stretch</kbd> | <kbd>flex-start</kbd> | <kbd>flex-end</kbd> |
| <kbd>center</kbd>  | <kbd>baseline</kbd>   |                     |

<div grid="~ cols-2 gap-20" class="mt-4">

<v-click>
<div>
子项不给定高度，<kbd>stretch:</kbd>

<br>
<br>

```css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: auto;
}
```

<FlexItemBox :counts="4" :style="{height: '150px'}" :itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
子项给定高度，<kbd>stretch:</kbd>

<br>
<br>

```css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: 100px;
}
```

<FlexItemBox :counts="4" :style="{height: '150px'}" />

</div>

</v-click>

</div>

---

# align-items(续)

<div grid="~ cols-2 gap-2">

<v-click>
<div>

```css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-start;
}
```

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div>

```css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-end;
}
```

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-end'}" />

</div>

</v-click>

<v-click>

<div>

```css
.container {
width: 500px;
height: 150px;
align-items: center;
}
```

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'center'}" />

</div>

</v-click>

<v-click>

<div>

```css
.container {
  width: 500px;
  height: 150px;
  align-items: baseline;
}
.item1 {
  margin-top: 20px;
}
```

<FlexItemBox 
  :counts="4" 
  :containerStyle="{width: '500px', height: '150px', alignItems: 'baseline'}" 
  :itemStyle="{
  width: '100px',
  fontSize: '10px',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
  }" 
  :itemStyles="[
    {height: '50px', marginTop: '20px'},
    {height: '70px'},
    {height: '120px'},
    {height: '100px'},
  ]" 
  :itemContents="['Hello World!', 'Hello World!', 'Hello World!', 'Hello World!']" />

</div>

</v-click>

</div>

---

# align-content

具有多行情况下，子项在副轴上的对齐

|                         |                          |                         |
| ----------------------- | ------------------------ | ----------------------- |
| <kbd>stretch</kbd>      | <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     |
| <kbd>center</kbd>       | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |                          |

<div grid="~ cols-2 gap-2" class="mt-4">

<v-click>
<div>
不给定高度，<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6"
:itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
给定高度，<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6" />

</div>

</v-click>

</div>

<!--
```css
.container {
width: 400px;
height: 250px;
display: flex;
flex-wrap: wrap;
}
```
-->

---

# align-content(续)

<div grid="~ cols-2 gap-2">

<v-click>
<div>
<kbd>flex-start:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-start'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>flex-end:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-end'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>center:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'center'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>space-between:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'space-between'
}" :counts="6" />

</div>

</v-click>

</div>

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg
---

# align-content(续)

<v-click>
<div>
<kbd>space-around:</kbd>

<FlexItemBox 
  :containerStyle="{
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    alignContent: 'space-around'
  }" 
  :counts="6" />

</div>
</v-click>

<v-click>
<div>
<kbd>space-evenly:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'space-evenly'
}" :counts="6" />

</div>
</v-click>

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg
---

# Item 上的属性

---

# flex-grow

当容器有剩余空间时，子项如何平分剩余空间

默认 <kbd>flex-grow</kbd> 为 0

<div grid="~ cols-2 gap-2">

<div>

<v-clicks>

```css
.item {
  flex-grow: 0;
}
```

<FlexItemBox :counts="4" />

</v-clicks>

<br>

<v-clicks>

```css
.item {
  flex-grow: 1;
}
```

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1}" />

</v-clicks>

</div>

<div m="l-8">

<v-clicks>

```css
.item {
  width: 0;
  flex-grow: 1;
}
.item3 {
  flex-grow: 2;
}
```

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1, width: 0}" :itemStyles="[
{},
{},
{flexGrow: 2}
]" />

</v-clicks>

</div>
</div>

---

# flex-shrink

当容器空间不足时，子项如何收缩

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

```css
.container {
  width: 400px;
}
.item {
  width: 100px;
  height: 100px;
}
```

<FlexItemBox :containerStyle="{width: '400px'}" />

<p style="line-height: 1.4;"> 当空间不足时，每个子项默认会收缩来适应容器的大小。如何收缩，由 <kbd>flex-shrink</kbd> 来决定，默认每个子项的
<kbd>flex-shrink</kbd> 的值为 <kbd>1</kbd>，该数值的作用同 <kbd>flex-grow</kbd>，表示占据的份数。</p>

</v-clicks>

</div>
<div>

<v-clicks>

```css
.item {
  flex-shrink: 0;
}
.item4 {
  flex-shrink: 1;
}
.item5 {
  flex-shrink: 1;
}
```

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" :itemStyles="[
{},
{},
{},
{flexShrink: 1},
{flexShrink: 1}
]" />

```css
.item {
  flex-shrink: 0;
}
```

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" />

</v-clicks>

</div>
</div>

---

# flex-basis

规定子项在主轴上的大小

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

<p style="line-height: 1.4;">之前我们一直使用 <kbd>width</kbd> 或者 <kbd>height</kbd> 来规定子项在主轴上的大小，但是其实真正规定子项大小的属性是
<kbd>flex-basis</kbd>，<kbd>width</kbd> 和 <kbd>height</kbd> 只是为 <kbd>flex-basis</kbd> 作为一个参考。</p>

<blockquote>

子项的实际大小可能与 <kbd>flex-basis</kbd> 设置的大小不同，<kbd>flex-basis</kbd>规定的只是子项在主轴上的<b
style="color: #ce5577;">初始(基本)</b>大小，<kbd>flex-grow</kbd> 与 <kbd>flex-shrink</kbd> 可能会对子项进行伸缩，导致实际大小与设置的大小不同。

</blockquote>

<style>
blockquote {
border-left-width: 5px;
}
</style>

<kbd>flex-basis</kbd> 的默认值为 <kbd>auto</kbd>，即其大小由内容的大小确定，当规定了盒子的大小时，那么 <kbd>flex-basis</kbd> 的取值就等于
<kbd>width</kbd> 或者 <kbd>height</kbd>。

<FlexItemBox />

</v-clicks>

</div>

<div m="l-16">

<v-clicks>

如果我们手动设置了 <kbd>flex-basis</kbd> 的大小，那么 <kbd>width</kbd> 的取值将会被忽略

```css
.item {
  width: 100px;
  flex-basis: 50px;
}
```

<FlexItemBox :itemStyle="{flexBasis: '50px'}" />

这里有一点需要注意，虽然 <kbd>flex-basis</kbd> 的优先级高于 <kbd>width</kbd>(假设主轴为横向)，但是 <kbd>flex-basis</kbd> 的取值又会受到
<kbd>min-width</kbd> 和 <kbd>max-width</kbd> 的约束。

```css
.item {
  flex-basis: 50px;
  min-width: 100px;
}
```

<FlexItemBox :itemStyle="{flexBasis: '50px', minWidth: '100px'}" />

</v-clicks>

</div>
</div>

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flexitem-bg.hcg0d0nlcm.jpeg
---

# flex

flex 是 <kbd>flex-grow</kbd>、<kbd>flex-shrink</kbd>、<kbd>flex-basis</kbd> 的简写形式

<kbd>flex</kbd> 的取值如下

```css
flex: flex-grow flex-shrink flex-basis;
```

后面两个取值为可选，默认值为 <kbd>flex: 0 1 auto;</kbd>。

```css
.item {
  width: 0;
  flex: 1;
}
```

<FlexItemBox :itemStyle="{flex: 1, width: 0}" />

<kbd>flex</kbd> 有两个快捷取值 <kbd>auto(1 1 auto)</kbd> 和 <kbd>none(0 0 auto)</kbd>。

```css
.item {
  flex: none;
}
```

推荐使用简写属性而不是分开写三个属性。

---
layout: image-left
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/order-bg.49niyspoqso0.jpeg
---

# order

控制子项的排列顺序

子项在容器中的排序是根据 DOM 的先后顺序来的，我们可以通过 <kbd>order</kbd> 属性来改变先后顺序，它的取值为一个数字，值越小越靠前，默认取值为 0.

```css
.item1: {
  order: 1;
}
.item3 {
  order: -1;
}
```

<FlexItemBox :itemStyles="[
{order: 1}, {}, {order: -1}
]" />

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/alignSelf-bg.54op6h5ecqo0.jpeg
---

# align-self

控制子项在副轴上的对齐方式

<v-clicks>

之前我们介绍过 <kbd>align-items</kbd> 与 <kbd>align-content</kbd> 属性，它们都是写在容器上的属性，控制一行或者多行在副轴上的对齐方式。而 <kbd>align-self</kbd>
控制的是某个子项在副轴上的对齐方式，它允许某个子项与其他子项有不同的对齐方式。

它的取值同 <kbd>align-items</kbd>，默认取值为 <kbd>auto</kbd>，表示继承父元素的 <kbd>align-items</kbd> 属性。

```css
.container {
  align-items: flex-start;
}
.item2 {
  align-self: center;
}
.item4 {
  align-self: flex-end;
}
```

<FlexItemBox :containerStyle="{height: '200px', alignItems: 'flex-start'}" :itemStyles="[
{},
{alignSelf: 'center'},
{},
{alignSelf: 'flex-end'}
]" />

</v-clicks>

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/prac-bg.3lqgj1bku2s0.jpeg
---

# 实战：骰子

---

# 演示

<div grid="~ cols-3 gap-20" m="t-12">

<Dice1 />
<Dice2 />
<Dice3 />
<Dice4 />
<Dice5 />
<Dice6 />

</div>

---

# 具体实现

<div grid="~ cols-3 gap-2">
<div>

<Dice1 />

<br>
<br>
<br>

<v-clicks>

```html
<div class="container">
  <div class="pip"></div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

</v-clicks>

</div>

<div>

<Dice2 />

<br>
<br>
<br>

<v-clicks>

```html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
</div>
```

```css
.container {
display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: flex-end;
}
```

</v-clicks>

</div>

<div>

<Dice3 />

<br>
<br>
<br>

<v-clicks>

```html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
  <div class="pip"></div>
</div>
```

```css
.container {
display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: center;
}
.pip:nth-child(3) {
  align-self: flex-end;
}
```

</v-clicks>

</div>

</div>

---

<div grid="~ cols-3 gap-2">
<div>

<Dice4 />

<br>

<v-clicks>

```html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

</v-clicks>

</div>

<div>

<Dice5 />

<br>

<div style="transform: scale(.98);transform-origin: left top;">

<v-clicks>

```html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.column:nth-child(2) {
  justify-content: center;
}
```

</v-clicks>

</div>

</div>

<div>

<Dice6 />

<br>

<v-clicks>

```html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

</v-clicks>

</div>

</div>

---

# 参考链接

- [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex 布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flex-cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [Oh My God，CSS flex-basis 原来有这么多细节](https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/)
- [What are the differences between flex-basis and width?](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
- [Flexbox Dice](https://codepen.io/LandonSchropp/pen/KpzzGo?editors=1100)

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg
---

# 谢谢
