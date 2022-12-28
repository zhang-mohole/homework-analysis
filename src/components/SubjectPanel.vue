<template>
  <div>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      {{ subject }}
    </van-divider>

    <van-field
      v-model="timeUsed"
      name="用时"
      label="用时"
      placeholder="请填写完成用时"
      :rules="[{ required: true, message: '请填写完成时长' }]"
    />

    <van-cell>
      <van-checkbox-group v-model="typeList" direction="horizontal">
        <van-checkbox name="类型1">类型1</van-checkbox>
        <van-checkbox name="类型2">类型2</van-checkbox>
        <van-checkbox name="类型3">类型3</van-checkbox>
        <van-checkbox name="类型4">类型4</van-checkbox>
      </van-checkbox-group>
    </van-cell>

    <div 
      class="scores" 
      v-for="(type, key) in results"
      :key="key">

      <div v-if="type.checked">
        <p>类型{{ key + 1 }}</p>
        <van-field
          v-model="type.totalScore"
          name="总分"
          label="总分"
          placeholder="请填写该类型总分"
          :rules="[{ required: true, message: '请填写该类型总分' }]"
        />
        <van-field
          v-model="type.myScore"
          name="得分"
          label="得分"
          placeholder="请填写该类型得分"
          :rules="[{ required: true, message: '请填写该类型得分' }]"
        />
      </div>
      
    </div>

  </div>
</template>
<script>
// import {Picker} from 'vant'
export default {
  name: 'SubjectPanel',
  props:{ 
    subject: String
  },
  data() {
    return {
      typeList: [false, false, false, false],
      results: [
        {
          checked: false,
          totalScore: null,
          myScore:null
        },
        {
          checked: false,
          totalScore: null,
          myScore:null
        },
        {
          checked: false,
          totalScore: null,
          myScore:null
        },
        {
          checked: false,
          totalScore: null,
          myScore:null
        }
      ],
      timeUsed: null,
      totalScore: null,
      myScore: null
    };
  },
  watch: {
    typeList() {
      for (let i = 0; i<4; i++) {
        this.results[i].checked = false
      }
      this.typeList.forEach((type)=>{
        switch (type) {
          case '类型1': this.results[0].checked = true; break;
          case '类型2': this.results[1].checked = true; break;
          case '类型3': this.results[2].checked = true; break;
          case '类型4': this.results[3].checked = true; break;
        }
      })
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>