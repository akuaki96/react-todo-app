import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
//App.jsxからimportしてきたAppの関数がindex.jsに入ってくる

ReactDOM.render(<App></App>, document.getElementById("root"));
// importしたAppをindex.html内のid="root"がある場所へ反映させる
