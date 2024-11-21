import { memo } from "react";
import classNames from "classnames"
import './_button.sass'

const ButtonComponent = function Button(props : object) {
  const { color, text } = props;
  return (
    <div className={classNames({
    "button": true,
    [`button__${color}`]: color,
    })}>
      <div className="button__text">{text}</div>
    </div>
  );
};

export const Button = memo(ButtonComponent);
