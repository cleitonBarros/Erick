import { PureComponent } from "react";

class ScrollIntoView extends PureComponent<any, any> {
  componentDidMount = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // eslint-disable-next-line react/prop-types
  render = () => this.props.children;
}

export default ScrollIntoView;
