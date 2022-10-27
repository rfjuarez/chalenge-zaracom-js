import Home from "./ui/pages/Home/Home";
import {Provider} from "react-redux";
import {storeInstance} from "./store/config";

function App() {
  return (
      <Provider store={storeInstance}>
        <Home/>
      </Provider>

  );
}

export default App;
