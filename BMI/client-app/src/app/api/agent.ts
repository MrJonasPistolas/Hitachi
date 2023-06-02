import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use(config => {
    const apiKey = process.env.REACT_APP_API_APIKEY;
    if (apiKey && config.headers) config.headers.set('apiKey', apiKey);
    return config;
});

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody)
};

const BMI = {
    calculate: (weigth: number, heigth: number) => requests.get<number>(`/calcBmi?weigth=${weigth}&heigth=${heigth}`)
};

const agent = {
    BMI
}

export default agent;