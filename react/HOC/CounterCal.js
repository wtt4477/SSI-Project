import "./styles.css";
import React, { Fragment } from "react";
import HOCDefine from "./HOCDefine";

const HOC = (Component) => {
  const WithVisible = ({ visible, ...rest}) => {
    if (!visible) return null
    else
    return <Component {...rest} /> 
  }
  return WithVisible
}

const Counter = (props) => {
  return (
    <Fragment>
      <div>Current Count: {props.count}</div>
      <div>
        <button onClick={props.setIncrement}>Increment</button>
        <button onClick={props.setDecrement}>Decrement</button>
        {/* <AppItem3 /> */}
      </div>
      <div>
        <button onClick={props.setIncrement2}>Increment-if-odd</button>
        <button onClick={props.incrementAsync}>Async-Inc</button>
      </div>
    </Fragment>
  );
};

class CounterCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setIncrement2 = () => {
    if (this.state.count % 2 === 0) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count });
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  setIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  setDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          setIncrement={this.setIncrement}
          setDecrement={this.setDecrement}
          setIncrement2={this.setIncrement2}
          incrementAsync={this.incrementAsync}
        />
      </div>
    );
  }
}

const HOCCounter = HOC(CounterCal);