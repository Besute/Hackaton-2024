import { forwardRef, memo } from "react";

import styles from "./example.module.sass";

const ExampleComponent = forwardRef(
  function Example() {
    return (
      <div className={styles["example"]}></div>
    );
  }
);

export const Example = memo(ExampleComponent);
