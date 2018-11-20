import Vue from 'vue';
// Ajax通信ライブラリ
import axios from 'axios';

// Json取得のベースURL
const URL_BASE = '/api/search/';

// Vue.js のインスタンス
module.exports = new Vue({
  data: {
    // Jsonデータ格納用
    search_list: []
  },
  methods: {
    getName() {
      koharu = axios.get('https://script.google.com/macros/s/AKfycbwQKDeTB6tb-RZizRuF1WX1sR2n0Px-mA337sTyf_n0uCxDSw/exec')
      // thenで成功した場合の処理をかける
        .then(response => {
          response.data;
          console.log(koharu);
        })
    }
  }
});
