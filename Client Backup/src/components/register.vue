<template>

    <div class="container">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input v-model="name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <button type="submit" @click="onClickSubmit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'registerForm',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                registerStatus: null
            }
        },
        methods: {
            onClickSubmit: function (e) {
                e.preventDefault()
                console.log(this.email)
                axios.post('http://35.247.135.233/users/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                    .then(data => {
                        this.$router.push('/login')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>