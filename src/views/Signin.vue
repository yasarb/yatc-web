<template>
  <div>
    <b-card bg-variant="light">
      <b-form @submit.prevent="login">
        <b-form-group
          label-cols-lg="3"
          label="Sign in to your account"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group label-cols="3" label="Username:" label-align="center" label-for="username">
            <b-form-input required v-model="form.username" id="username"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="3" label="Password:" label-align="center" label-for="password">
            <!-- eslint-disable-next-line -->
            <b-form-input required v-model="form.password" id="password" type="password"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Sign in</b-button>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import store from '../store/index';
import router from '../router';
import { AUTH_REQUEST } from '../store/actions/auth';

export default {
  name: 'signin',
  data() {
    return {
      form: {
        username: 'username',
        password: 'password',
      },
    };
  },
  methods: {
    login() {
      const { username, password } = this.form;

      store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        router.push('/');
      });
    },
  },
};
</script>

<style>
</style>
