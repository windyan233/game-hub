import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b9fe2e4b88f74ae5ae883306dcf65ebf",
  },
});
