import { memo } from "react";

import "./_burgerMenu.sass";

const BurgerMenuComponent = function BurgerMenu() {
  return (
    <div className="menu-burger">
      <input
        type="checkbox"
        id="burger-button"
        name="burger-button"
        className="menu-burger__button"
      />
      <label htmlFor="burger-button" className="menu-burger__label">
        <div className="menu-burger__icon"></div>
      </label>
      <div className="menu-burger__background"></div>
      <div className="menu-burger__foreground"></div>
    </div>
  );
};

export const BurgerMenu = memo(BurgerMenuComponent);
