<template>
  <nav class="card border-1 0-hidden fixed-top navbar-expand-md">
<div class="container">
    <ul class="nav justify-content-end">
    <ul class="nav mr-auto ml-3">
      <li class="nav-item">
        <a class="nav-link active brand" href="">Instagram</a>
      </li>
      <li class="nav-item mt-3">
      <div><a href="logout.php" class="btn btn-outline-secondary btn-sm">LogOut</a></div>
      </li>
    </ul>
      <li class="nav-item">
        <a class="nav-link active d-icons" href="darshboard.php"><i class="fa fa-home"></i></a>
      </li>
      <li class="nav-item mr-4">
        <a class="nav-link d-icons" href="#"><i class="fa fa-comment-alt-dots"></i></a>
      </li>
      <li class="nav-item mt-2 mr-2">
        <!-- </div> -->
      </li>
    </ul>
</div>

</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  a.brand{
    font-size: 30px;
    font-weight: 500;
    font-family: Brush Script MT;
    text-decoration: none;
    color: black;
    /* font-size: 50px; */
}
a.d-icons{
    font-size: 25px;
    /* font-weight: 500; */
    /* font-family: Brush Script MT; */
    text-decoration: none;
    color: black;
}
</style>
