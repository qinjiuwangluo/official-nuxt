<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const inputS = ref('')
const del = () => {
  if (inputS.value) {
    ElMessage({ message: 'Delete success!', type: 'success' })
  }
}
</script>
<template>
  <div class="h-100vh flex flex-col justify-center items-center w-full bg-fff">
    <div class="px-20 w-full">
      <div class="font-600">Input your account id:</div>
      <el-input class="mt-20" v-model="inputS" />
      <el-button type="primary" class="w-full mt-20" @click="del"
        >Delete account</el-button
      >
    </div>
  </div>
</template>
