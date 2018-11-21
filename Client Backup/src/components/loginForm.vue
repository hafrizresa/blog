<template>
    <div class="container">

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button @click="onClickSubmit" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'loginForm',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onClickSubmit: function (e) {
                e.preventDefault()
                axios.post('http://35.247.135.233/users/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(data => {

                        localStorage.setItem('token', data.data.token)
                        localStorage.setItem('user', data.data.user)
                        this.$emit('successLogin')
                        this.$router.push('/console')

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>