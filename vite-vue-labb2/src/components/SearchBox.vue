<template>
  <div id="searchBox">
    <input
      id="searchField"
      type="text"
      placeholder="Search Team"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <input id="searchButton" type="button" value="Search" @click="onSearch" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue", "search"]);

const onSearch = () => {
  emit("search");
};
</script>

<style scoped>
#searchBox {
  margin: 10px;
}
#searchField {
  margin-right: 10px;
  height: 30px;
  width: 500px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
  padding: 5px;
}
#searchButton {
  height: 30px;
  width: 90px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
}
</style>
