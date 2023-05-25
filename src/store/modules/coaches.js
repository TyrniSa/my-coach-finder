import axios from "axios";
const URLbase = process.env.VUE_APP_BDBASE;

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
  },
  actions: {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId;
      const coachData = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas,
      };

      try {
        const response = await axios.put(`${URLbase}/coaches/${userId}.json`, {
          coachData,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }

      context.commit("registerCoach", { ...coachData, id: userId });
    },
    async loadCoaches(context) {
      const response = await axios.get(`${URLbase}/coaches.json`);
      console.log(response);

      const responseData = await response.data;

      if (response.status !== 200) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const coaches = [];

      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].coachData.firstName,
          lastName: responseData[key].coachData.lastName,
          description: responseData[key].coachData.description,
          hourlyRate: responseData[key].coachData.hourlyRate,
          areas: responseData[key].coachData.areas,
        };

        coaches.push(coach);
      }

      context.commit("setCoaches", coaches);
    },
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((c) => c.id === userId);
    },
  },
};
