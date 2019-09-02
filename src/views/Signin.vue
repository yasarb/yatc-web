<template>
  <b-container fluid>
    <b-row align-h="center" align-items="center">
      <b-col cols="4">
        <b-row>
          <b-col cols="2">
            <label for="username">Username</label>
          </b-col>
          <b-col cols="4">
            <b-form-input size="lg" type="text" id="username" />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="2">
            <label for="password">Password</label>
          </b-col>
          <b-col cols="4">
            <b-form-input size="lg" type="password" id="password" />
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col cols="4">
            <b-button pill variant="primary">Sign in</b-button>
          </b-col>
          <b-col cols="4">
            <b-link to="signup">Continue to sign up</b-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'signin',
};
</script>

<style>
</style>
