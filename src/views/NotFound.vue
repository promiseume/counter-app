<template>
  <div class="pageError">
    <div class="error-container">
      <h1>Opps! Sorry</h1>
      <h3>
        This page you are looking for does not exist or might have been removed
      </h3>
      <div class="error-btn">
        <button class="go-back">Go back</button>
        <button class="go-back">Go Home</button>
      </div>
    </div>
  </div>
</template>
<style>
.pageError {
  background-image: url(../assets/404.png);
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
}
.error-container {
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  padding: 5rem;
}
.pageError h1 {
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: Graphik, sans-serif;
  color: #191919;
  font-size: 5rem;
  line-height: 70px;
  font-weight: 700;
  color: #191919;
}
.pageError h3{
  color: #2c2b2b;
  font-size:1.5rem;
}
.error-btn {
  display: flex;
  align-items: center;
}
.go-back {
  background: #191919;
  padding: 22px 18px;
  text-align: center;
  margin: 0 10px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.go-back:hover {
  background: #fff;
  color: #191919;
}
@media (max-width: 961px) {
  .error-container {
    width: 100%;
    padding: 1rem;
    margin-left: 0;
  }
  h1 {
    margin-top: 0px;
    font-size: 20px;
  }
  h3 {
    font-size: 10px;
  }
  .go-back {
    width: 100%;
    padding: 10px;
    text-align: center;
    margin: 10px;
  }
}
</style>
