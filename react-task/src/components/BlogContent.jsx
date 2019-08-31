import React from "react";

export default class BlogContent extends Component {
  render() {
    return (
      <div className="postcontent nobottommargin clearfix">
        {this.props.children}
      </div>
    );
  }
}
