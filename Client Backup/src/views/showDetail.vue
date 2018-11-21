<template>
    <div class="container">
        <h1>{{article.title}}</h1>
        <img :src="article.picture" alt="">
        <p>
            {{article.body}}
        </p>
        <p class="text-muted">Author
            <a href="#"> {{article.userId.name}} </a>
        </p>
        <commentval :listComment="comments"></commentval>
    </div>
</template>

<script>
    import axios from "axios";
    import commentval from "../components/comment.vue";

    export default {
        name: "showDetail",
        data() {
            return {
                comments: [],
                article: ""
            };
        },
        components: {
            commentval
        },
        data() {
            return {
                article: ""
            };
        },
        props: ["emitArticle"],
        mounted() {
            Promise.all([
                axios.post("http://35.247.135.233/article/detail", {
                    id: this.$route.params.id
                }),
                axios.post("http://35.247.135.233/comment/read", {
                    articleId: this.$route.params.id
                })
            ])
                .then(data => {
                    this.article = data[0].data[0]
                    this.comments = data[1].data
                })
        }
    };
</script>

<style>
</style>