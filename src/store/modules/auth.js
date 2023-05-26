import axios from "axios";
const APIkey = process.env.VUE_APP_APIKEY;

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      (state.token = payload.token),
        (state.userId = payload.userId),
        (state.tokenExpiration = payload.tokenExpiration);
    },
  },
  actions: {
    async login(context, payload) {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIkey}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      );

      const responseData = await response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message || "Failed to authenticate!"
        );
        throw error;
      }

      console.log(responseData);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    async signup(context, payload) {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIkey}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      );

      const responseData = await response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message || "Failed to authenticate!"
        );
        throw error;
      }

      console.log(responseData);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state){
        return state.token;
    }
  },
};
