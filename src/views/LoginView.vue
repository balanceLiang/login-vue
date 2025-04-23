<template>
    <div class="login-wrapper">
      <!-- Header -->
      <header class="header">
        <img src="../assets/8way.svg" alt="Logo" class="logo" />
      </header>
  
      <!-- Login Area -->
      <div class="login-page">
        <form class="login-form" @submit.prevent="onSubmit">
          <h1 class="title">八方點後台管理系統</h1>
          <input v-model="username" placeholder="帳號" required />
  
          <div class="password-field">
            <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="密碼" required />
            <button type="button" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
  
          <div class="captcha-row">
            <Captcha ref="captchaRef" @update="captcha = $event" />
            <input v-model="captchaInput" placeholder="請輸入驗證碼" required />
          </div>
  
          <div class="error-msg" v-if="errorMessage">{{ errorMessage }}</div>
  
          <button type="submit">登入</button>
        </form>
      </div>
  
      <!-- Footer -->
      <footer class="footer">
        <p>© 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  
  <script setup>
    import { ref } from 'vue'
    import Captcha from '../components/Captcha.vue'
    
    const username = ref('')
    const password = ref('')
    const captchaInput = ref('')
    const captcha = ref('')
    const errorMessage = ref('')
    const showPassword = ref(false)
    
    const captchaRef = ref()
    
    const onSubmit = () => {
        console.log("輸入帳號" + username.value);
        console.log("輸入密碼" + password.value);
        if (captchaInput.value.toLowerCase() !== captcha.value.toLowerCase()) {
            errorMessage.value = '驗證碼錯誤，請重新輸入'
            captchaInput.value = ''
            captchaRef.value.generateCode()
            return
        }
    
        errorMessage.value = ''
        alert('✅ 驗證成功！')
    }
  </script>
  
  <style scoped>
   .login-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('../assets/bk.png');
  background-size: cover;
  background-position: center;
  font-family: 'Segoe UI', sans-serif;
}

/* Header */
.header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: #f2f2f2;
}
.logo {
  height: 48px;
}

/* Login Section */

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.login-page {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5%;
}

.login-form {
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #333;
}

/* Inputs */
.login-form input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
}
.login-form input::placeholder {
  color: #999;
}
.login-form input:focus {
  outline: none;
  border-color: #1976d2;
}

/* Password Field */
.password-field {
  position: relative;
  display: flex;
  align-items: center;
}
.password-field input {
  flex: 1;
}
.password-field button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #666;
  font-size: 18px;
  cursor: pointer;
}

/* Captcha */
.captcha-row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.captcha-row input {
  flex: 1;
}

/* Submit Button */
button[type="submit"] {
  padding: 12px;
  border: none;
  background-color: #1976d2;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}
button[type="submit"]:hover {
  background-color: #125aa3;
}

/* Error */
.error-msg {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
}

/* Footer */
.footer {
  height: 60px;
  background-color: #f2f2f2;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

/* RWD */
@media (max-width: 768px) {
  .login-page {
    justify-content: center;
    padding: 0 16px;
  }

  .login-form {
    width: 100%;
    padding: 24px;
  }

  .logo {
    height: 36px;
  }

  .footer {
    font-size: 12px;
    text-align: center;
    padding: 10px;
  }
}

  </style>
  