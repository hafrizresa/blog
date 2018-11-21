<template>
    <div>
        <div class="mustDevided" v-for="element in articles" :key="element._id">
            <div class="row pt-4 ">

                <div class="card col-md-4" style="width: 18rem;">
                    <img :src="element.picture" alt="..." class="img-thumbnail">
                </div>

                <div class="col-md-8">
                    <h3> {{element.title}} </h3>

                    <p> {{element.body}}</p>
                    <p class="text-muted">Author
                        <a href="#"> {{element.userId.name}} </a>
                    </p>
                </div>
            </div>
            <div class="row">
                <router-link :to="`console/edit-article/${element._id}`">
                    <button class="btn" style="margin-right:20px"> Edit</button>
                </router-link>
                <button class="btn" @click="deleteArticle(element._id)">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "bodyDashboard",
        props: ["articles"],
        methods: {
            deleteArticle(data) {
                if (confirm("are you sure want delete this article?")) {
                    axios
                        .delete("http://35.247.135.233/article", {
                            data: { id: data, token: localStorage.getItem("token") }
                        })
                        .then(data => {
                            return axios.post("http://35.247.135.233/article/user", {
                                token: localStorage.getItem("token")
                            });
                        })
                        .then(data => {
                            this.articles = data.data
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }
        }
    };
</script>

<style>
    .mustDevided {
        border-bottom: 1px solid #eee
    }
</style>