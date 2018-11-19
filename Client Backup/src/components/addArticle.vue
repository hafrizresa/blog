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
<div>
    <label for="file" class="" style="padding-right: 20px">Picture</label> 
    <input type="file"  v-on:change="handleFile"  name="" id="">
</div>
<br>
<button @click="submit" class="btn"> POST ARTICLE</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
    name:'addArticle',
    data: ()=>{
        return {
            title: '',
            body: '',
            file: null
        }
    },
    methods: {
        handleFile(event){
            this.file = event.target.files[0]
        },
        submit: function(e){
            e.preventDefault()
            let result = new FormData()
            result.append('title', this.title)
            result.append('body', this.body)
            result.append('img', this.file)
            result.append('token', localStorage.getItem('token'))
            axios.post('http://localhost:3000/article/add', result, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(data => {
                this.$emit('addArticle', data)
                // console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
