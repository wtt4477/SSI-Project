import "./styles.css";
import React from "react";
import CounterCal from "./CounterCal"

class ContentContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <HOCCounter />
      </div>
    );
  }
}
export default ContentContainer;
