import axios from "axios";
const URLbase = process.env.VUE_APP_BDBASE;

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
      state.requests = payload;
    },
  },
  actions: {
    async contactCoach(context, payload) {
      const newRequest = {
        userEmail: payload.email,
        message: payload.message,
      };

      const response = await axios.post(
        `${URLbase}/requests/${payload.coachId}.json`,
        {
          newRequest,
        }
      );

      if (response.status !== 200) {
        const error = new Error(response.message || "Failed to send request.");
        throw error;
      }

      newRequest.id = response.name;
      newRequest.coachId = payload.coachId;

      context.commit("addRequest", newRequest);
    },
    async fetchRequests(context) {
      const coachId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const response = await axios.get(
        `${URLbase}/requests/${coachId}.json?auth=${token}`
      );

      const responseData = await response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message || "Failed to fetch requests!"
        );
        throw error;
      }

      const requests = [];

      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].newRequest.userEmail,
          message: responseData[key].newRequest.message,
        };
        requests.push(request);
      }
      context.commit("setRequests", requests);
    },
  },
  getters: {
    requests(state, _, _2, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter((r) => r.coachId === coachId);
    },
    hasRequests(_, getters) {
      return getters.requests && getters.requests.length > 0;
    },
  },
};
