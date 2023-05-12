<template>
    <div class="container">
        <textarea v-model="markdown"></textarea>
        <div v-html="markdownToHtml"></div>


        <div v-for="blog in blogs">
            <div>
                <p>Title is {{ blog.attributes.title }}</p>
                <p>Title is {{ blog.attributes.desc }}</p>
                <button @click="ReadBlog(blog.id)">Read more</button>
            </div>
        </div>
    </div>
</template>
<script>
import {marked} from 'marked';

export default {
    data() {
        return {
            markdown: "# Hello World",
            blogs: []
        };
    },
    methods: {
        ReadBlog(blogID) {
            this.$router.push(`/blog/${blogID}`)
        }
    },
    computed: {
        markdownToHtml() {
            return marked(this.markdown);
        }
    },
    created() {
        this.$axios.get('blogs')
            .then(response => {
                console.log(response.data.data);
                this.blogs = response.data.data
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    margin-top: 136px;
}

</style>