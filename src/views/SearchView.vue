<template>
  <div class="page__search">
    <form class="search-form" @submit.prevent>
      <h3 class="search-form__find-title">Поиск сотрудников</h3>
      <input v-model="userName"
             class="search-form__input"
             placeholder="Введите Id или имя "
             @keyup.enter="getUserName">
      <h3 class="search-form__result-title">Результаты</h3>
      <ul  v-if="userArr.length"
          class="search-form__list">
          <li v-for="user in userArr"
              :key="user.id"
              class="search-form__item"
              @click="setSelectedId(user.id)">
            <img class="user-card__image_sm"
                 src="@/assets/default-image_sm.png"
                 alt="user pre img" >
            <div class="user-card__text_sm">
              <p class="user-card__name_sm">
                {{ user.username }}
              </p>
              <p class="user-card__email_sm">
                {{ user.email}}
              </p>
            </div>
          </li>
      </ul>
      <span v-else
          class="user-card__empty-sm">
        {{ store.state.statusLoading }}
      </span>
    </form>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const userName = ref('')

  const getUserName = () => {
    store.commit('setStatusLoading', "*** поиск ***")
    store.dispatch('fetchUsers', userName);
  }

  const userArr = computed(() => store.getters.getUsers)

  watch(userName, (value) => {
    if(value === '') {
      store.commit('clearList')
      store.commit('clearCard')
      store.commit('setStatusLoading', "начните поиск ")
    }
  })

  const setSelectedId = (id) => {
    store.commit("setLoadingCard", '*** Загрузка карточки ***')
    store.dispatch('fetchUser', id)
  }

</script>

<style lang="scss" scoped>

.page__search {
  width: 291px;
  box-sizing: border-box;
}

.search-form {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 23px;
  margin-top: 5px;

  &__input {
    width: 240px;
    height: 46px;
    border: 1.5px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: rgba(118, 120, 125, 1);
  }

  &__list {
    display: flex;
    list-style-type: none;
    height: 400px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    overflow-y: auto;
  }

  &__item {
    width: 242px;
    display: flex;
    min-height: 70px;
    height: 70px;
    overflow: hidden;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1);
    margin-bottom: 18px;
  }
}

.user-card{

  &__text_sm {
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: baseline;
    padding: 15px;
  }

  &__image_sm {
    width: 70px;
    height: 70px;
  }

  &__name_sm {
    padding: 0 0 2px 0;
    margin: 0;
    line-height: 20px;
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }

  &__email_sm {
    padding: 0;
    margin: 0;
    line-height: 20px;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    width: 145px;
    overflow: hidden;
    text-align: left;
  }

  &__empty-sm {
    line-height: 17px;
    font-size: 14px;
    font-weight: 400;
    color: #76787D
  }
}

</style>
