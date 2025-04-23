<template>
    <div class="captcha-box" @click="generateCode">
      {{ code }}
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineEmits } from 'vue'
  
  const emit = defineEmits(['update'])
  const code = ref('')
  
  const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    code.value = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    emit('update', code.value)
  }
  
  onMounted(() => {
    generateCode()
  })
  
  defineExpose({ generateCode })
  </script>
  
  <style scoped>
  .captcha-box {
    background: #f2f2f2;
    font-family: monospace;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
  }
  </style>

  