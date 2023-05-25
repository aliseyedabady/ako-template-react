import "./Assets/styles/index.scss";
import { Login } from "./Components/Auth";
import FormV1 from "./Components/Form-v1";
import Routing from "./Components/Routing";
import { authRouter } from "./Router";
function App() {
  return (
    <div>
      <FormV1 />
      {/* <Routing routes={authRouter} /> */}
    </div>
  );
}

export default App;
