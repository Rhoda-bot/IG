<template>
  <div>
    <Navbar/>
      <div class="pt-5 m-t-4"></div>
      <div class="pt-3 m-t-4"></div>
    <div class="row justify-content-center pt-5 bg-light">
    <div class="col-12 col-md-7">
        <div class="card bg-white">
            <h6 class="card-text mt-2 text-center">POST Here</h6>
            <div class="card-body">
            <div v-if="response">  {{response}}</div>
                <form id="post-form" @submit.prevent="postForm" enctype="multipart/form-data">
                    <div class="form-group col-md-12 mx-auto">
                        <span><b>upload file</b></span>
                        <!-- <label for="">Upload here</label> -->
                        <input type="file" multiple id="file" ref="file" class="custom-file-input">
                    </div>
                    <div class="form-group col-md-12 mx-auto">
                                        <!-- <input type="file" class="form-control"> -->
                    <textarea name="textpost" id="" class="form-control" v-model="message" cols="30" rows="5"></textarea>
                    </div>
                    <div class="">
                        <input type="submit" class="btn btn-white w-100 text-primary btn-block" name="submit" value="POST">
                    </div>
                </form>
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
  name: 'Post',
  components: {
    Navbar
  },
  data () {
    return {
      message: '',
      file: '',
      response: ''
    }
  },
  methods: {
    postForm: function () {
      this.file = this.$refs.file.files[0]
      const formdata = new FormData()
      formdata.append('file', this.file)
      formdata.append('msg', this.message)
      this.$refs.file.value = ''
      // console.log(formdata.get.value)
      axios.post('posts.php', formdata).then(function (res) {
        if (res.data === false) {
          this.response = 'file uploaded successfully'
        }
      }).catch(e => console.log(e))
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
.btn{
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
