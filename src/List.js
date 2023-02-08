import React from "react";

export class List extends React.Component {
  render() {
    const languages = ["JavaScript", "C++", "Ruby", "PHP", "Java", "Go"];
    return (
      <div>
        {languages.map((lang, index) => {
          return <div key={index}>{lang}</div>;
        })}
      </div>
    );
  }
}
