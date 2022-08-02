import { Router } from "./Router";
import { CycleContextProvider } from "./contexts/CyclesContext";

function App() {
  return (
    <CycleContextProvider>
      <Router />
    </CycleContextProvider>
  );
}

export default App;
