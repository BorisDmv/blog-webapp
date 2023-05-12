<template>
    <div class="container">
        <!--        <textarea v-model="markdown"></textarea>-->
        <!--        <div v-html="markdownToHtml"></div>-->


        <div v-for="blog in blogs">
            <!--            <div>-->
            <!--                <p>Title is {{ blog.attributes.title }}</p>-->
            <!--                <p>Title is {{ blog.attributes.desc }}</p>-->
            <!--                <button @click="ReadBlog(blog.id)">Read more</button>-->
            <!--            </div>-->


            <!-- container starts -->
            <div class="container container-flex">
                <main role="main">

                    <article class="article-featured">
                        <h2 class="article-title">{{ blog.attributes.title }}</h2>
                        <img src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/life.jpg"
                             alt="simple white desk on a white wall with a plant on the far right side"
                             class="article-image">
                        <p class="article-info">July 23, 2019 | 3 comments</p>
                        <p class="article-body">{{ blog.attributes.desc }}</p>
                        <a @click="ReadBlog(blog.id)" class="article-read-more">CONTINUE READING</a>
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
    margin: 200px auto;
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
    width: 70%;
}

.article-read-more,
.article-info {
    font-size: .875rem;
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

.article-info {
    margin: 2em 0;
}

@media (max-width: 1000px) {
    .container {
        margin-top: 320px;
    }
}

</style>