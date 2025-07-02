import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://food-finder-chi-puce.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;