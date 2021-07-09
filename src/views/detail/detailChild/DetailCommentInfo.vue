<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="commen-top">
      <div class="top-left">用户评价</div>
      <div class="top-right">更多</div>
    </div>
    <div class="commen-middle">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="commen-bottom">
      <p>{{ commentInfo.content }}</p>
      <div class="commen-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="commen-img">
        <img
          v-for="item in commentInfo.images"
          :key="item.index"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.detail-comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.commen-top {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.top-left {
  float: left;
  font-size: 15px;
}
.top-right {
  float: right;
  font-size: 13px;
  margin-right: 10px;
}
.commen-middle {
  padding: 10px 0;
}
.commen-middle img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}
.commen-middle span {
  font-size: 15px;
  margin-left: 8px;
}
.commen-bottom p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.commen-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.commen-other .date {
  margin-right: 8px;
}
.commen-img {
  margin-top: 10px;
}
.commen-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
