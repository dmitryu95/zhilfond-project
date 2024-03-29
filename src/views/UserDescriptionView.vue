<template>
  <div class="page__user">
    <div  v-if="selectedUser !== ''"
        class="user">
      <img class="user__image"
           src="@/assets/default-user-img.png"
           alt="user img">
      <div class="user__description">
        <h3 class="user__name bold">{{selectedUser.name}}</h3>
        <div class="user__text-block">
          <p class="user__email bold">email: </p>
          <span class="text"> {{selectedUser.email}} </span>
        </div>
        <div class="user__text-block">
          <p class="user__phone bold">phone: </p>
          <span class="text"> {{selectedUser.phone}} </span>
        </div>
        <p class="user__about bold">О себе:</p>
        <p class="user__about text">{{selectedUser.company.catchPhrase}}</p>
      </div>
    </div>
    <div v-else
         class="user__else">
      <p class="user__else text">{{store.state.statusLoadingCard}}</p>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from "vuex";
  import {computed} from "vue";

  const store = useStore();

  const selectedUser = computed(() => store.getters.getUser)

</script>

<style lang="scss" scoped>
.page__user {
  width: 975px;
  box-sizing: border-box;
  border-left: 1px solid #DEDEDD;
}

.bold {
  font-weight: 600;
}

.user {
  margin: 30px 30px 0 20px;
  display: flex;
  justify-content: space-between;

  &__text-block{
    display: flex;
    align-items: center;

    & > span {
      margin-left: 10px;
      height: 15px
    }
  }
  &__else {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &__image{
    width: 424px;
    height: 286px;
  }
  &__description{
    width: 439px;
    height: 284px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: initial;
  }
  &__name{
    margin: 0;
    color: black;
    font-size: 16px;
    line-height: 22px;
  }
  &__email{
    margin: 10px 0;
    line-height: 20px;
    color: #333333;
    font-size: 14px;
  }
  &__phone{
    margin: 0;
    line-height: 20px;
    color: #333333;
    font-size: 14px;
  }
  &__about{
    margin: 20px 0 25px 0;
  }
}

.text {
  margin-top: 0;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #76787D;
}

</style>
