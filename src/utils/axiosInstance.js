import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://2fe1-203-246-85-188.ngrok-free.app/api/", // 서버 주소
    withCredentials: true, // 쿠키 전송을 위해 설정
});

export default axiosInstance;
