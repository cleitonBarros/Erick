import { PureComponent } from "react";
type Props = {
  children?: React.ReactNode;
};
class ScrollIntoView extends PureComponent<Props> {
  componentDidMount = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // eslint-disable-next-line react/prop-types
  render = () => this.props.children;
}

export default ScrollIntoView;
