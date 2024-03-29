import { createStore } from 'vuex'
import { getUserByName, getUsersById } from "@/api/users";

export default createStore({
  state: {
    userArr: '',
    selectedUser: '',
    statusLoading: 'начните поиск ',
    statusLoadingCard: 'Выберите сотрудника, чтобы посмотреть его профиль'
  },
  getters: {
    getUsers(state) {
      return state.userArr
    },
    getUser(state) {
      return state.selectedUser
    }
  },
  mutations: {
    setUsers(state, users) {
        state.userArr = users.data
    },
    clearList(state) {
        state.userArr = ''
    },
    clearCard(state) {
        state.selectedUser = ''
    },
    setSelectedUser(state, user) {
        state.selectedUser = user.data[0]
    },
    setStatusLoading(state, loading) {
        state.statusLoading = loading
    },
    setLoadingCard(state, loading) {
        state.statusLoading = loading
    }
  },
  actions: {
      fetchUsers({ commit }, userDate) {
          const input = userDate.value.trim();

          if (!input) {
              commit('clearList');
              alert("Поле ввода не должно быть пустым");
              commit('setStatusLoading', "Не найдено");
              return;
          }

          const searchFunction = /\d/.test(input) ? getUsersById : getUserByName;

          commit('setStatusLoading', "*** Поиск ***");

          searchFunction(input)
              .then(users => {
                  commit('setUsers', users);
                  if (users.data && users.data.length !== 0) {
                      commit('setStatusLoading', "");
                  } else {
                      commit('setStatusLoading', "Не найдено");
                  }
              })
              .catch(err => {
                  alert(`Ошибка: ${err.message}`);
                  commit('setUsers', '');
              });
      },
        fetchUser({commit}, id) {
            if(id > 0){
                getUsersById(id)
                    .then( user => {
                        commit("setLoadingCard", 'Выберите сотрудника, чтобы посмотреть его профиль')
                        commit('setSelectedUser', user)
                    })
                    .catch(err => {
                        alert(`ошибка :${err.message}`)
                    })
            }
        }
  }
})
