<template>
    <div>
        <div class="container-fluid" style="border-top: 1px solid black">
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class="col-md-11">
                    <Article v-for="(article,index) in listArticle" v-bind:articles="article" :key="index" @showDetail="emitArticle">
                    </Article>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Article from "@/components/Article.vue";
    import axios from 'axios'

    export default {
        name: "home",
        data: function () {
            return {
                listArticle: []
            };
        },
        methods: {
            emitArticle(data) {
                this.$emit('emitedArticle', data)
            }
        },
        components: {
            Article,
        },
        mounted: function () {
            axios.get('http://35.247.135.233/article')
                .then(data => {
                    this.listArticle = data.data
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    };
</script>