import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { incAction,incAction2, decAction} from "./action";


class App extends React.Component {
  render(){
    return (
      <div className="App">
      {this.props.countFromStore}
      <button onClick={this.props.incrementHandler}>Increment</button>
      <button onClick={this.props.decrementHandler}>Decrement</button>
      <button onClick={this.props.incrementHandler2}>Increment-if-odd</button>
      <button onClick={this.props.incrementAsyncHandler}>Async-Inc</button>

    </div>

    );
  }
}

const mapStateToProps = (state) => ({
  countFromStore: state
});

const mapDispatchToProps = (dispatch) => ({
  incrementHandler: () => dispatch(incAction()), 
  decrementHandler: () => dispatch(decAction()),
  incrementHandler2:() => dispatch(incAction2()),
  incrementAsyncHandler: () => setTimeout(() => dispatch(incAction()),1000)
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export {
  ConnectedApp as default,
  App,
};

