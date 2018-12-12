<template>
  <div>
    <h1>Register</h1>
    <p>{{hello}}</p>
    <h1 v-if="running">
      <strong></strong>
    </h1>

    <input type="email" name="email" placeholder="Enter your email!" v-model="email">
    <br>
    <input type="password" name="password" placeholder="Enter your password!" v-model="password">
    <br>
    <button @click="register">Register!</button>
  </div>
</template>

<script>
import authService from "@/services/auth";
console.log(authService);

export default {
  name: "Register",
  data() {
    return {
      hello: "Hellow!",
      email: "",
      password: "",
      running: false
    };
  },
  methods: {
    async register() {
      this.running = true;
      const response = await authService.register({
        email: this.email,
        password: this.password
      });
      console.log(response);
      this.running = false;
    }
  }
};
</script>
