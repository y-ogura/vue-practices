<template>
  <el-row
    :span="24"
    class="post"
  >
    <el-card>
      <p>{{ post.content }}</p>
    </el-card>
  </el-row>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style>
.post {
  width: 100%;
}
</style>