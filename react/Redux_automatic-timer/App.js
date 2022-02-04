import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { start,stop} from "./action";

class App extends React.Component {
  render(){
    return (
      <div className="App">
      {this.props.countFromStore}
      <button onClick={this.props.startHandler}>START</button>
      <button onClick={this.props.stopHandler}>STOP</button>
    </div>

    );
  }
}

const mapStateToProps = (state) => ({
  countFromStore: state
});

const mapDispatchToProps = (dispatch) => ({
  
  incrementHandler: () => start(),
  stopHandler: () => dispatch(stop())
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export {
  ConnectedApp as default,
  App,
};