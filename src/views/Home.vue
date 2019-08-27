<template>
  <div>
    <b-container fluid>
      <b-row align-h="center">
        <b-col lg="2" md="4" class="d-none d-md-block">
          <HomeLeft />
        </b-col>
        <b-col lg="6" md="8" xs="12" class="timeline">
          <Timeline />
        </b-col>
        <b-col lg="2" class="d-none d-lg-block">
          <HomeRight />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HomeLeft from '../components/HomeLeft.vue';
import Timeline from '../components/Timeline.vue';
import HomeRight from '../components/HomeRight.vue';

export default {
  name: 'home',
  components: {
    HomeLeft,
    Timeline,
    HomeRight,
  },
};
</script>

<style>
</style>
