<template>
  <div class="container-fluid  bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 my-5 card-box">
            <div class="card-body">
              <div class="row justify-content-center mt-4">
                <div class="col-md-5 col-lg-5 col-xl-5">
                  <div class="card o-hidden border-1 bg-white">
                    <div class="card-body">
                      <h3 class="card-title instagram text-center mt-2">Instagram</h3>
                        <div class="text-center card-text mt-3">
                          <div> Sign in to see photos and videos <br> from your friends. </div>
                        </div>
                    </div>
                    <div><hr></div>
                    <form id="signin-form" @submit.prevent="signinForm">
                       <div class="text-center"><h3>Login here</h3></div>
                       <p v-if="error.length" class="text-center alert alert-danger">
                         <b class="" role="alert">Please correct the following error(s):</b>
                          <ul>
                            <li v-for="err in error" :key="err">{{ err }}</li>
                          </ul>
                       </p>
                        <div class="form-group row justify-content-center mt-3">
                          <div class="col-md-10 col-lg-10 mx-auto col-xl-10">
                             <input type="text" name="email" v-model="email" class="1-hidden input-width form-control" placeholder="email">
                          </div>
                          <div class="col-md-10 mx-auto mt-2">
                            <input type="password" name="password" v-model="password" class="input-width form-control" placeholder="password">
                          </div>
                          <div class="col-md-10 mx-auto mt-3">
                            <input type="submit" name="submit" value="Sign in" class="input-btn btn-block">
                          </div>
                        </div>
                    </form>
                  </div>
              <div class="card mt-3 bg-white">
                <div class="card-body">
                  <div class="card-title text-center">
                    Create an account? <a href="#">Sign Up</a>
                    <router-link to=""></router-link>
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
  name: 'Signin',
  el: 'signin-form',
  data () {
    return {
      email: null,
      password: null,
      error: []
    }
  },
  computed: {
    checkEmail: function () {
      return 'hello'
      // console.log('hello')
    }
  },
  methods: {
    signinForm: function () {
      // if (this.email && this.password) {
      //   return true
      // }
      // this.error = []
      // if (!this.email) {
      //   this.error.push('Email is required')
      // } if (!this.password) {
      //   this.error.push('Password is required')
      // } if (this.password.length < 8) {
      //   this.error.push('password is too short')
      // }
      const { email, password } = this
      const data = { email, password }
      axios.post('login.php', data).then(res => {
        if (res.data) {
          localStorage.token = res.data
          console.log(res.data)
          this.$router.push({ path: '/dashboard' })
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
