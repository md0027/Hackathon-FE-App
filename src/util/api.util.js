import axios from "axios";

const  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  }

export const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");
export const posts = (body) => axios.post("https://jsonplaceholder.typicode.com/posts",body,headers);

