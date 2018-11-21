<template>

    <div class="row pt-4 devider">
        <div class="card col-md-4" style="width: 18rem;">
            <img :src="articles.picture" alt="..." class="img-thumbnail">
        </div>
        <div class="col-md-8">
            <h3> {{articles.title}} </h3>
            <p class="text-muted">

                <p> {{articles.body}}</p>
                <p class="text-muted">Author
                    <a href="#"> {{articles.userId.name}} </a>
                </p>
                <router-link @click="showDetail('a')" :to="`/show-detail/${articles._id}`" class="btn">
                    <section>
                        <button id="js-trigger-overlay" type="button">Show Detail</button>
                    </section>
                </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Article",
        props: ["articles"],
        methods: {
            showDetail(data) {
                console.log(data);
            }
        }
    };
</script>

<style scopded>
    .devider {
        border-bottom: 1px solid #eee;
        padding: 0 0 10px;
    }

    section button {
        margin: 0 auto;
        font-size: 15px;
        padding: 10px 10px;
        display: block;
        background-color: #2d4349;
        border: 1px solid transparent;
        color: #ffffff;
        font-weight: 50;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    section button:hover {
        background-color: #ffffff;
        color: #3b545c;
        border-color: #009ac9;
    }
</style>