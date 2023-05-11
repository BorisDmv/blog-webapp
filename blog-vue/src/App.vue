<template>
  <div>
      <p>App</p>
      <textarea v-model="markdown"></textarea>
      <div v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  data(){
      return {
          markdown:  "# Hello World",
      };
  },
  computed: {
      markdownToHtml(){
          return marked(this.markdown);
      }
  },
  created(){
      this.$axios.get('blogs')
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
  }
}

</script>
