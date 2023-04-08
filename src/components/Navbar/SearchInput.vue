<template lang="">
  <form class="search-form" @submit.prevent="onSubmitLocation">
    <button class="search-submit-button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <input 
      class="search-input"
      :value="props.modelValue"
      type="text"
      @input="setUserLocation"
      :placeholder="'Enter your city'"
    />
  </form>
</template>

<script setup>
  import { useWeatherStore } from '@/stores/weatherStore'
  import { storeToRefs } from 'pinia';
  const store = useWeatherStore()
  const { onSubmitLocation } = store
  const props = defineProps({
    modelValue: String
  })
  const emit = defineEmits(['update:modelValue'])
  const setUserLocation = (event) => emit('update:modelValue', event.target.value)
</script>

<style lang="scss">
  @import '@/assets/SearchInput.scss';
</style>