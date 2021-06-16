const app = new Vue({
  el: "#app",
  data: {
    seen: false,
    message: "写真を撮影しました"
  },
  methods: {
    move() {
      const se = new Audio("shutter.wav");
      se.play();
      this.seen = true;
      setTimeout(() => {
        this.message = "写真を送信中...";
      }, 800);
      setTimeout(() => {
        this.message = "IPアドレス取得中...";
      }, 1600);
      setTimeout(() => {
        this.message = "IPアドレスから住所特定中...";
      }, 2400);
      setTimeout(() => {
        this.message = "情報送信中...";
      }, 3200);
      setTimeout(() => {
        this.message = "サーバーとの通信を確立中...";
      }, 4400);
      setTimeout(() => {
        this.message = "暗号化中...";
      }, 5400);
      setTimeout(() => {
        this.message = "縺帙▽縺槭￥縺｡繧?≧";
      }, 6100);
      setTimeout(() => {
        location.href = "invoice.html";
      }, 7000);
    }
  }
})