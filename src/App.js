import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { languages } from "./const/languages";

function App() {
  const [tab, setTab] = useState("list");

  const [langs, setLangs] = useState(languages);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  const body =
    tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />;

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {body}
    </div>
  );
}

export default App;
