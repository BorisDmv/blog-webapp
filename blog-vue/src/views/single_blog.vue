<template>
    <div class="container">
        <h1>{{ blog.title }}</h1>
        <div v-html="markdownToHtml"></div>
    </div>
</template>
<script>
import { marked } from 'marked';

export default {
    data(){
      return {
          markdown: "# Hello World",
          blog: {
            title: null,
            desc: null
          }
      };
  },
  computed: {
      markdownToHtml(){
        if (this.blog.desc) {
        return marked(this.blog.desc);
        }
        return '';
      }
  },
  async created(){
      await this.$axios.get(`blogs/${this.$route.params.id}`)
      .then(response => {
          this.blog.title = response.data.title
          this.blog.desc = response.data.desc
      })
      .catch(error => {
          console.error(error);
      });
  }
}
</script>

<style scoped>

.container{
    margin: 0 auto;
    margin-top: 100px;
    padding: 2rem;
}

@media (max-width: 1000px) {
    .container {
      margin-top: 300px;
    }
}

</style>
