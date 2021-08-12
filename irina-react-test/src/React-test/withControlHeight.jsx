import React from "react";
import { Slider } from "antd";

function withControlHeight(Component) {
  return class extends React.Component {
    state = {
      height: 500,
    };

    onAfterChange = (value) => {
      this.setState({ height: value });
    };

    render() {
      const { height } = this.state;

      return (
        <>
          <div>You can change height of div (with red border)</div>
          <Slider
            max={600}
            min={20}
            defaultValue={height}
            onAfterChange={this.onAfterChange}
          />
          <Component {...this.props} outerHeight={height} />
        </>
      );
    }
  };
}

export default withControlHeight;
