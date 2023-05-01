import "./Assets/styles/index.scss";
import { Login } from "./Components/Auth";
import Routing from "./Components/Routing";
import { authRouter } from "./Router";
function App() {
  return (
    <div>
      <Routing routes={authRouter} />
    </div>
  );
}

export default App;
