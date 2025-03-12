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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
#searchButton {
  height: 30px;
  width: 90px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#searchButton:hover {
  cursor: pointer;
  background-color: #c0c5ce;
  border: 1px solid #343d46;
  color: #343d46;
}

@media screen and (max-width: 600px) {
  #searchField {
    width: 280px;
    margin: 0;
  }
  #searchButton {
    width: 70px;
  }
}
</style>
