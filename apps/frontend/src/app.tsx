import { forwardRef, memo } from "react"
import { Example } from "./components/example";
import { Button, CircularProgress, Lenis, Slider } from "@star4/react";
import { SectionHello } from "./components/sectionHello/sectionHello";

const AppComponent = function App() {
  return (
    <Lenis>
      <>
        <SectionHello />
      </>
    </Lenis>
  )
}

export const App = memo(AppComponent);
