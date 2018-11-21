<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <profile/>
            </div>
            <div class="col-md-8">
                <router-view :articles="articles" @addArticle="articleAdded" @articleEdit="articleEdited">
                </router-view>
            </div>
        </div>
    </div>

</template>

<script>
    import bodyDashboard from "../components/dashboardBody.vue";
    import profile from "../components/dashboardProfile.vue";
    import axios from "axios";
    export default {
        data() {
            return {
                articles: []
            };
        },
        components: {
            bodyDashboard,
            profile
        },
        methods: {
            articleEdited(data) {
                this.articles = data.data;
            },
            articleAdded(data) {
                this.articles.unshift(data.data);
            }
        },
        mounted() {
            axios
                .post("http://35.247.135.233/article/user", {
                    token: localStorage.getItem("token")
                })
                .then(data => {
                    this.articles = data.data;
                })
                .catch(err => {
                    console.log(err);
                    this.$router.push("/login");
                });
        }
    };
</script>