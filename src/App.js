import React from 'react';
import Poketmon from './components/Poketmon'; // 변수로 원하는 파일을 가져옴

class App extends React.Component {
  constructor() {
    super();
    // this.ids = [];
    this.ids = [1, 2, 3, 4, 5, 6];
    // this.ids = Array(20);
    // function IDS() {
    //   for (let i = 0; i < 20; i++) {
    //     this.ids.push[i];
    //   }
    //   console.log(this.ids);
    // }
    // ids 배열
  }

  render() {
    return (
      <div>
        {/* {this.ids.fill().map((element, id) => {
          <Poketmon key={id} id={id} />;
        })} */}

        {this.ids.map((id) => (
          <Poketmon key={id} id={id} />
          // ids의 배열을 모두 가지고 있는상태
        ))}
      </div>
    );
  }
}

export default App;
