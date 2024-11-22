import { forwardRef, memo } from "react"
import { Example } from "./components/example";
import { Button, CircularProgress, Lenis, Slider } from "@star4/react";

const AppComponent = function App() {
  return (
    <Lenis>
      <div>
        <Example />
        <CircularProgress />
        <Slider value={0.5} />
        <Button variant="filled" icon={<CircularProgress />} label="Button" />
      </div>
    </Lenis>
  )
}

export const App = memo(AppComponent);
