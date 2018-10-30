<template>
  <div class="article-list">
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '~/components/answer/ArticleListItem'

export default {
  components: {
    ArticleListItem
  },
  props: {
    articles: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>

<style scoped>
.article-list {
  margin: 30px auto;
  min-width: 500px;
}
</style>