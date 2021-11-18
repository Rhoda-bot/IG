<template>
  <div>
    <Navbar/>
    <h1>User's Post</h1>
    <div >
     <div class="container mt-5">
       <div class="row justify-content-center">
         <div class="col-md-4 col-lg-4 col-xl-4"  v-for="(img,ind) in arr" :key="ind">
           <div class="card">
             <div class="card-body">
               <div class="row">
                 <div class="col-7 col-md-7">
                  <img :src="require(`C:/xampp/htdocs/Instag/backend/uploads/${img[0]}`)" alt="img" srcset="" class="img-fluid">
                 </div>
                 <!-- <div class="col-10 pt-2">
                   <input type="text" name="" id="" class="form-control">
                 </div>
                 <div class="col-2">
                   <button class="btn"><i class="fa fa-comment-alt"></i></button>
                 </div> -->
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
  name: 'UserPost',
  components: {
    Navbar
  },
  data () {
    return {
      msg: '',
      arr: []
    }
  },
  mounted () {
    axios.get('fetchPost.php', {
      headers: {
        authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => {
      this.arr = res.data
    }).catch(err => console.log(err))
  }
}
</script>

<style scoped>
  img{
    width: 200px;
    height: 250px;
  }
</style>
