<template>
    <div id="login">
        <div>
            
        </div>
        <form @submit.prevent ="login">
            <p class="h4 text-center mb-4">Sign in</p>
            <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
            <input v-model="input.username" type="email" id="defaultFormLoginEmailEx" class="form-control"/>
            <br/>
            <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
            <input v-model="input.password" type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
            <div class="text-center mt-4">
                <button @click="login()" class="btn btn-indigo" type="submit">Login</button>
            </div>
            
        </form>
<!-- Default form login -->
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    this.$store.commit("setEmail", this.input.username)
                    this.$store.commit("setNavBarDisplay", true) 
                    this.$router.replace({ name: "home" })
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 2px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
