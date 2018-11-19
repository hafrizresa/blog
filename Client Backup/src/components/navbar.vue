<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
              <router-link to="/">Home</router-link> 
      </li>
    </ul>
    <ul class="navbar-nav">
      <li v-if="isLogin == false" class="nav-item">
      <router-link to="/login">Login</router-link> | 
      </li>
      <li v-if="isLogin == false" class="nav-item">
      <router-link to="/register">Register</router-link>
      </li>
      <li class="nav-item">
        <a v-if="isLogin === true" @click="logOutUser" class="nav-link" href="#">Log out</a>
      </li>
    </ul>

  </div>
</nav>
</template>
<script>
export default {
    name: 'navbar',
    props: ['isLogin'],
    methods: {
      logOutUser(){
        this.$emit('logOut')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.$router.push('/')
      }
    }
}
</script>
