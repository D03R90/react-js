import React, { Component } from "react";
import ReactDOM from "react-dom";

// import Info from './app/components/Info';
import Menu from "./app/components/Menu";
import Articles from "./app/components/Articles";
import Login from "./app/components/Login";

const app = document.getElementById("app");

// <Пункты меню>
let itemsMenu = [
  {
    title: "Главная",
    link: "#",
    class: ""
  },
  {
    title: "Статьи",
    link: "#",
    class: ""
  },
  {
    title: "Блог",
    link: "#",
    class: "active"
  },
  {
    title: "Контакты",
    link: "#",
    class: ""
  },
  {
    title: "О нас",
    link: "#",
    class: ""
  }
];

// <Статьи>
let itemsArticles = [
  {
    title: "Статья 1",
    author: "Вадим",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Ea, incidunt similique, dolorum odit quo cumque nobis itaque eius doloremque, omnis laboriosam dolor quod voluptate fuga nulla. Voluptates, nulla!"
  },
  {
    title: "Статья 2",
    author: "Петя",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Ea, incidunt similique, dolorum odit quo cumque nobis itaque eius doloremque, omnis laboriosam dolor quod voluptate fuga nulla. Voluptates, nulla!"
  },
  {
    title: "Статья 3",
    author: "Илья",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Ea, incidunt similique, dolorum odit quo cumque nobis itaque eius doloremque, omnis laboriosam dolor quod voluptate fuga nulla. Voluptates, nulla!"
  }
];

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
