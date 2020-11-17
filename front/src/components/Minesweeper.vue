<template>
  <div>
    <div class="hex-row">
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
    </div>
    <div class="hex-row">
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
    </div>
    <div class="hex-row">
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
    </div>
    <div class="hex-row">
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
    </div>
    <div class="hex-row">
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
        <div class="hex"><div class="left"></div><div class="middle"></div><div class="right"></div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.hex {
    float: left;
    margin-right: -26px;
    margin-bottom: -50px;
}
.hex .left {
    float: left;
    width: 0;
    border-right: 30px solid rgb(211, 199, 37);
    border-top: 52px solid transparent;
    border-bottom: 52px solid transparent;
}
.hex .middle {
    float: left;
    width: 60px;
    height: 104px;
    background: rgb(211, 199, 37);
}
.hex .right {
    float: left;
    width: 0;
    border-left: 30px solid rgb(211, 199, 37);
    border-top: 52px solid transparent;
    border-bottom: 52px solid transparent;
}
.hex-row {
    clear: left;
}
.hex.even {
    margin-top: 53px;
}

// .hexagon {
//   position: relative;
//   width: 50px;
//   height: 28.87px;
//   background-color: #64C7CC;
//   margin: 14.43px 0;
//   border-left: solid 3px #333333;
//   border-right: solid 3px #333333;
// }

// .hexagon:before,
// .hexagon:after {
//   content: "";
//   position: absolute;
//   z-index: 1;
//   width: 35.36px;
//   height: 35.36px;
//   -webkit-transform: scaleY(0.5774) rotate(-45deg);
//   -ms-transform: scaleY(0.5774) rotate(-45deg);
//   transform: scaleY(0.5774) rotate(-45deg);
//   background-color: inherit;
//   left: 4.3223px;
// }

// .hexagon:before {
//   top: -19.6777px;
//   left: 5px;
//   border-top: solid 4.2426px #333333;
//   border-right: solid 4.2426px #333333;
// }

// .hexagon:after {
//   bottom: -19.6777px;
//   left: 5px;
//   border-bottom: solid 4.2426px #333333;
//   border-left: solid 4.2426px #333333;
// }
</style>
