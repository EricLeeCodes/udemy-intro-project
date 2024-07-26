import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <>
      <Header />
      <NewsList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
