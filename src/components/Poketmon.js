import React, {Component, Fragment} from 'react';
import {getPokemon, getPoketmons} from '../Apis/poketmon';

class Poketmon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poketmon: {},
    };
  }

  // Poketmon 컴포넌트의 state에서 poketmon의 객체생성한 후,
  // poketmon Api value obj들을 넣을것.

  fetchPoketmons = async () => {
    const poketmons = await getPoketmons(this.props.id); // id =1~6

    this.setState({
      poketmons,
    });
  };
  // getPoketmons

  fetchPoketmon = async () => {
    const poketmon = await getPokemon(this.props.id);
    this.setState({
      poketmon,
    });
  };
  //

  componentDidMount() {
    this.fetchPoketmon();
    this.fetchPoketmons();
  }

  render() {
    const {poketmon} = this.state;

    console.log(this.state);

    if (poketmon.hasOwnProperty('name')) {
      return (
        <Fragment>
          <div>
            Poketmon: {poketmon.id} {poketmon.name}
          </div>
        </Fragment>
      );
    }
    return <div>Poketmon: {poketmon.id}</div>;
  }
}

export default Poketmon;

//import React, {useEffect, useState, Component, response, json} from 'react';
// // useEffect, useState => react hooks로 지원 (함수형 컴퍼넌트에서만 사용)
// // class형은 사용안됨

// class Pokemon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemon: {},
//     };
//   }

//   componentDidMount() {
//     this.getPokemon(this.props.id);
//     // fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
//     //   .then((response) => response.json())
//     //   .then((json) => json)
//     //  .catch((err) => new Error(err));
//   }

//   getPokemon = async (id) => {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       const json = await response.json();
//       console.log(json);
//       this.setState({pokemon: json});
//     } catch (err) {
//       return new Error(err);
//     }
//     // try = 시도하다  , async 함수를 실행하면 promise객체를 실행할때
//     // pending이 되고, try가 실행되면서 fech의 객체들을 response에
//     // return하고json으로 풀어진 객체들을 setState함수로 호출
//     // 거기서 오류가나면 catch (오류일때 잡는다)함수를 실행

//     // getPokemon이라는  async함수안에
//     // awiat를 쓰면 promise객체의 return 값을기다린다.
//     // promise객체가 처리가 성공하면 return을 하게된다.
//     // fetch api의 return 값은 response(data type = response)인데 즉, promise객체의 return 값은
//     // response가 된다.
//     // 요청하게되면 data가 response객체로 포장되어있는데 그거를 풀기위해서는
//     // json 함수를 사용해야한다.
//     // fetch = url = ur(.co까지) + path, 나눠져있다.
//     // axios = fecth + opction

//     const json = await response.json();

//     this.setState({poketmon: json});
//   };
//   render() {
//     const {pokemon} = this.state;

//     if (pokemon.hasOwnProperty('name')) {
//       return (
//         <div>
//           Pokemon: {pokemon.id} {pokemon.name}
//         </div>
//       );
//     }
//     return <div>Pokemon: {pokemon.id}</div>;
//   }
// }

// export default Pokemon;
