import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.getToStore = this.getToStore.bind(this);
  }
  getToStore(event) {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.getToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store!</button>
      </form>
    );
  }
}
export default StorePicker;
