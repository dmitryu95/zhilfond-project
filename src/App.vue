<template>
  <div class="main-container">
    <header>
      <h1>Жилфонд</h1>
      <p>Пользователь</p>
    </header>
    <div class="wrapper">
      <search-view/>
      <user-description-view/>
    </div>
  </div>
</template>

<script setup>
import SearchView from "@/views/SearchView.vue";
import UserDescriptionView from "@/views/UserDescriptionView.vue";
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;

  & > p {
    color: rgb(51, 51, 51);
    line-height: 19.5px;
    font-weight: 400;
    font-size: 16px;
  }
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  color: rgb(227, 31, 36);
}

h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: rgba(51, 51, 51, 1);
  margin: 22px 0 22px 0;
}

.main-container {
  width: 1266px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  width: 1266px;
  height: 589px;
  border: 1px solid rgba(0, 0, 0, .1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1)
}

</style>


