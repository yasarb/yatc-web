<template>
  <div>
    <b-card class="post-card">
      <b-row align-h="start">
        <b-col cols="2">
          <img class="profilePhoto" :src="post.profileImageUrl" />
        </b-col>
        <b-col cols="10">
          <b-row>
            <b>{{ post.displayName }}&nbsp;&nbsp;</b>
            <span>{{ post.username }}&nbsp;&bull;&nbsp;</span>
            <span>{{ post.timeAgo }}</span>
          </b-row>
          <b-row>
            <br />
            <p>{{ post.text }}</p>
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
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
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

.profilePhoto {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
