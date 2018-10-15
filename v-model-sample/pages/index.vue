<template>
  <div class="index">
    <el-row class="input-area">
      <el-form
        ref="post"
        :rules="rules"
        :model="post"
      >
        <el-form-item prop="content">
          <!-- add bind data -->
          <el-input
            type="textarea"
            placeholder="post content"
          />
        </el-form-item>
      </el-form>
      <!-- add click event -->
      <el-button>send</el-button>
    </el-row>
    <el-row>
      <PostItemList
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </el-row>
  </div>
</template>

<script>
import PostItemList from '~/components/PostItemList'
export default {
  components: {
    PostItemList
  },
  data () {
    const contentValid = (rule, value, callback) => {
      // write your answer.
      // validate blank error
    }
    return {
      posts: [],
      post: {
        id: 0,
        content: ''
      },
      rules: {
        content: [
          { validator: contentValid, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.posts = [
      {id: 2, content: 'second post'},
      {id: 1, content: 'first post'}
    ]
  },
  methods: {
    sendPost () {
      // write your answer.
    }
  }
}
</script>

<style>
.index
{
  max-width: 600px;
  margin: 60px auto;
}
.input-area {
  margin-bottom: 60px;
}
</style>
