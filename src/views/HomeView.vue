<template>
  <div class="landing-page">
  <div class="content">
    <h1>Welcome to my landing page!</h1>
    <p>This is a counter app made with vuex.</p>
    <button @click="goCount" class="btn">Go to Count Page</button>
  </div>
</div>
</template>

<script>
import router from '../router'
export default {
  name: 'HomeView',
  metaInfo: {
    title: 'My Landing Page'
  },
  methods: {
    goCount() {
      router.push('/counter')
    }
  }
}
</script>

<style>
.landing-page{
  background-image: url(../assets/numbers.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.5);
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
.content h1{
  color: #fff;
}
.content p{
  color: #fff;
  font-size: 2rem;
}
.btn{
  background: #191919;
  padding: 22px 18px;
  text-align: center;
  margin: 0 10px;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  outline: none;  
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-size: 18px;
  font-weight: 800;
}
.btn:hover{
  background: #fff;
  color: #191919;
}
</style>
