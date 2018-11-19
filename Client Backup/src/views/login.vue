<template>
 <loginForm @successLogin = 'emitApp'>
 </loginForm>
</template>

<script>
import loginForm from '@/components/loginForm.vue'
export default {
  name: 'login',
  methods: {
    emitApp : function() {
      this.$emit('isLogin')
    }
  },
  components: {
    loginForm
  }
}
</script>

