<template>
  <body class="body">
  <section>
    <header class="header">
      <h2 class="h2 h2long">担当者、またはご用件を選択して
        <br>「呼び出す」をタッチしてください</h2>
      <div class="boder"></div>
    </header>
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
    <div id="names">
    </div>
  </section>
  </body>
</template>

<script>
import Vue from 'vue'
// Ajax通信ライブラリ
import axios from 'axios'

window.onload = function () {
  new Vue({
    el: '#names',
    data: {
      info: {
        names: [],
        mentions: [],
        isChecked: false
      },
      checkedNames: [],
      checkedName: [],
      display: false
    },
    template:
        '<div>' +
            '<div class="sec_staffSelect">' +
                '<div class="sec_staffSelect--staffArea">' +
                    '<div class="sec_staffSelect--staffInfo">' +
                        '<ul class="sec_staffSelect--staffUi">' +
                            '<li class="sec_staffSelect--staffli" v-for="(name,index) in info.names">' +
                                '<label class="sec_staffSelect--staffLabel" v-bind:class="{ done: checkedNames.indexOf(name) >= 0 }">' +
                                    '<input type="checkbox" class="sec_staffSelect--chkBox" name="color" :value="name" :id="name" v-model="checkedNames">' +
                                        '<span class="sec_staffSelect--staffName">{{name}}</span>' +
                                '</label>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '<div class="footer">' +
            '<div class="sec_staffSelect--btnArea">' +
                '<button class="reception_btn">' +
                    '<i class="fas fa-bell bell"></i>' +
                        '<br>' +
                    '<p class="reception_btn" v-bind:class="{ active: checkedNames.length > 0 }" >呼び出す</p>' +
                '</button>' +
            '</div>' +
            '<div class="circle_manage">' +
                '<div class="circle_active"></div>' +
                '<div class="circle"></div>' +
            '</div>' +
            '<p class="text">選択を取り消すときは、名前を再度タッチしてください。</p>' +
            '<a href="/reception_develop">' +
                '<span class="back arc">戻る</span>' +
            '</a>' +
        '</div>',
    created: function () {
      const self = this
      let i = 0
      return axios
        .get(
          'https://script.google.com/macros/s/AKfycbwQKDeTB6tb-RZizRuF1WX1sR2n0Px-mA337sTyf_n0uCxDSw/exec'
        )
        .then(response => {
          for (let i = 0, len = response.data.length; i < len; ++i) {
            this.info.names.push(response.data[i][0])
            this.info.mentions.push(response.data[i][1])
          }
        })
    },
    // methods: {
    //   color: function () {
    //     if (this.checkedNames.length > 0) {
    //       return (this.display = true)
    //     }
    //   }
    // }
  })
}
</script>
