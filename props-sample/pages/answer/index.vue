<template>
  <section class="container">
    <div>
      <h3>Article List</h3>
      <!-- use component -->
      <ArticleList :articles="articles" />
    </div>
  </section>
</template>

<script>
import ArticleList from '~/components/answer/ArticleList'

export default {
  components: {
    ArticleList
  },
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