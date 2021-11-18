<template>
  <div class="home">
    <Navbar/>
    <h3>Home</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 col-lg-7 col-xl-7"  v-for="(img,ind) in arr" :key="ind">
          <div class="card">
              <span><b>{{img['username']}}</b></span>
            <div class="card-body">
              <img :src="require(`../../../backend/uploads/${img['post_body']}`)" alt="img" srcset="" class="img-fluid" @click="viewImg(img['post_body'],img['post_id'])">
              <hr>
              <!-- <div class="row">
                <div class="col-10">
                   <input type="text" class="form-control">
                </div>
                <div class="col-2">
                  <button>send</button>
                </div>
              </div> -->
            <button class="btn btn-danger" @click="deletePost(img['post_id'])">delete post</button>
            </div>
          </div>
          <div class="pt-2"></div>
        </div>
        <div class="col-md-5 col-lg-5 col-xl-5 pt-4" >
          <div v-if="followers.length > 0">
              <h3>People you may want to follow</h3>
          </div>
          <!-- <div v-else>
            <h2></h2>
          </div> -->
          <div v-for="(user,ind) in followers" :key="ind">
             <b>{{user['username']}}</b> <button class="btn bg-light" @click="peopleUmayFollow(user['username'],user['reg_id'])">{{followText}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Navbar from '../components/navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data  () {
    return {
      arr: [],
      followers: [],
      followText: 'follow'
    }
  },
  mounted () {
    axios.get('fetchPost.php').then(res => {
      this.arr = res.data
    }).catch(err => console.log(err))
    axios.get('peopleToFollow.php').then(res => {
      this.followers = res.data
      // console.log(res.data)
    }).catch(err => { console.log(err) })
  },
  methods: {
    viewImg: function (img, postId) {
      this.$router.push({
        name: 'ViewPost',
        params: {
          image: img,
          postInd: postId
        }
      })
    },
    peopleUmayFollow: function (user, index) {
      console.log(index)
      const filterFollower = this.followers.filter(val => val.username !== user)
      this.followers = filterFollower
      axios.post('followOthers.php', { index, status: true }).then(res => console.log(res.data)).catch(err => console.log(err))
      // console.log(filterFollower)
      return this.followers
    },
    deletePost: function (ind) {
      axios.post('deletePost.php', { ind }).then(res => console.log(res.data)).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
img{
  width: 300px;
  height: 200px;
}
</style>
