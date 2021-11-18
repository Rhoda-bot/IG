<template>
  <div>
    <Navbar/>
    <h3 class="pt-4">hello</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-body">
              <div  v-if="image===''">
                <h3>No post here</h3>
              </div>
              <div  v-else>
                <img :src="require(`../../../backend/uploads/${image}`)" alt="" srcset="" class="img-fluid">
              </div>
              <hr>
              <div class="row">
                <div class="col-10">
                  <input type="text" class="form-control rounded-pill" d placeholder="add comment... 🙂🙂☺" v-model="comment">
                </div>
                <div class="col-2">
                  <button @click="sendComment">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-body">
              <div class="alert alert-primary" v-for="(comm,ind) in allComments" :key="ind">
              <b>{{comm.username}}</b>
               {{comm.comment}}
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
  name: 'ViewPost',
  props: {
    image: String,
    postInd: Number
  },
  components: {
    Navbar
  },
  data () {
    return {
      comment: '',
      allComments: []
    }
  },
  mounted () {
    axios.post('fetchComments.php', { postId: this.postInd }).then(res => {
      this.allComments = res.data
      console.log(res.data)
    }).catch(err => console.log(err))
  },
  methods: {
    sendComment: function () {
      const data = { comment: this.comment, postId: this.postInd }
      axios.post('comments.php', data).then(res => console.log(res.data)).catch(err => console.log(err))
    }
  }
}
</script>
