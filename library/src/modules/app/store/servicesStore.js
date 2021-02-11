
import ServicesMutations from './servicesMutations'

export default {
	namespaced: true,
  state: {
    lists: [],
    listsLoading: false,
    paymentMethod: null,
    paymentMethodLoading: false,
		user: null,
		tier: null
  },
  mutations: {
		[ServicesMutations.SET_USER] (state, val) {
      state.user = val
		},
		[ServicesMutations.SET_TIER] (state, val) {
			state.tier = val
			console.log("MUTATION TIER")
			console.log(val)
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
    }
  },
  actions: {
    [ServicesMutations.SET_USER] (store, usr) {
      store.commit(ServicesMutations.SET_USER, usr)
		},
		[ServicesMutations.SET_TIER] (store, tier) {
			console.log("ACTION TIER")
			console.log(tier)
      store.commit(ServicesMutations.SET_TIER, tier)
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
    lists: state => state.lists,
    listsLoading: state => state.listsLoading,
    paymentMethod: state => state.paymentMethod,
    paymentMethodLoading: state => state.paymentMethodLoading,
		user: state => state.user,
		tier: state => state.tier
  }
}