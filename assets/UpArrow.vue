<template>
    <p id='top'></p>

    <a class="to-top" href="#top"><div class="up-arrow"></div></a>
</template>


<style scoped>
.to-top {
    display: block;
    background: #EEE;
    width: 60px;
    height: 60px;
    opacity: 0.5;
    border-radius: 50%;
    position: fixed;
    bottom: 10vw;
    left: 5vw;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.to-top:hover {
    background: #CCC;
}

.up-arrow {
    border-left: 5px solid #AAA;
    border-top: 5px solid #AAA;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    position: relative;
    top: 5px;
}
</style>