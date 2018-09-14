<template>
  <body class="body">
  <div class="inner">
    <a href="#1">
      <span class="back">戻る</span>
    </a>
    <section date-role="page" class="sec_staffSelect page page3">
      <div class="circle_manage">
        <div class="circle"></div>
        <div class="circle_active"></div>
        <div class="circle"></div>
      </div>
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
      <section id="qiita-posts"></section>
      <div class="sec_staffSelect--staffArea">
        <div class="sec_staffSelect--staffInfo">
          <div class="sec_staffSelect--scrollArea">
            <img src="common/img/scroll.png" class="sec_staffSelect--scrollImg">Scroll</div>
          <ul class="sec_staffSelect--staffUi">
          </ul>
        </div>
      </div>
      <div class="sec_staffSelect--btnArea">
        <button class="reception_btn">呼び出し</button>
      </div>
    </section>
  </div>
  </body>
</template>

<script>

</script>

<style>
</style>
