<template>
  <el-card class="article">
    <el-row class="title">
      {{ article.title }}
    </el-row>
    <el-row class="content">
      {{ article.content }}
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style scoped>
.article {
  text-align: left;
}
.title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid #e9e9e9;
}
.content {
  margin-top: 10px;
}
</style>