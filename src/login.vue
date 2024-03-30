<template>
<div class="lg:my-4">
    <div class="flex flex-col justify-center md:flex-row sm:flex-row ">

        <!-- Login page: left section -->
        <div class="bg-blue-600 p-20 shadow-lg text-white">
            <img src="./images/logo1.png" class="size-20 mb-8">
            <h2 class="text-2xl font-bold">Welcome to</h2>
            <h1 class="text-2xl font-extrabold">SVIT, Vasad</h1>
            <p class="mt-3">Login to access your account</p>
        </div>

        <!-- Login page: right section -->
        <div class="p-20 shadow-lg ">
            <p class="mb-5">Enter your account details:</p>

            <form @submit.prevent="login" class="">
                <div class="items-center p-1 border-b border-black flex justify-between">
                    <i class="fa-solid fa-circle-user"></i>
                    <input v-model="email" placeholder="E-mail ID" type="email" class="border-0" required />
                    <i class="tooltip fa-solid fa-circle-info"><span class="tooltiptext font-normal normal-case">Registered Email Id</span></i>
                </div>
                <div class="mb-5 p-1 border-b border-black flex justify-between items-center">
                    <i class="fa-solid fa-lock"></i>
                    <input v-model="password" placeholder="Password" :type="showPassword?'text':'password'" class="border-0" required />
                    <button type="button" @click="togglePasswordVisibility">
                        <i class="fa-solid fa-eye" :class="{'fa-solid fa-eye-slash': !showPassword }"></i>
                    </button>
                </div>
                <p><a href="" class="text-sm font-medium text-blue-600 hover:font-bold">Forgot your Password?</a></p>
                <button type="submit" class="mt-6 mb-5 bg-gray-800	rounded-2xl text-white w-full p-1 hover:bg-black hover:font-bold">Login</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import 'flowbite';
import axios from './axios.js'
export default {
    name: "Login",
    data: () => {
        return {
            email: "",
            password: "",
            showPassword: false,
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },

        async login() {
            console.log(this.email, this.password)
            try {
                const response = await axios.post('/UserAccounts/login', {
                    email: this.email,
                    password: this.password

                })
                if (response.status == 200) {
                    localStorage.setItem("token", JSON.stringify(response.data.id))
                    localStorage.setItem("email", this.email)
                    localStorage.setItem("userid", response.data.userId)
                    localStorage.setItem("stuid",this.stuid)
                    localStorage.setItem("fcurrSem",this.fcurrSem)
                    this.$router.push({
                        path: '/dashboard'
                    })
                }
            } catch (error) {
                alert("Incorrect Email or Password")
                console.log(error)
            }
        }
    },
};
</script>

<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: small;
    letter-spacing: 2px;
  visibility: hidden;
  width: 120px;
  background-color: rgb(243 244 246);
  text-align: center;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(243 244 246) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>