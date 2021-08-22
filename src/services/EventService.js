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
  async getEventsByLimits(perPage, page) {
    let events = await eventServiceApiClient.get(
      `/events?_limit=${perPage}&_page=${page}`
    );
    return events;
  },
  async getEvent(id) {
    let event = await eventServiceApiClient.get(`/events/${id}`);
    return event;
  },
};
