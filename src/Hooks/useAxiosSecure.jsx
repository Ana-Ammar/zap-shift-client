import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5165",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
     if (!user?.accessToken) return;
    axiosSecure.interceptors.request.use((consfig) => {
      consfig.headers.Authorization = `Bearer ${user?.accessToken}`;
      return consfig;
    });
  }, [user]);
  return axiosSecure;
};

export default useAxiosSecure;
