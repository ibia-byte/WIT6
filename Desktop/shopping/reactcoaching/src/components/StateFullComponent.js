import React from "react";
import RetyComponent from "./RetyComponent";
import Shape from "./Shape";
class StateFullComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //the return is bound here
      name: "statefullComponent"
    };
  }
  render() {
    return (
      <div>
        {this.state.name}
        <RetyComponent />
        <Shape
          name="Square"
          sides="4"
          angles="4"
          area="12"
          perimeter="8"
          volume="0"
        />
        <br />
        <Shape
          name="Triangle"
          sides="3"
          angles="3"
          area="6"
          perimeter="6"
          volume="9"
        />
      </div>
    );
  }
}
export default StateFullComponent;
