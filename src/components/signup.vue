<template>
<div class="container-fluid bg-light">
  <div class="container">
   <div class="row justify-content-center">
     <div class="col-xl-10 col-lg-12 col-md-9">
       <div class="card o-hidden border-0 my-4 card-box">
         <div class="card-body">
           <div class="row justify-content-center">
             <div class="col-md-5">
               <div class="card o-hidden border-1 bg-white">
                 <div class="card-body">
                   <h3 class="card-title instagram text-center mt-2">Instagram</h3>
                   <div class="text-center card-text mt-3">
                     <div class="">
                        Sign up to see photos and videos <br> from your friends.
                     </div>
                     <div><hr></div>
                     {{msg}}
                     <form id="signup-form" @submit.prevent="handleForm">
                       <div class="text-center">Register Here</div>
                       <div class="form-group row justify-content-center mt-3">
                         <div class="col-md-10 col-lg-10 mx-auto col-xl-10">
                           <input type="text" name="email" id="" v-model="email" class="form-control 1-hidden" placeholder="Email">
                         </div>
                         <div class="col-md-10 mx-auto mt-2">
                           <input type="text" name="" id="" v-model="fullname" class="form-control 1-hidden" placeholder="Full name">
                         </div>
                         <div class="col-md-10 mx-auto mt-2">
                           <input type="text" name="" id="" v-model="username" class="form-control 1-hidden" placeholder="User Name">
                         </div>
                         <div class="col-md-10 mx-auto mt-2">
                           <input type="text" name="" id="" v-model="phone" class="form-control 1-hidden" placeholder="Phone No">
                         </div>
                         <div class="col-md-10 mx-auto mt-2">
                           <input type="password" name="" id="" v-model="password" class="form-control 1-hidden" placeholder="Password">
                         </div>
                         <div class="col-md-10 mx-auto mt-3">
                           <input type="submit" name="submit" id="registerbtn" value="Sign-up" class="input-btn btn-block">
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
                <div class="card mt-4 bg-white">
                  <div class="card-body">
                    <div class="card-title text-center">
                        have an account <a href="#">Sign in</a>
                    </div>
                  </div>
                </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  el: 'signup-form',
  data () {
    return {
      msg: '',
      email: '',
      fullname: '',
      username: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    handleForm: function () {
      const data = { email: this.email, fullname: this.fullname, user: this.username, phone: this.phone, pass: this.password }
      // console.log(data)
      axios.post('registration.php', data).then(res => {
        if (res.data === 'data added successfully') {
          this.$router.push({ path: '/signin' })
        } else {
          console.log(res.data)
          this.msg = 'error, registration was unsuccessful'
        }
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .card{
    background: transparent;
  }
  .card-text{
    color: #8e8e8e;
    font-weight: 700;
    font-size: 15px;
    font-family: Arial Unicode MS;
}
.instagram{
    font-family: Brush Script MT;
    font-size: 50px;
}
.input-width{
    /* width: 300px; */
    padding: 8px 8px;
    background-color:   #FAFAFA !important;
    border: 1px solid #8e8e8e !important;
    outline: none !important;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: 500;
}
.input-width:focus{
    border: 2px solid #8e8e8e !important;
    outline: 2px solid #FAFAFA !important;
}
.input-btn{
    background-color:#0095F6;
    padding: 4px 4px;
    outline: none;
    border-radius: 5px;
    border: none !important;
    font-family: Calibri (Body);
    font-size: 17px;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
}
</style>
