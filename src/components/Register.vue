<template lang="">
    <div class="container d-md-flex justify-content-center">
                <form class="form" >
                    <span class="title">Register</span>
                    <label for="firstName" class="label">firstName</label>
                    <input type="text" id="firstName" name="firstName" required class="input" v-model="payload.firstName">

                    <label for="surname" class="label">Surname</label>
                    <input type="text" id="surname" name="Surname" required class="input" v-model="payload.surname">

                    <label for="gender" class="label">Gender</label>
                    <input type="text" id="gender" name="Gender" required class="input" v-model="payload.gender">

                    <label for="cellNumber" class="label">CellNumber</label>
                    <input type="text" id="cellNumber" name="CellNumber" required class="input" v-model="payload.cellNumber">

                    <label for="email" class="label">Email</label>
                    <input type="email" id="email" name="email" required class="input"  v-model="payload.email">

                    <label for="joinDate" class="label">Date</label>
                    <input type="date" id="Date" name="joinDate" required class="input" v-model="payload.joinDate">
                    
                    <label for="password" class="label">Password</label>
                    <input type="password" id="password" name="password" required class="input" v-model="payload.userPass">
                    <button type="submit" class="submit" v-on:click.prevent="signUp(payload)">Register</button>
                    <p class="text-center text-muted mt-5 mb-0">
                      Already have an account?
                      <a href="login" class="fw-bold text-body"><u>Login here</u></a>
                    </p>
                  </form>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core'
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router'
export default {
    setup () {
    let payload = {
        firstName: '',
        surname: '',
        gender: '',
        cellNumber: '',
        email: '',
        userPass: '',
        joinDate: '',
        
    };
    // const router = useRouter();
    // async function toHome() {
    //   await router.push("/")
    // }
    // return {toHome};
    const store = useStore();
    const signUp = (payload)=> {
        store.dispatch("register", payload);
        //Refresh
        store.dispatch("fetchUsers");
    }
    const msg =
    computed( ()=>store.state)
    return {
        payload,
        msg,
        signUp

    }
},
name: "Register_user" 
}
</script>
<style scoped>
.form {
    max-width: 320px;
    width: 100%;
    background-color: #CBE4DE;
    padding: 20px;
    box-shadow: 0px 0px 0px 4px rgba(52, 52, 53, 0.185);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .container {
    padding-top: 5%;
    padding-bottom: 10%;
  }
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #1a202c;
  }
  
  .label {
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
  }
  
  .input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    color: #4a5568;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
  
  .input:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
  }
  
  .input:valid {
    border: 1px solid green;
  }
  
  .input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }
  
  .submit {
    background-color: #1a202c;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
      
      
      
</style>