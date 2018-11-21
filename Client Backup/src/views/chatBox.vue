<template>
    <div class="d-flex justify-content-end fixed-bottom">
        <div>
            <div class="chatBody">
                <p v-for="(element, index) in output" :key="index"> {{name}} : {{element}} </p>
            </div>
            <div>
                <form>
                    <input v-model="chatVal" type="text" name="" id="" style="width: 250px; border-top: 1px solid">
                    <button @click="submitChat">submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import db from '../assets/config.js'
    import { functions } from 'firebase'

    export default {
        name: 'chatbox',
        data() {
            return {
                chatVal: '',
                output: [],
                name: ''
            }
        },
        methods: {
            submitChat(e) {
                e.preventDefault()
                db.ref('chat').set({
                    val: this.chatVal
                })
            }
        },
        mounted() {
            db.ref('chat')
                .on('value', snapshot => {
                    console.log(snapshot.val())
                    this.output.push(snapshot.val().val)
                    if (localStorage.getItem('user') == undefined) {
                        this.name = 'anonymous'
                    } else {
                        this.name = localStorage.getItem('user')
                    }
                })
        }
    }
</script>

<style>
    .chatBody {
        height: 100px;
        width: 250px;
        background-color: white
    }
</style>