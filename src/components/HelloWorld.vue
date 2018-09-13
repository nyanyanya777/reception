<template>
    <body class="body">
    <header class="header">
    </header>
    <section class="sec_main">
      <h1 class="h1">ご来社いただき、ありがとうございます。</br>御用の会社名をタッチしてください。</h1>
      <div class="main_logo">
        <button class="button button-arc ripple">
          <img src="/static/img/arc.png">
        </button>
        <div class="main-boder"></div>
        <router-link to="/jam">
        <button class="button button-jam ripple">
          <img src="/static/img/jam.png">
        </button>
        </router-link>
      </div>
    </section>
    </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
