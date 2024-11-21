import { memo } from "react"
import { SectionHello } from "./components/sectionHello/sectionHello";


const AppComponent = function App() {
  return (
    <div>
      <SectionHello />
    </div>
  )
}

export const App = memo(AppComponent);
