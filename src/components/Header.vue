<template>
  <div class="container">
    <van-nav-bar title=title left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      title:'每日记录',
    };
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>