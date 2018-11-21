<template>
    <form>
        <div class="form-group">
            <label for="usr">Title</label>
            <input v-model="title" type="text" class="form-control" id="usr">
        </div>
        <div class="form-group">
            <label for="comment">Body</label>
            <textarea v-model="body" class="form-control" rows="5" id="comment"></textarea>
        </div>
        <button @click="submit" class="btn"> SUBMIT</button>
    </form>
</template>

<script>
    import axios from "axios";
    export default {
        name: "addArticle",
        data: () => {
            return {
                title: "",
                body: ""
            };
        },
        methods: {
            submit: function (e) {
                e.preventDefault();

                axios
                    .put("http://35.247.135.233/article/update", {
                        title: this.title,
                        body: this.body,
                        id: this.$route.params.value,
                        token: localStorage.getItem("token")
                    })
                    .then(data => {
                        //   console.log(data);
                        return axios.post("http://35.247.135.233/article/user", {
                            token: localStorage.getItem("token")
                        });
                    })
                    .then(data => {
                        console.log(data)
                        this.$emit('articleEdit', data)
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        mounted() {
            // console.log('tes')
            axios
                .post("http://35.247.135.233/article/user", {
                    token: localStorage.getItem("token")
                })
                .then(data => {
                    // console.log(data)
                    let filtered = data.data.filter(val => {
                        return val._id == this.$route.params.value;
                    });
                    this.title = filtered[0].title;
                    this.body = filtered[0].body;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
</script>

<style>
</style>