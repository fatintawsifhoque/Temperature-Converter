<template>
  <section class="h-screen w-screen bg-cyan-100 flex items-center justify-center gap-10">
    <div>
      <label for="celsius" class="text-lg font-bold">Celsius:</label> <br> 
      <input type="number" id="celsius" class="border h-10 w-40 outline-0 pl-2 rounded-lg" v-model="celsius">
    </div>
    <ArrowLeftRight />
    <div>
      <label for="fahrenheit" class="text-lg font-bold">Fahrenheit:</label> <br> 
      <input type="number" id="fahrenheit" class="border h-10 w-40 outline-0 pl-2 rounded-lg" v-model="fahrenheit">
    </div>
  </section>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { ArrowLeftRight } from '@lucide/vue';

const celsius = ref(null);
const fahrenheit = ref(null);
const isUpdating = ref(false);

watch(celsius, (newVal) => {
  if (isUpdating.value) return;
  
  if (!newVal && newVal !== 0) {
    fahrenheit.value = null;
    return;
  }

  isUpdating.value = true;
  fahrenheit.value = (newVal * 9/5) + 32;
  
  nextTick(() => {
    isUpdating.value = false;
  });
});

watch(fahrenheit, (newVal) => {
  if (isUpdating.value) return;

  if (!newVal && newVal !== 0) {
    celsius.value = null;
    return;
  }

  isUpdating.value = true;
  celsius.value = (newVal - 32) * 5/9;
  
  nextTick(() => {
    isUpdating.value = false;
  });
});
</script>

<style scoped>
</style>