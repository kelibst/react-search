import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";
import Search from "./components/Search";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout>
          <Search />
        </Layout>
    </div>
    </Provider>
  );
}

export default App;
