
<script>
import apiHelper from "../utils/apiHelper";
import Loader from "../components/Loader.vue";
import { useRoute } from "vue-router";
import { EventBus } from "@/utils/eventBus";

export default {
  data() {
    return {
      isLogin: true,
      loginName: "johnd",
      loginPassword: "m38rmF$",
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      showLoginPassword: false,
      showRegisterPassword: false,
      isLoader:false
    };
  },
  components:{
    Loader
  },
  methods: {
    async handleLogin() {
      if (!this.loginName || !this.loginPassword)
        return this.$toast.error("All fiels are required!");
     this.isLoader=true
        const response = await apiHelper.post("auth/login", {
          username: this.loginName,
          password: this.loginPassword,
        });
        this.isLoader=false
        console.log("the response from api helper is",response)
if(response.status) {
    localStorage.setItem('token',response.result.token)
    // localStorage.setItem('fake_login_credentials',JSON.stringify())
    this.$router.push("/");
    EventBus.emit("login-check");
    this.$toast.success("Login successful")
}else{
    this.$toast.error(response.result)
}
      
    },
 async handleRegister() {
    if (!this.registerName || !this.registerPassword || !this.registerEmail)
    return this.$toast.error("All fiels are required!");

    this.isLoader=true
    const response = await apiHelper.post("users", {
        id:0,
          username: this.registerName,
          email:this.registerEmail,
          password: this.registerPassword,
        });
        this.isLoader=false  
        console.log("the response from api helper is",response)
if(response.status) {
    this.$toast.success("Registration successful! Log In.")
    console.log(response.result)
    // localStorage.setItem('token',response.result)
    // this.$router.push("/home");
    this.isLogin=true
    this.loginName=this.registerName
    this.loginPassword=this.registerPassword
}else{
    this.$toast.error(response.result)
}

},
  },
  created(){
    this.route = useRoute();
    const path= this.route.path
    if(path=='/login') {this.isLogin=true}
else if(path=='/register') this.isLogin=false
  }
};
</script>


<template>
    
    <div style="margin-top: 100px;padding:5px; max-width: 1500px;font-family:'Itim', cursive;" class="w-full flex justify-center mx-auto  h-min main-container">

<div v-show="isLoader" class="m-auto">
    <Loader  />
</div>
    <div v-show="!isLoader" class="w-full flex flex-col items-center ">

      <div class="tabs rounded-lg">
        <button
          :class="{ active: isLogin }"
          class=" bg-white  rounded-lg  pointer text-lg tab-button"
          @click="isLogin = true"
        >
          Login
        </button>
        <button
          :class="{ active: !isLogin }"
          class=" bg-white button-border rounded-lg  pointer text-lg tab-button "
          @click="isLogin = false"
        >
          Register
        </button>
      </div>


<!-- ---login--- -->
      <div
        v-if="isLogin"
        style="gap: 10px"
        class="w-full flex flex-col justify-center items-center"
      >
        <input
          class="input  font-semibold font-style-itim text-lg "
          type="text"
          v-model="loginName"
          placeholder="Username"
        />
        <div class="input flex">
          <input
            :type="showLoginPassword ? 'text' : 'password'"
            v-model="loginPassword"
            placeholder="Password"
            class="outline-none border-none w-full   font-semibold font-style-itim text-lg"
          />
          <i
            @click="showLoginPassword = !showLoginPassword"
            :class="showLoginPassword?'ri-eye-line':'ri-eye-off-line'"
            class="pointer"
          ></i>
        </div>
        <button style="margin-top: 20px" class="rounded-lg pointer text-lg submit-button" @click="handleLogin">
          Login
        </button>
      </div>

      <!-- ----register--- -->
      <div v-else      style="gap: 10px"
      class="w-full flex flex-col justify-center items-center">
        <input type="text" class="input  font-semibold font-style-itim text-lg" v-model="registerName" placeholder="Name" />
        <input type="email" class="input  font-semibold font-style-itim text-lg" v-model="registerEmail" placeholder="Email" />
        <div class="input flex">
          <input :type="showRegisterPassword ? 'text' : 'password'" v-model="registerPassword" placeholder="Password"  class="outline-none border-none w-full  font-semibold font-style-itim text-lg" />
          <i
            @click="showRegisterPassword = !showRegisterPassword"
             :class="showRegisterPassword?'ri-eye-line':'ri-eye-off-line'"
            class="pointer"
          ></i>
        </div>
        <button style="margin-top: 20px" class="rounded-lg pointer text-lg submit-button" @click="handleRegister">Register</button>
      </div>
<div style="color: red;" class=" mt-40 text-center">
<p>!! It is built with Fake api so you can simulate the register but not actual registration on Grabit.</p>
<p>!! Do not change the login credentials else you can not login. The login Credentials are -  </p>
 <p> username: "johnd" & password: "m38rmF$"
</p>
</div>
    </div>
  </div>



</template>



<style scoped>

 

.submit-button{
  width: 150px;
  padding: 10px 0;
  font-family: "Itim", cursive;
  outline: none;
  border:none;
  background-color: rgb(1,84,154);
  color:white;
transition: all linear 0.5s;
}

.submit-button:hover{
  background: rgba(1,84,154,0.82);
  transform: scale(1.1);
}

@media (max-width: 350px) {
 /* .tabs{width: 90%;}
 .tab-button{
    font-size: 14px;
    padding:8px 10px
 } */
 input[type="text"] {
font-size: 16px !important;
font-weight: 400 !important;
}
  }
</style> 