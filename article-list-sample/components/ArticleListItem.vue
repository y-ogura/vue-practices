<template>
  <div class="article">
    <el-card>
      <el-row>
        <h3>{{ post.title }}</h3>
      </el-row>
    </el-card>
  </div>
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

<style scoped>
.article {
  min-width: 500px;
  text-align: left;
}
</style>