
<template>
       <div class="container">
            <div class="anchor"></div>
            <div class="anchor-notice">
                    我是一个需要借助锚点定位的元素
            </div>
    </div>
</template>

<style scoped>
        /* 锚点定位需要的关键属性： */

     .container {
          width: 500px;
          height: 200px;
          border: 1px solid black;
          position: relative;
       }
        .anchor{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: lightblue;
            margin-left: 150px;
            margin-top: 100px;

            position: absolute;
            anchor-name: --anchor-el;
        }

        .anchor-notice {
            width: fit-content;
            padding: 10px;
            border-radius: 10px;
            background: #DDD;

            position: absolute;
            position-anchor: --anchor-el;
            left: anchor(right);
            bottom: anchor(top);
        }
</style>
    