import axios from "axios";
export const API_URL = "https://api.api-ninjas.com/v1/";
export const API_URL_MODELS= "https://request.denishik.ru/test/car/";
export const apiBase = axios.create({
    baseURL: API_URL,
    headers: {'X-Api-Key': 'I9cixmPsFE08gkCI1ONm2Q==Sv1kOJU2qCsIEbWN'}
});
export const apiBaseModels = axios.create({
    baseURL: API_URL_MODELS,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});
export const carsXEapi = axios.create({
    baseURL: "https://serpapi.com/",
    headers: {
        "Accept": 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
});