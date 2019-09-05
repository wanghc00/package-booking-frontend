<template>
  <div>
    <h1>预约取件</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'billNo',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        />
      </a-form-item>

      <a-form-item label="取件时间：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'subscribeTime',
          {rules: [{ required: true, message: '请输入取件时间' }]}
        ]"
        type="datetime-local"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">预约</a-button>
        <a-button type="primary" html-type="reset">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      subscribePackage: {
        billNo: "",
        subscribeTime: ""
      },
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.subscribePackage.billNo = values.billNo;
          this.subscribePackage.subscribeTime = values.subscribeTime;
          console.log(values);
          console.log(values.subscribeTime);
          console.log(this.subscribePackage);
          this.$store.dispatch("subscribePackage", this.subscribePackage);
          //console.log('Received values of form: ', values);
        }
      });
    }
  }
};
</script>