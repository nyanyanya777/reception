<template>
  <body class="body">
    <section>
      <a href="#1">
        <span class="back">戻る</span>
      </a>
      <h2 class="h2 h2long">担当者、またはご用件を選択してください</h2>
      <div class="sec_staffSelect--delArea">
        <ul class="sec_staffSelect--staffUl">
          <li class="sec_staffSelect--staffli">
            <label class="sec_staffSelect--staffLabel">
              <input type="checkbox" class="sec_staffSelect--chkBox" name="color" value="宅配">
              <span class="sec_staffSelect--staffName">宅配</span>
            </label>
          </li>
          <li class="sec_staffSelect--staffli">
            <label class="sec_staffSelect--staffLabel">
              <input type="checkbox" class="sec_staffSelect--chkBox" name="color" value="その他">
              <span class="sec_staffSelect--staffName">その他</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="sec_staffSelect--staffArea">
        <div class="sec_staffSelect--staffInfo">
          <div class="sec_staffSelect--scrollArea">
          <ul class="sec_staffSelect--staffUi" id="list">
              <!--<li v-for="item in items">-->
                <!--<label>-->
                  <!--<input type="checkbox" v-model="item.done" />-->
                  <!--<span v-bind:class="{'done': item.done}">{{item.item_name}}</span>-->
                <!--</label>-->
              <!--</li>-->
          </ul>
          </div>
        </div>
      </div>
      <div class="sec_staffSelect--btnArea">
        <button class="reception_btn">呼び出し</button>
      </div>
    </section>
  </body>
</template>

<script>
  import Vue from 'vue';
  // Ajax通信ライブラリ
  import axios from 'axios';

  window.onload = function() {
    var vm = new Vue({
      el: '#list',
      data: {
        names: []
      },
      template: '<ul id="example-1">\n' +
        '  <li v-for="name in names">\n' +
        '    {{ response }}\n' +
        '  </li>\n' +
        '</ul>',
      methods: {
        getName() {
           axios.get('https://script.google.com/macros/s/AKfycbwQKDeTB6tb-RZizRuF1WX1sR2n0Px-mA337sTyf_n0uCxDSw/exec')
          // thenで成功した場合の処理をかける
            .then(response => {
              Vue.set(this, name, res.data);
              response.data;
              console.log(response);
            })
        }
      }
    })
  };
</script>

<style>
</style>
