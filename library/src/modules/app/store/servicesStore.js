
import ServicesMutations from './servicesMutations'

export default {
  namespaced: true,
  state: {
    lists: [],
    listsLoading: false,
    paymentMethod: null,
    paymentMethodLoading: false,
    invoiceAuthorized: false,
    user: null,
    tier: null,
    customAppParameters: null
  },
  mutations: {
    [ServicesMutations.SET_USER] (state, val) {
      state.user = val
    },
    [ServicesMutations.SET_TIER] (state, val) {
      state.tier = val
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
    [ServicesMutations.SET_INVOICE_AUTHORIZED] (state, val) {
      state.invoiceAuthorized = val
    },
    [ServicesMutations.SET_CUSTOM_APP_PARAMETERS] (state, val) {
      state.customAppParameters = val
    }
  },
  actions: {
    [ServicesMutations.SET_USER] (store, usr) {
      store.commit(ServicesMutations.SET_USER, usr)
    },
    [ServicesMutations.SET_TIER] (store, tier) {
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
    },
    [ServicesMutations.SET_INVOICE_AUTHORIZED] ({ commit, dispatch, state }, value) {
      commit(ServicesMutations.SET_INVOICE_AUTHORIZED, value)
    },
    [ServicesMutations.SET_CUSTOM_APP_PARAMETERS] ({ commit, dispatch, state }, value) {
      commit(ServicesMutations.SET_CUSTOM_APP_PARAMETERS, value)
    }
  },
  getters: {
    lists: state => state.lists,
    listsLoading: state => state.listsLoading,
    paymentMethod: state => state.paymentMethod,
    paymentMethodLoading: state => state.paymentMethodLoading,
    invoiceAuthorized: state => state.invoiceAuthorized,
    user: state => state.user,
    tier: state => state.tier,
    customAppParameters: state => state.customAppParameters
  }
}