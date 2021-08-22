import axios from "axios";

const eventServiceApiClient = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getEvents() {
    let events = await eventServiceApiClient.get("/events");
    return events;
  },
};
