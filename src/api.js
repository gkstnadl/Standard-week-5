import axios from 'axios';

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
    baseURL: "http://localhost:6173",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
    function (config) {
        console.log("요청합니다.", config);
        return config;
    },
    function (error) {
        console.error("요청 에러!", error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
    function (response) {
        console.log("응답입니다.", response);
        return response;
    },
    function (error) {
        console.error("응답 에러!", error);
        return Promise.reject(error);
    }
);

export default api;