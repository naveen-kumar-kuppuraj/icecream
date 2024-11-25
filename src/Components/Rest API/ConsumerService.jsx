import axios from "axios";

const baseURL = "http://localhost:8080/ConsumerController";

export const createConsumer = (Consumer) => axios.post(baseURL + "/Insert", Consumer);
export const getConsumerById = (Consumer) => axios.get(baseURL + "/Read", Consumer);