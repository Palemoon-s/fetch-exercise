import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

class Hitokoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  async componentDidMount() {
    let res = await fetch('https://v1.hitokoto.cn/');
    let resData = await res.json();
    ((resData) => {
      this.setState({ data: [resData.hitokoto, resData.from] });
    })(resData)
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <div>{data[0]}</div>
        <div>{data[1]}</div>
      </>
    );
  }

}

function App() {
  return (
    <Hitokoto />
  );
}
export default App;
