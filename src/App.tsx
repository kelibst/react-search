import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout />
    </div>
    </Provider>
  );
}

export default App;
