import React from "react";
import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "list" };
  }
  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ui>
            <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
            <li onClick={() => this.setState({ tab: "form" })}>フォーム</li>
          </ui>
        </header>
        <hr />
        {tab === "list" ? <List /> : <Form />}
      </div>
    );
  }
}

export default App;
