<template>
  <Navbar/>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-md-9">
        <div class="row justify-content-center">
          <div class="col-6 col-md-6">
            <div class="container-fluid">
              <div class="user-img pt-3" >
                <img src="../assets/img_avatar1.png" alt="" class="rounded-circle mr-3">

              </div>
              <div class="col-6 col-md-6 mt-2">
                <div class="">
                  <div class="">
                    <span class="uu" style="">{{username}}</span>
                    <button class="ml-4 btn btn-outline-secondary btn-md" @click="viewProfile">edit profile</button>
                  </div>
                  <div class="mt-3">
                    <div class="row">
                        <div><h6>{{fullname}}</h6></div>
                      <div class="d-none d-lg-block col-3 col-md-3">
                        <span class="post">100</span>&nbsp;Followers
                      </div>
                      <div class="d-block d-lg-none col-2">
                        <span class="post">30</span>Follow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="mt-5 col-12 border-bottom" id="hr">
            <!-- <hr> -->
            </div>
            <ul class="nav justify-content-center nav-justified" role="tablist">
            <li class="nav-item">
            <router-link to="#home" class="nav-link select-pill" data-toggle="pill"><div><i class="material-icons">image  </i></div>POSTS</router-link>
            </li>
            <li class="nav-item">
             <router-link to="#menu1" class="nav-link select-pill" data-toggle="pill"><div><i class="material-icons">bookmark_border</i></div>Saved</router-link>
            </li>
            <li class="nav-item">
             <router-link to="/post" class="nav-link select-pill" data-toggle="pill"><div><i class="material-icons"> center_focus_weak</i></div>POSTS HERE</router-link>
            </li>
            </ul>
            <div class="tab-content">
              <div id="home" class="container tab-pane active">MENU HOME</div>
              <div id="menu1" class="container tab-pane fade"><br>MENU 1</div>
              <div id="menu2" class="container tab-pane fade"><br>MENU 3</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import axios from 'axios'
export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  data () {
    return {
      message: '',
      username: '',
      fullname: ''
    }
  },
  mounted () {
    axios.get('profile.php').then(res => {
      console.log(res.data)
      const data = res.data
      localStorage.setItem('user', JSON.stringify(data))
      this.username = data.username
      this.fullname = data.fullname
    }).catch(err => console.log(err))
  },
  methods: {
    viewProfile: function () {
      this.$router.push({ path: '/profile' })
    }
  }
}
</script>

<style scoped>
  .user-img img{
  border-radius: 100%;
  width:170px;
  height:175px;
}
.border-bottom{
  width: 100%;
}
</style>
