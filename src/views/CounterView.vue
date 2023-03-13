<template>
  <div>
    <h1>Counter: {{ $store.getters.count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model.number="value" />
    <button @click="setValue(value)">Set Value</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import useCounter from '@/composables/useCounter';

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
};
</script>
