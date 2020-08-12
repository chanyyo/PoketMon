// 요청할때는 이파일을 쓴다.
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const API_NEXT = '?offset=';

export const request = async (options = {}) => {
  // options = { path : '/1'}
  try {
    const baseUrl = options.url || API_URL;
    const path = options.path || '/'; // path = '/1'
    const queryString = options.query || {};
    const axiosOptions = {
      method: 'get',
      ...options,

      url: baseUrl + path, // API_URL + '/1' ... '/6' 까지
    };

    return await successHandler(axiosOptions, queryString);

    // axios가 정상적으로 실행됐다면, axios에서 가져온 data와
    // status를 result로 반환한 successHandler를 requset에 리턴함
  } catch (err) {
    await errorHandler(err);
  }
};

const httpClient = async (axiosOptions, queryString) => {
  try {
    return await axios(axiosOptions, queryString);
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const successHandler = async (axiosOptions, queryString) => {
  try {
    const {data, status} = await httpClient(axiosOptions, queryString);

    // console.group('POKEMON');
    // console.log(response);
    // console.groupEnd();
    // console.log(data.count);
    return {
      result: data,
      status: status,
    };

    // 1. const response = await httpClient(axiosOptions, queryString);
    // 2. const data = response.data
    // 3. const status = response.status
    // => data => axios로 인한 response의 data를 사용함을 의미
    // => 한마디로, axiosOptions에 있는 url에서 가져온 data를 사용함
    // => status => axios로 인한 response의 status를 사용함을의미
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const errorHandler = async (err) => {
  try {
    console.error(err);
    throw Error(err);
  } catch (err) {
    console.error(err);
    throw Error('server error');
  }
};
