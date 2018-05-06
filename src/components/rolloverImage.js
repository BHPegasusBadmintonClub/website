import React from 'react';

class RolloverImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: props.src,
    }
  }

  render() {
    const { link } = this.props;
    return (
      <a href={link}
        target="_blank"
        onMouseOver={() => this.setState({ image: this.props.hoverSrc })}
        onMouseOut={() => this.setState({ image: this.props.src })}
      >
        <img src={this.state.image} />
      </a>
    )
  }
}

export default RolloverImage;
