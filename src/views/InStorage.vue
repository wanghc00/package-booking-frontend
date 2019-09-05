<template>
  <div>
    <h1>包裹入库</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'billNo',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        />
      </a-form-item>

      <a-form-item label="收件人：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'receivePerson',
          {rules: [{ required: true, message: '请输入收件人' }]}
        ]"
        />
      </a-form-item>

      <a-form-item label="电话：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'telephone',
          {rules: [{ required: true, message: '请输入电话' }]}
        ]"
        />
      </a-form-item>

      <a-form-item label="重量：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'packageWeight',
          {rules: [{ required: true, message: '请输入重量' }]}
        ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pacakgeInfo: {
        billNo: "",
        receivePerson: "",
        telephone: "",
        packageWeight: ""
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
          this.pacakgeInfo.billNo = values.billNo;
          this.pacakgeInfo.receivePerson = values.receivePerson;
          this.pacakgeInfo.telephone = values.telephone;
          this.pacakgeInfo.packageWeight = values.packageWeight;
          this.$store.dispatch("inStorage", this.pacakgeInfo);
          //console.log('Received values of form: ', values);
        }
      });
    }
  }
};
</script>