import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

import Main from "./layouts/Main";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Comments from "./pages/Comments";
import Users from "./pages/Users";

import store from "./store"; //Объект store

const app = document.getElementById("app");

const items = [
  { href: "/", title: "Counter", id: "11" },
  { href: "/comments", title: "Comments", id: "111" }
];
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={Index} />
//       <Route path="blog/" component={Blog} />
//       <Route path="comments/" component={Comments} />
//       <Route path="users/" component={Users} />
//       <Route path="*" component={Error404} />
//     </Route>
//   </Router>,
//   app
// );

class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  handleComment = comment => {
    this.setState(prev => ({
      ...prev,
      comments: prev.comments.concat([comment])
    }));
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="box">
        <Menu items={items} />

        <Switch>
          {routes.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  app
);
