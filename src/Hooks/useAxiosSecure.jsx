import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5165",
});

const useAxiosSecure = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.accessToken) return;
    const reqIterceptor = axiosSecure.interceptors.request.use((consfig) => {
      consfig.headers.Authorization = `Bearer ${user?.accessToken}`;
      return consfig;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const statusCode = error.status;
        if(statusCode === 401 || statusCode === 403) {
            logOut()
            .then(() => {
              navigate('/login')
            })
        }        
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqIterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
