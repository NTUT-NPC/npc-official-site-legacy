<template>
  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(event, index) in history_event"
      :key="index"
      :timestamp="event.time"
    >
      {{ event.title }}
</el-timeline-item>
  </el-timeline>
</template>

<script>
export default {
  data() {
    return {
      history_event: [
        { title: '事件標題1', img: '#', describe: '事件敘述', time: '' },
        { title: '事件標題2', img: '#', describe: '事件敘述', time: '' },
        { title: '事件標題3', img: '#', describe: '事件敘述', time: '' }
      ]
    }
  }
}
</script>
