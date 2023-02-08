const languages = ["JavaScript", "C++", "Ruby", "PHP", "Java", "Go"];

export const List = ({ title }) => {
  return (
    <div>
      {languages.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};
