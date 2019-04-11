<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="item in 5" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.block {
  width: 300px;
  height: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
