<template>
    <div class="container">
        <!--        <textarea v-model="markdown"></textarea>-->
        <!--        <div v-html="markdownToHtml"></div>-->


        <div v-for="blog in blogs" :key="blog.id">

            <!-- container starts -->
            <div class="blogCont container-flex">
                <main>

                    <article class="article-featured">
                        <h2 class="article-title">{{ blog.title }}</h2>
                        <img :src="'http://localhost:3000/' + blog.thumbnail"
                             alt="simple white desk on a white wall with a plant on the far right side"
                             class="article-image">
                        <p class="article-info">{{ blog.created_at }}</p>
                        <p class="article-body">{{ blog.description }}</p>
                        <a @click="ReadBlog(blog.slug)" class="article-read-more">CONTINUE READING</a>
                    </article>


                </main>

            </div>
            <!-- container ends -->
        </div>
    </div>
</template>
<script>
import {marked} from 'marked';

export default {
    data() {
        return {
            markdown: "# Hello World",
            blogs: {}
        };
    },
    methods: {
        ReadBlog(blogSlug) {
            this.$router.push(`/blog/${blogSlug}`)
        }
    },
    computed: {
      formattedCreatedAt() {
        const createdAt = new Date(this.blogs.created_at);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return createdAt.toLocaleDateString('en-US', options);
      },
      markdownToHtml() {
          return marked(this.markdown);
      }
    },
    created() {
        this.$axios.get('blogs')
            .then(response => {
                console.log(response);
                this.blogs = response.data
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>

<style scoped>
.container {
    margin: 200px auto;
}

main{
    width: 100%;
}

.container-flex {
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
}

.article-featured {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.article-title {
    font-size: 1.5rem;
    text-align: left;
}

.article-image {
    width: 50%;
}

.article-read-more,
.article-info {
    font-size: .875rem;
    margin: 1rem 0 0 0;
}

.article-read-more {
    color: #1792d2;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
}

.article-read-more:hover,
.article-read-more:focus {
    color: #143774;
    text-decoration: underline;
}

@media (max-width: 1000px) {
    .container {
        margin-top: 380px;
    }

    .article-image{
        width: 100%;
    }
}

</style>
