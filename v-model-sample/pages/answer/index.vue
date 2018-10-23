<template>
  <div class="index">
    <el-row class="input-area">
      <el-form
        ref="post"
        :rules="rules"
        :model="post"
      >
        <el-form-item prop="content">
          <el-input
            v-model="post.content"
            type="textarea"
            placeholder="post content"
          />
        </el-form-item>
      </el-form>
      <el-button @click="sendPost">send</el-button>
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
      if (value === '') {
        callback('content is required')
      }
      callback('')
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
    async sendPost () {
      // write your answer.
      await this.$refs.post.validate((valid) => {
        if (!valid) {
          return
        }
        const request = {
          id: this.posts.length + 1,
          content: this.post.content
        }
        this.posts.unshift(request)
        this.$refs.post.resetFields()
      })
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
