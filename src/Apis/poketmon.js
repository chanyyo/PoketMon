import * as httpClient from './httpClient';

export const getPokemon = async (info) => {
  // id : 1~6
  //  info = > Poketmon의 props인 id사용
  try {
    const {result} = await httpClient.request({
      path: `/${info}`,

      // options = {}  안에 key : value 추가
    });

    return result;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

export const getPoketmons = async () => {
  try {
    const {result} = await httpClient.request();

    return result;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

// // export const getPokemon = async (id) => {
// //   try {
// //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// //     const json = await response.json();
// //     return json;
// //   } catch (err) {
// //     return new Error(err);
// //   }
// // };

// // axios

// export const getPokemon = async (info) => {
//   try {
//     const {result} = await httpClient.request({
//       path: `/${info}`,
//     });
//     return result;
//   } catch (err) {
//     console.error(err);
//     throw Error(err);
//   }
// };

// export const getPokemons = async () => {
//   try {
//     const {result} = await httpClient.request();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//     throw Error(err);
//   }
// };

// //    1번방법
// //  try {
// //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
// //     return response.data;
// //   } catch (err) {
// //     return new Error(err);
// //   }
// // };

// // 2번방법
// try {
//   const response = await axios({
//     method: 'get',
//     url: `https://pokeapi.co/api/v2/pokemon/${id}`,
//   });
//   console.log(response.data);
//   return response.data;
// } catch (err) {
//   return new Error(err);
// }

// // export const getPoketmons = async () => {
// //   try {
// //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
// //     console.log(response);
// //     return response.data;
// //   } catch (err) {
// //     return new Error(err);
// //   }
// // };
