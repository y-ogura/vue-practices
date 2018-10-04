<template>
  <section class="container">
    <div>
      <h3>count: {{ count }}</h3>

      <!-- add click method -->
      <el-button @click="countDown">count down</el-button>
      <el-button @click="countUp">count up</el-button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    countUp () {
      // write here your answer
      if (this.count < 10) {
        this.count++
      }
    },
    countDown () {
      // write here your answer
      if (this.count > 0) {
        this.count--
      }
    }
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
