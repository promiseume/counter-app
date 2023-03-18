<template>
  <section class="counter-section">
    <div class="header-count">
    <button @click="goBack" class="back-btn">&#8826; go back</button>
    <h1>Counter: {{ $store.getters.count }}</h1>
  </div>
    <div class="form">
    <input type="number" v-model.number="value" />
    <button @click="setValue(value)">Set Value</button>
  </div>
  <div class="task-button">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</section>
</template>

<script>
import { ref } from 'vue';
import useCounter from '@/composables/useCounter';
import router from '../router'
export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    const value = ref(0);

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value,
    };
  },
  methods: {
    goBack() {
      router.go(-1)
    }}
};
</script>
<style>
.counter-section{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 20px;
}
.header-count{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
}
.back-btn{
  background: none;
  font-size: 20px;
  margin: 0;
  color: #191919;
  border: none;
}
.back-btn:hover{
  cursor: pointer;
  color: #a6abe1;
}
 .counter-section h1{
  font-size: 20px;
  color: #191919;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.form input{
  width: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 30px;
  margin-right: 2px;
  outline: none;
}
.form button{
  background: #191919;
  padding: 10px 18px;
  text-align: center;
  margin: 0;
  border-radius: 5px;
  color: #ffffff;
  border: none;
}
.task-button{
  display: flex;
  justify-content: center;
  align-items: center;
}
.task-button button{
  background: #191919;
  padding: 10px 18px;
  text-align: center;
  margin: 0 10px;
  border-radius: 5px;
  color: #ffffff;
  border: none;
}
</style>