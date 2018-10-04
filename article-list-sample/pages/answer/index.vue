<template>
  <section class="container">
    <div>
      <h2>Articles</h2>
      <!--
        wite here your answer.
        show articles with use ArticleItemList component.
      -->
      <ArticleItemList
        v-for="article in articles"
        :key="article.id"
        :post="article"
      />
    </div>
  </section>
</template>

<script>
import ArticleItemList from '~/components/ArticleItemList.vue'

export default {
  components: {
    ArticleItemList
  },
  data () {
    return {
      articles: []
    }
  },
  async created() {
    // write here your answer
    // fetch articles from `http://localhost:3000/api/articles`
    const res = await this.$axios.get('/api/articles')
    this.articles = res.data
  }
}
</script>

<style>

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
