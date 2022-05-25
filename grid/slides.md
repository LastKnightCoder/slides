---
theme: default
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg
highlighter: prism
canvasWidth: 980
layout: cover
---

# Grid 布局

<!-- ## 现代布局方案 -->

---

# 简介

Grid 布局是最强大的 CSS 布局方案


- 之前我们介绍的 Flex 布局主要是通过设置子项在轴(主轴或者副轴)上的对齐方式来控制其内部布局的，而这个轴是一维的，所以我们说 Flex 布局适用于一维布局。当然设置 <kbd>flex-wrap</kbd> 可以使得 Flex 布局产生二维布局的效果，但是能力有限，其二维布局能力不够灵活。
- CSS Grid 提供给我们进行二维布局的能力，他可以将页面划分为一个个的网格，通过组合不同的网格，可以做出各种二维布局
- Grid 布局的兼容性，[Learn More](https://caniuse.com/?search=grid).
  <img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-grid.7fy52aimvf40.png">



---



<div style="width: 80%;" class="mt-12">

  <kbd>gap</kbd> 是 <kbd>column-gap</kbd> 与 <kbd>row-gap</kbd> 的简写形式，因此上面可以简写为如下

  ```css
  .container {
    gap: 10px 5px;
  }
  ```

  当 <kbd>gap</kbd> 只指定了一个值时，表示列间距与行间距取同一个值

  ```css
  gap: 10px;
  /* 等价于 */
  column-gap: 10px;
  row-gap: 10px;
  ```
</div>


---

# 术语介绍

介绍 Grid 布局需要用到的术语


### 容器和子项

<TwoColumn>

<div>

```html
<div class=".container">
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
</div>
```
</div>

<GridBox 
  :counts="4"
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>

const style = {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}

const itemStyle = {
  color: 'white'
}
const itemStyles = [{
  gridRow: '1 / 2',
  gridColumn: '1 / 3',
  backgroundColor: 'rgba(46, 49, 124, .8)',
}, {
  gridRow: 'span 2',
  gridColumn: '3 / 4',
  backgroundColor: '#126bae',
}, {
  backgroundColor: '#0f95b0'
}]
</script>

---

### 网格线与网格单元

<p style="width: 80%;">网格通过网格线来进行划分，四个相邻的网格线包围的区域形成一个网格单元。网格线的编号从 <kbd>1</kbd> 开始，我们也可以使用负数，例如 <kbd>-1</kbd> 表示倒数第一根网格线。</p>

<GridBox
  :counts="6"
  :style="style[0]"
/>

### 网格轨道

相邻网格线形成的行和列，我们称之为轨道。

<GridBox
  :counts="9"
  :style="style[1]"
  :itemStyle="itemStyle[1]"
  :itemStyles="itemStyles[1]"
/>

<script setup>

const style = [{
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}, {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px 50px'
}]

const itemStyle = [{}, {
  backgroundColor: 'transparent'
}]

const itemStyles = [[], [{
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {}, {}, {
  backgroundColor: '#ce5577'
}]]
</script>

---

# 属性一览

Grid 布局上的属性介绍

属性分为容器上的属性和子项上的属性。

### 容器上的属性

| | | |
| --- | --- | --- |
| <kbd>grid-template-columns</kbd> | <kbd>grid-template-rows</kbd> | <kbd>grid-template-areas</kbd>
| <kbd>gap-column</kbd> |  <kbd>gap-row</kbd> | <kbd>gap</kbd> |
| <kbd>grid-auto-flow</kbd> | <kbd>grid-auto-columns</kbd> | <kbd>grid-auto-rows</kbd>
| <kbd>justify-items</kbd> | <kbd>align-items</kbd> | <kbd>place-items</kbd> |
| <kbd>justify-content</kbd> | <kbd>align-content</kbd> | <kbd>place-content</kbd> |
| <kbd>grid-template</kbd> | <kbd>grid</kbd>|

---

# 属性一览

Grid 布局上的属性介绍

### 项目上的属性

| | | |
| --- | --- | --- |
| <kbd>grid-column-start</kbd> | <kbd>grid-column-end</kbd> | <kbd>grid-row-start</kbd> |
| <kbd>grid-row-end</kbd> | <kbd>grid-column</kbd> | <kbd>grid-row</kbd> |
| <kbd>grid-area</kbd> | <kbd>justify-self</kbd> | <kbd>align-self</kbd> |
| <kbd>place-self</kbd> |

<!--
有没有一丝丝的害怕
-->

---

# display

默认行为

<div style="width: 80%;">

当我们设置 <kbd>display: grid</kbd> 或者 <kbd>display: inline-grid</kbd> 时，容器就变为了一个网格盒子。

当没有划分网格时，如果没有设定高度，那么默认与块级盒子的行为一致

```css
.container {
  display: grid;
}
```

<GridBox />

</div>

---

<div style="width: 80%;">

与 `display: block` 不同的是，当容器设定高度以后，子项会均匀平分高度

```css
.container {
  height: 300px;
}
```

<GridBox
  :style="{
    width: '100%',
    height: '300px'
  }"
/>

</div>

---

# grid-template-columns grid-template-rows

<div style="width: 80%;">

<kbd>grid-columns</kbd> 规定将网格划分为多少列，并且每列的轨道大小。<kbd>grid-rows</kbd> 规定将网格划分为多少行，以及每行的轨道大小。

```css {2-3}
.container {
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
```

<GridBox
  :style="{
    gridTemplateColumns: '50px 50px',
    gridTemplateRows: '50px 50px'
  }"
/>

轨道大小的单位也可以是百分比

```css {2-3}
.container {
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50px 50px;
}
```

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: '50px 50px'
  }"
/>

</div>

---

# repeat

<div style="width: 80%;">

通过 <kbd>repeat()</kbd> 函数指定重复次数，避免写重复的值

```css {2-3}
.container {
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
}
```

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(4, 50px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>

---

<div style="width: 80%;">

还可以重复某种模式

```css {2-3}
.container {
  grid-template-columns: repeat(3, 50px 100px);
  grid-template-rows: repeat(2, 50px);
}
```

<GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px 100px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>


---

# fr 、auto-fill与minmax()

<!-- 特殊的网格单位 -->

<div style="width: 80%;">

当我们规定轨道大小时，我们还可以使用 <kbd>fr</kbd> 这个单位，它表示剩余空间，与 Flex 布局中的 <kbd>flex-grow</kbd> 类似。

```css {2-4}
.container {
  height: 100px;
  grid-template-cols: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
```

<GridBox
  :counts="7"
  :style="{
    height: '100px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)'
  }"
/>

通过 <kbd>repeat()</kbd> 和 <kbd>fr</kbd> 我们可以轻松的实现经典的 12 网格布局

```css {2}
.container {
  grid-template-cols: repeat(12, 1fr);
}
```

<!-- <GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(12, 1fr)',
  }"
/> -->

</div>

---

<div style="width: 80%;">

有的网格单元的大小是固定，而容器的大小不确定，如果我们希望每一行(列)尽可能多的包含更多的网格，我们可以使用 <kbd>auto-fill</kbd> 关键字表示自动填充

```css {2}
.container {
  grid-template-cols: repeat(auto-fill, 100px);
  grid-template-rows: 100px 100px;
}
```

<GridBox
  :counts="8"
  :style="{
    gridTemplateColumns: 'repeat(auto-fill, 100px)',
    gridTemplateRows: '100px 100px'
  }"
/>

</div>

---

<div style="width: 80%;">

我们可以通过 <kbd>minmax()</kbd> 来规定轨道的最小最大尺寸

```css
.container {
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
```

<GridBox
  :counts="3"
  :style="{
    gridTemplateColumns: '1fr 1fr minmax(100px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

```css
.container {
  width: 250px;
  grid-template-columns: 1fr 1fr minmax(200px, 1fr);
}
```

<GridBox
  :counts="3"
  :style="{
    width: '400px',
    gridTemplateColumns: '1fr 1fr minmax(200px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

</div>

---

# 子项排列

通过网格线指定子项的位置

<div style="width: 80%;">

当我们划分好网格以后，子项会依次按行填充，那可不以可以指定子项排列到特定的位置呢？通过子项的 <kbd>grid-column-start</kbd> <kbd>grid-column-end</kbd> <kbd>grid-row-start</kbd> <kbd>grid-row-end</kbd> 属性。

| 属性 | 含义 |
| --- | --- |
| <kbd>grid-column-start</kbd> | 起始列网格线
| <kbd>grid-column-end</kbd> | 结束列网格线
| <kbd>grid-row-start</kbd> | 起始行网格线
| <kbd>grid-row-end</kbd> | 结束行网格线

</div>

---

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">

<div>

```css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
```

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
```
</div>

<GridBox 
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</div>

<style>
blockquote {
  margin-top: 10px;
  border-left-width: 5px;
}
</style>

<script setup>
const style = {
  gridTemplateColumns: 'repeat(3, 100px)',
  gridTemplateRows: 'repeat(2, 100px)',
}

const itemStyles = [{
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 2,
  backgroundColor: '#61649f'
}, {
  gridColumnStart: 2,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 3,
  backgroundColor: '#1677b3'
}, {
  backgroundColor: '#12aa9c'
}, {
  backgroundColor: '#ad9e5f'
}]
</script>

---

<div style="width: 80%;">

# grid-column grid-row

<div><kbd>grid-column</kbd> 与 <kbd>grid-row</kbd> 是简写形式，写法如下</div>

```css
grid-column: grid-column-start / grid-column-end;
grid-row: grid-row-start / grid-row-end;
```

所以上述样式可以修改如下

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
```

</div>

---

# span

在 <kbd>grid-column</kbd> 与 <kbd>grid-row</kbd> 使用  <kbd>span</kbd> 来表示跨越的网格数，所以上述样式可以修改如下

```css {2,6}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / span 2;
  grid-row: 2 / 3;
}
```

---

# 网格线命名

<div style="width: 80%;">

我们可以在通过 <kbd>grid-template-rows</kbd> 与 <kbd>grid-template-columns</kbd> 划分网格的同时为网格线进行命名。

网格的名称使用 <kbd>[]</kbd> 包裹起来

```css
.container {
  grid-template-columns: [c1] 100px [c2] 100px [c3] 1px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3];
}
```

接着我们可以通过网格线的名称指定区域

```css
grid-column: c1 / c3;
grid-row: r1 / r2;
```

同一个网格线可以有多个名称，名称之间使用空格间隔 <kbd>[r1 start]</kbd>.

</div>

---

# grid-template-areas、grid-area

为网格划分区域

<div style="width: 80%;">

通过为子项指定网格线来指定位置，设置起来比较麻烦，下面介绍一种更快指定子项区域的的方法。通过 <kbd>grid-template-areas</kbd> 属性可以为网格系统划分区域，例如我们将一个 $4 \times 3$ 的网格系统划分为如下区域

```css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 150px 50px;
  grid-template-areas: 'header header header header' 
                       'main main . side' 
                       'footer footer footer footer';
}
```

使用 <kbd>.</kbd> 表示这个网格单元没有被使用。

</div>

---

<TwoColumn>

<div>

在子项中通过 <kbd>grid-area</kbd> 应用容器中划分的区域，子项即可占用这个区域

```css
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.side {
  grid-area: side;
}
.footer {
  grid-area: footer; 
}
```

</div>

<GridBox
  :counts="4"
  :style="style"
  :itemContents="['header', 'main', 'side', 'footer']"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>
const style = {
  width: '380px',
  // gap: '5px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '50px 150px 50px',
  gridTemplateAreas: "'header header header header' 'main main . side' 'footer footer footer footer'",
}

const itemStyles = [{
  gridArea: 'header',
  backgroundColor: '#61649f'
}, {
  gridArea: 'main',
  backgroundColor: '#1677b3'
}, {
  gridArea: 'side',
  backgroundColor: '#12aa9c'
}, {
  gridArea: 'footer',
  backgroundColor: '#0f95b0'
}]
</script>

---

<div style="width: 80%;">

通过 <kbd>grid-template-areas</kbd> 为网格系统划分区域，包围区域的网格线会被自动命名为 <kbd>区域名称-start</kbd> 或 <kbd>区域名称-end</kbd>，例如区域名 <kbd>header</kbd> 的起始和终止网格线会被命名为 <kbd>header-start</kbd> 和 <kbd>header-end</kbd>.

<div>

<kbd>grid-area</kbd> 还可以被用作 <kbd>grid-row-start</kbd> <kbd>grid-coulmn-start</kbd> <kbd>grid-row-end</kbd> <kbd>grid-column-end</kbd> 的简写形式

```css
grid-area: 
  grid-row-start / grid-column-start / grid-row-end / grid-column-end;
```

</div>

<div>

我们为 header 子项指定也可区域可以写为如下

```css
.header {
  grid-area: header-start / header-start / header-end / header-end;
}
```
</div>

</div>


---

# gap

网格之间的间距

<div style="width: 80%;">

  通过 <kbd>column-gap</kbd> 与 <kbd>row-gap</kbd> 来控制网格之间的间距

  ```css
  .container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 50px);
    column-gap: 10px;
    row-gap: 5px;
  }
  ```

  <GridBox
    :counts="7"
    :style="{
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 50px)',
      columnGap: '10px',
      rowGap: '5px'
    }"
  />
</div>

---

# grid-auto-flow

自动填充的方式

<div style="width: 80%;">

默认的填充方式为按行自动填充，它是通过 <kbd>grid-auto-flow</kbd> 属性来规定的，其默认值为 <kbd>row</kbd>，即按行填充

```css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-auto-flow: row;
}
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'row'
  }"
/>

</div>

---

<div style="width: 80%;">

设置 <kbd>grid-auto-flow</kbd> 为 <kbd>column</kbd>，元素将会默认按列进行填充

```css {2}
.container {
  grid-auto-flow: column;
}
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'column'
  }"
/>

</div>

---

<div>

默认的填充算法是稀疏 <kbd>(sparse)</kbd> 填充

```css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-auto-flow: row;
}
.item1 {
  grid-column: 1 / 3;
}
.item2 {
  grid-column: 1 / 2;
}
```

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>

---

<div>

```css
.container {
  grid-auto-flow: row dense;
}
```

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row dense'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>

---

# justify-content 与 align-content

当网格系统的大小小于容器大小时，网格系统在容器的对齐方式。

<div style="width: 80%;">

<kbd>justify-content</kbd> 与 <kbd>align-content</kbd> 均是位于容器上的属性，当网格系统的宽度小于容器的宽度时，<kbd>justify-content</kbd> 将会指定网格系统在容器的水平对齐方式，<kbd>align-content</kbd> 则指定网格系统在容器的垂直对齐方式。

| <kbd>stretch</kbd> | <kbd>start</kbd> | <kbd>end</kbd> |
| --- | --- | --- |
| <kbd>center</kbd> | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |

</div>

---

<TwoColumn>

<div>

<div>

<!-- <kbd>start</kbd> -->

```css
justify-content: start;
```

<GridBox
  :style="style[0]"
/>

</div>

<div>

```css
justify-content: end;
```

<GridBox
  :style="style[1]"
/>

</div>

<div>

```css
justify-content: center;
```

<GridBox
  :style="style[2]"
/>

</div>

</div>

<div>

<div>

```css
justify-content: space-between;
```

<GridBox
  :style="style[3]"
/>
</div>

<div>

```css
justify-content: space-around;
```

<GridBox
  :style="style[4]"
/>

</div>

<div>

```css
justify-content: space-evenly;
```

<GridBox
  :style="style[5]"
/>

</div>
</div>

</TwoColumn>


<script setup>
const style = [{
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'center'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-between'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-around'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-evenly'
}]
</script>


---

<div>

  <div class="grid grid-cols-6 gap-8">

  <div>

  <kbd>start</kbd>

  <GridBox
    :counts="3"
    :style="style[0]"
  />
  </div>

  <div>

  <kbd>end</kbd>

  <GridBox
    :counts="3"
    :style="style[1]"
  />

  </div>

  <div>

  <kbd>center</kbd>

  <GridBox
    :counts="3"
    :style="style[2]"
  />

  </div>

  <div>

  <kbd>space-between</kbd>

  <GridBox
    :counts="3"
    :style="style[3]"
  />

  </div>

  <div>

  <kbd>space-around</kbd>

  <GridBox
    :counts="3"
    :style="style[4]"
  />

  </div>

  <div>

  <kbd>space-evenly</kbd>

  <GridBox
    :counts="3"
    :style="style[5]"
  />

  </div>

  </div>

</div>

<script setup>
const style = [{
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'start'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'end'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'center'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-between'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-around'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-evenly'
}]
</script>

<!-- 取值同 <kbd>justify-content</kbd> -->

---

# justify-items 与 align-items

<!-- 子项在网格中的对齐方式 -->

<div style="width: 80%;">

没有为子项设定宽度和高度时，默认子项是自动撑满网格单元的，如果为子项设定大小，那么子项就不会撑满网格单元，这时可以通过 <kbd>justify-items</kbd> 和 <kbd>align-items</kbd> 分别设置子项的水平对齐和垂直对齐方式。

有四种取值，分别是 <kbd>start</kbd>、<kbd>end</kbd>、<kbd>center</kbd>、<kbd>stretch</kbd>，默认值为 <kbd>stretch</kbd>，即自动充满网格单元的宽度。

<div>

```css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
}
.item {
  width: 100px;
}
```

<GridBox
  :style="style[0]"
  :itemStyle="itemStyle[0]"
/>


</div>

</div>

<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '100px'
}]
</script>

---

<div style="width: 80%;">

<div>

```css
jusitify-items: start;
```

<GridBox
  :style="style[1]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

```css
jusitify-items: end;
```

<GridBox
  :style="style[2]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

```css
jusitify-items: center;
```

<GridBox
  :style="style[3]"
  :itemStyle="itemStyle[0]"
/>

</div>
</div>


<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '80px'
}]
</script>

---

<TwoColumn>

<div>

```css
align-items: start;
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

```css
align-items: end;
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'end'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

<div>

```css
align-items: center;
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'center'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

</TwoColumn>

<kbd>place-items</kbd> 是 <kbd>align-items</kbd> 和 <kbd>justify-items</kbd> 的简写形式。<kbd>place-items</kbd> 第一个设置的值是 <kbd>align-items</kbd>，第二个设置的值是 <kbd>justify-items</kbd>，当为 <kbd>place-items</kbd> 只设置一个值时，表示为二者设置相同的值

---

# justify-self align-self

<!-- 特定子项在网格单元中的对齐方式 -->


<div style="width: 80%;">

通过 <kbd>justify-items</kbd> 和 <kbd>align-items</kbd> 规定所有子项在网格单元内如何对齐，通过 <kbd>justify-self</kbd> 和 <kbd>align-self</kbd> 规定特定子项在容器内的排列，它是子项上面的属性，取值同 <kbd>justify-items</kbd> 与 <kbd>align-items</kbd>。



```css
.container {
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: 100px;
  justify-items: center;
  align-items: center;
  width: 400px;
}
.item {
  width: 50px;
  height: 50px;
}
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
/>
</div>

---

<div style="width: 80%;">

```css
.item1 {
  justify-self: start;
  align-self: start;
}
.item2 {
  align-self: end;
}
.item3 {
  justify-self: end;
}
```

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
  :itemStyles="[{
    justifySelf: 'start',
    alignSelf: 'start',
    backgroundColor: '#5698c3'
  }, {
    alignSelf: 'end',
    backgroundColor: '#b2bbbe'
  }, {
    justifySelf: 'end',
    backgroundColor: '#45b787'
  }]"
/>

</div>


<kbd>place-self</kbd> 是 <kbd>justify-self</kbd> 与 <kbd>align-self</kbd> 的简写形式。

---

# grid-auto-columns grid-auto-rows

网格系统之外的网格大小

<div style="display: grid; grid-template-columns: 4fr 6fr; gap: 10px;">

```css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
.item2 {
  grid-column: 4 / 5;
  grid-row: 3 / 4;
}
.item3 {
  grid-column: 5 / 6;
}
```

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>  

</div>

超出网格系统的部分会自动生成网格轨道，我们可以通过 <kbd>grid-auto-columns</kbd> 和 <kbd>grid-auto-rows</kbd> 来改变自动生成的轨道大小，默认生成的轨道大小为 <kbd>auto</kbd>.

---

<div style="display: grid; grid-template-columns: 3fr 6fr; gap: 10px;">

<div>

```css
.container {
  grid-auto-columns: 100px;
  grid-auto-rows: 200px;
}
```
</div>

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)',
    gridAutoColumns: '100px',
    gridAutoRows: '200px'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>

</div>

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/marek-piwnicki-T6PuTQiYr1s-unsplash.3fflj3h7lv20.jpg
---

# 案例

---

<WidthResizable>
<CaseStudy />
</WidthResizable>

---

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">

<div>

```html
<div class="container_wrapper">
  <div class=".container">
    <div class="prose"></div>
    <div class="sidebar">
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="prose"></div>
  </div>
</div>
```

```css
.container_wrapper {
  contain: style layout inline-size;
}
.container {
  display: grid;
  gap: 20px;
}
.sidebar {
  display: inherit;
  gap: inherit;
}
```
</div>

<div>

```css
@container (min-width: 600px) and (max-width: 900px) {
  .sidebar {
    grid-template-columns: repear(2, 1fr);
  }
}

@container (min-width: 900px) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
  .sidebar {
    grid-row: span 2;
    grid-auto-rows: min-content;
  }
}
```
</div>

</div>

---
canvasWidth: 1500
---

<WidthResizable>
<CaseStudy2 />
</WidthResizable>

---

# 参考文献

- [CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [中国色](http://zhongguose.com/)
- [Unsplash](https://unsplash.com/)
- [Case Study: My First Practical CSS Grid Layout](https://cloudfour.com/thinks/first-css-grid-layout/)

---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg
---

# 谢谢