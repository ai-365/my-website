<template>
    <div class="container">
             我是容器
        <div id="affected-div">
             受影响的子项
        </div>
    </div>
    <div style="margin-top: 20px;">我是另一个div，不受影响</div>
</template>



<style scoped>
    /* 定义一个容器 */
    .container {
        container-type: inline-size;
        container-name: container;
        width: 50vw;
        padding: 10px;
        background: gainsboro;
    }

    #affected-div {
        width: 100px;
        padding:20px;
        background: gainsboro;
    }


    @container container (width > 200px) {
        #affected-div {
            background: lightblue;
        }
    }

    /* 当父容器宽度大于300时，子项背景变蓝，同时宽度由固定值改为父容器宽度的80% */
    @container container (width > 300px) {
        #affected-div {
            background: blue;
            width:80%;
        }

    }
</style>