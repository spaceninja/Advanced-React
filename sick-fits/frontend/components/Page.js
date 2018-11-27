import React from "react";
import Meta from "./Meta";
import Header from "./Header";

class Page extends React.Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        {this.props.children}
      </>
    );
  }
}

export default Page;
