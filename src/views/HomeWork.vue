<template>
  <div class="container">
    <div v-for="(subject, key) in subjects" :key="subject+key">
      <SubjectPanel
        :subject="subject"
      />
    </div>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </div>
</template>
<script>
import SubjectPanel from '../components/SubjectPanel.vue'
export default {
  name: 'HomeWork',
  components: {
    SubjectPanel,
  },
  data() {
    return {
      subjects:['语文','数学','英语'],
    };
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-bottom: 55px;
}
</style>