import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";

export default class Option extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any,
    value: PropTypes.string,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    additionalImages: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    activeClassName: "",
    additionalImages: [], // по умолчанию пустой массив
  };

  state = {
    replacedImageIndex: null, // индекс текущего замененного изображения
  };

  onClick = (index) => {
    const { disabled, onClick, value, additionalImages } = this.props;
    if (!disabled) {
      onClick(value);

      this.setState((prevState) => ({
        replacedImageIndex:
          prevState.replacedImageIndex === index ? null : index,
      }));
    }
  };

  render() {
    const {
      children,
      className,
      activeClassName,
      active,
      disabled,
      title,
      additionalImages,
    } = this.props;
    const { replacedImageIndex } = this.state;

    const renderedChildren = React.Children.map(children, (child, index) => {
      const isReplaced = replacedImageIndex === index;
      const imageSrc =
        isReplaced && additionalImages.length > 0
          ? additionalImages[0]
          : child.props.src;

      return (
        <div onClick={() => this.onClick(index)} key={index}>
          <img src={imageSrc} alt={`Image ${index}`} />
        </div>
      );
    });

    return (
      <div
        className={classNames("rdw-option-wrapper", className, {
          [`rdw-option-active ${activeClassName}`]: active,
          "rdw-option-disabled": disabled,
        })}
        aria-selected={active}
        title={title}
      >
        {renderedChildren}
      </div>
    );
  }
}
