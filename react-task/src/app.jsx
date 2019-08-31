import React, { Component } from "react";
import ReactDOM from "react-dom";

// import Info from './app/components/Info';
import Modal from "./app/components/Modal";
import Menu from "./app/components/Menu";
import Articles from "./app/components/Articles";
import Login from "./app/components/Login";

const app = document.getElementById("app");

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Menu items={itemsMenu} title="Блог" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Articles items={itemsArticles} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4" />
            <div className="col-xs-4">
              <Login />
            </div>
            <div className="col-xs-4" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, app);
