<template>
  <div>
    <Post v-for="post of posts" v-bind:key="post.id" v-bind:post="post" />
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: 'timeline',
  components: {
    Post,
  },
  data() {
    return {
      posts: [
        {
          id: 'post1',
          profileImageUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
          displayName: 'Ayse',
          username: 'ayse',
          timeAgo: '5m',
          text:
            'Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off.',
        },
        {
          id: 'post2',
          profileImageUrl:
            'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
          displayName: 'Ryan Thompson',
          username: 'ryant',
          timeAgo: '8m',
          text:
            'Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. ',
        },
        {
          id: 'post3',
          profileImageUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
          displayName: 'Judith Kennedy',
          username: 'jkenn01',
          timeAgo: '12m',
          text:
            'Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. ',
        },
        {
          id: 'post4',
          profileImageUrl:
            'https://pbs.twimg.com/profile_images/1099856449918943232/hKv3Fddh.jpg',
          displayName: 'Christopher Arnold',
          username: 'chriss',
          timeAgo: '26m',
          text:
            'Alteration possession dispatched collecting instrument travelling he or on. Snug give made at spot or late that mr. ',
        },
        {
          id: 'post5',
          profileImageUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
          displayName: 'Sharlene Hill',
          username: 'hillarious.sharlenee',
          timeAgo: '1h',
          text:
            'Ham her demands removal brought minuter raising invited gay. Contented consisted continual curiosity contained get sex. Forth child dried in in aware do.',
        },
        {
          id: 'post6',
          profileImageUrl:
            'https://images.pexels.com/photos/274595/pexels-photo-274595.jpeg?h=350&auto=compress&cs=tinysrgb',
          displayName: 'Janie Long',
          username: 'jan.the.man',
          timeAgo: '1h',
          text:
            'Defective in do recommend suffering. House it seven in spoil tiled court. Sister others marked fat missed did out use.',
        },
      ],
    };
  },
};
</script>

<style>
</style>
