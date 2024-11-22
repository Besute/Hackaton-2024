import { memo } from "react";
import clsx from "clsx";
import './_button.sass'

const ButtonComponent = function Button({ color, text } : object) {
  return (
    <div
      className={
        clsx({
          "button": true,
          [`button__${color}`]: color,
        })
      }>
        <div className="button__text">
          {text}
        </div>
    </div>
  );
};

export const Button = memo(ButtonComponent);
