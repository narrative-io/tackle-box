
import ServicesMutations from './servicesMutations'

export default {
	namespaced: true,
  state: {
		registeredPath: null,
    lists: [],
    listsLoading: false,
    paymentMethod: null,
    paymentMethodLoading: false,
    user: null
  },
  mutations: {
		[ServicesMutations.SET_REGISTERED_PATH] (state, registeredPath) {
			console.log("Mutation: set registered Path")
			console.log(registeredPath)
			state.registeredPath = registeredPath
			console.log(state)
		},
    [ServicesMutations.SET_LISTS] (state, lists) {
			state.lists = lists
    },
    [ServicesMutations.SET_LISTS_LOADING] (state, val) {
      state.listsLoading = val
    },
    [ServicesMutations.SET_PAYMENT_METHOD] (state, paymentMethod) {
      state.paymentMethod = paymentMethod
    },
    [ServicesMutations.SET_PAYMENT_METHOD_LOADING] (state, val) {
      state.paymentMethodLoading = val
    },
    [ServicesMutations.SET_USER] (state, val) {
      state.user = val
    }
  },
  actions: {
		[ServicesMutations.SET_REGISTERED_PATH] (store, registeredPath) {
			console.log('Store: set registered path')
			console.log(registeredPath)
      store.commit(ServicesMutations.SET_REGISTERED_PATH, registeredPath)
    },
    [ServicesMutations.SET_USER] (store, usr) {
      store.commit(ServicesMutations.SET_USER, usr)
    },
    [ServicesMutations.SET_LISTS] ({ commit, dispatch, state }, lists) {
      commit(ServicesMutations.SET_LISTS, lists)
    },
    [ServicesMutations.SET_LISTS_LOADING] ({ commit, dispatch, state }, val) {
      commit(ServicesMutations.SET_LISTS_LOADING, val)
    },
    [ServicesMutations.SET_PAYMENT_METHOD] ({ commit, dispatch, state }, paymentMethod) {
      commit(ServicesMutations.SET_PAYMENT_METHOD, paymentMethod)
    },
    [ServicesMutations.SET_PAYMENT_METHOD_LOADING] ({ commit, dispatch, state }, val) {
      commit(ServicesMutations.SET_PAYMENT_METHOD_LOADING, val)
    }
  },
  getters: {
		registeredPath: state => state.registeredPath,
    lists: state => state.lists,
    listsLoading: state => state.listsLoading,
    paymentMethod: state => state.paymentMethod,
    paymentMethodLoading: state => state.paymentMethodLoading,
    user: state => state.user,
  }
}