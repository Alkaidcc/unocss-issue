<script setup>
import {ref} from 'vue';
import {classNameList} from './constants';
const iconList = ref(classNameList);
</script>

<template>
  <div>
    <div v-for="(i,index) in iconList" :class="i" :key="index"></div>
  </div>
</template>