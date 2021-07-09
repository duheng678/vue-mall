<template>
  <div class="detail-params" v-if="Object.keys(params).length !== 0">
    <table
      v-for="(table, index) in params.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(info, index) in params.infos" :key="index">
        <td class="params-key">{{ info.key }}</td>
        <td class="params-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="params.image.length !== 0">
      <img :src="params.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.detail-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-params table {
  width: 100%;
  border-collapse: collapse;
}

.detail-params table tr {
  height: 42px;
}
.detail-params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.params-key {
  width: 95px;
}
.params-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>
