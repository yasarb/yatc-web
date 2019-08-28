<template>
  <div>
    <b-card class="post-card">
      <b-row align-h="start">
        <b-col cols="3">
          <img src="https://randomuser.me/api/portraits/women/47.jpg" />
        </b-col>
        <b-col cols="9">
          <b-row>
            <b>Display Name&nbsp;&nbsp;</b>
            <span>@username&nbsp;&bull;&nbsp;</span>
            <span>1h</span>
          </b-row>
          <b-row>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus ac quam quis sem pretium rutrum ultricies fringilla quam.
              Suspendisse finibus amet.
            </p>
          </b-row>
          <b-row align-h="end">
            <b-link href="#">Reply&nbsp;&bull;&nbsp;</b-link>
            <b-link href="#">Repost&nbsp;&bull;&nbsp;</b-link>
            <b-link href="#">Favorite&nbsp;&bull;&nbsp;</b-link>
            <b-link href="#">More</b-link>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'post',
};
</script>

<style>
.post-card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  margin-bottom: -1px;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
