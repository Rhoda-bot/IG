<template>
  <Navbar/>
    <div class="container pt-5 mt-4 bg-white" >
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-7 col-xl-7">
          <div class="card bg-white">
            <div class="card-body">
              <div class="">
                <div class="row justify-content-center">
                  <div class="col-md-11 col-lg-11 col-xl-11">
                    <div class="card border-0">
                      <div class="card-body">
                        <form id="edit-form" @submit.prevent="editForm">
                           <div class="form-group justify-content-center">
                             <div class="col-md-8">
                               <img src="../assets/img_avatar1.png" class="rounded-circle mr-4" alt="img">
                               <span>Username</span>
                               <div class="upload-btn-wrapper">
                                 <button class="btn-profile">Change Profile photo</button>
                                 <input class="" name="imgfile" type="file" id="file" accept="image/*">
                               </div>
                             </div>
                             <div class="col-md-8">
                              <label for="" class="card-text">Name:</label>
                              <input type="text" placeholder="Fullname" class="form-control " v-model="fullname">
                              <div>
                                 Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
                              </div><br>
                             </div>
                             <div class="col-md-8">
                               <label for="" class="card-text">Username:</label>
                               <input type="text" placeholder="Username" class="form-control" v-model="username">
                               <div>
                                 In most cases, you'll be able to change your username back to oyeejosh for another 14 days. Learn More
                               </div><br>
                             </div>
                             <div class="col-md-8">
                               <label for="" class=" card-text">Bio:</label>
                               <textarea name="" id="" cols="30" rows="3" class="form-control " v-model="bio"></textarea>
                             </div>
                             <div class="col-md-8">
                               <label for="" class="card-text">Email:</label>
                               <input type="text" class="form-control " placeholder="Email" v-model="email" readonly>
                             </div>
                             <div class="col-md-8">
                               <label for="" class="card-text">Phone:</label>
                                <input type="text" placeholder="Phone" class="form-control " v-model="phone">
                                <div>
                                   it cool to have you here.................
                                </div><br>
                             </div>
                             <div class="col-md-8">
                               <input type="submit" name="submit" value="Submit" class="input-btn btn-block">
                             </div>
                           </div>
                        </form>
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
import Navbar from '../components/navbar.vue'
export default {
  name: 'Profile',
  el: 'edit-form',
  components: {
    Navbar
  },
  data () {
    return {
      msg: '',
      username: '',
      fullname: '',
      email: '',
      bio: '',
      img: '',
      phone: ''
    }
  },
  mounted () {
    const getUser = JSON.parse(localStorage.getItem('user'))
    this.username = getUser.username
    this.fullname = getUser.fullname
    this.email = getUser.email
    this.phone = getUser.phone
    this.bio = getUser.bio
  },
  methods: {
    editForm: function () {
      const data = { username: this.username, fullname: this.fullname, email: this.email, phone: this.phone, bio: this.bio }
      // console.log(data)
      axios.post('editProfile.php', data).then(res => console.log(res.data)).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
img{
  width: 80px;
  height: 80px;
}
 .card{
    background: transparent;
  }
  .card-text{
    color: #8e8e8e;
    font-weight: 700;
    font-size: 15px;
    font-family: Arial Unicode MS;
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
