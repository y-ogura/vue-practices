<template>
  <section class="container">
    <div>
      <h3>Article List</h3>
      <!-- use component -->
      <div class="article-list">
        <div
          v-for="article in articles"
          :key="article.id"
          class="article-list-item"
        >
          <el-card class="article">
            <el-row class="title">
              {{ article.title }}
            </el-row>
            <el-row class="content">
              {{ article.content }}
            </el-row>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.articles = [
      {id: 2, title: "second", content: 'second post'},
      {id: 1, title: "first", content: 'first post'}
    ]
  }
}
</script>

<style scoped>
.article-list {
  margin: 30px auto;
  min-width: 500px;
}
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
