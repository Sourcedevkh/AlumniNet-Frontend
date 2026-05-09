import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
let api = axios.create({
     baseURL: import.meta.env.BASE_URLs,
     headers:{
          Accept:"application/json",
          "Content-Type":"application/json"

     }
})
api.interceptors.request.use((config) =>{
     let authStore = useAuthStore();
     console.log(authStore.token);
     
     if(authStore.token){
          config.headers.Authorization = `Bearer ${authStore.token}`;
     }
     return config;
})
export default api;