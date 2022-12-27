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
      placeholder="用时"
      :rules="[{ required: true, message: '请填写完成时长' }]"
    />

    <van-checkbox-group v-model="typeList" direction="horizontal">
      <van-checkbox name="类型1">类型1</van-checkbox>
      <van-checkbox name="类型2">类型2</van-checkbox>
      <van-checkbox name="类型3">类型3</van-checkbox>
      <van-checkbox name="类型4">类型4</van-checkbox>
    </van-checkbox-group>

    <div 
      class="scores" 
      v-for="(type, key) in typeList" 
      :key="type+key">

      <p>{{ type }}</p>
      <van-field
        v-model="totalScore"
        name="总分"
        label="总分"
        placeholder="总分"
        :rules="[{ required: true, message: '请填写该类型总分' }]"
      />
      <van-field
        v-model="myScore"
        name="得分"
        label="得分"
        placeholder="得分"
        :rules="[{ required: true, message: '请填写该类型得分' }]"
      />
    </div>

    <!-- <van-form>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="选择器"
        placeholder="选择作业类型"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field
        v-model="totalScore"
        name="总分"
        label="总分"
        placeholder="总分"
        :rules="[{ required: true, message: '请填写该类型总分' }]"
      />
      <van-field
        v-model="myScore"
        name="得分"
        label="得分"
        placeholder="得分"
        :rules="[{ required: true, message: '请填写该类型得分' }]"
      />
    </van-form> -->
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
      value: '',
      typeList: [],
      columns: ['类型1', '类型2', '类型3', '类型4'],
      showPicker: false,
      timeUsed: -1,
      totalScore: -1,
      myScore: -1
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>