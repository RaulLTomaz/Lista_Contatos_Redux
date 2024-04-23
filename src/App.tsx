import { Provider } from "react-redux";

import EstiloGlobal, { Container } from "./styles";
import store from "./store"
import ListaDeContatos from "./containers/ListaDeContatos"
import BarraLateral from "./containers/BarraLateral";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal/>
      <Container>
        <BarraLateral/>
        <ListaDeContatos/>
      </Container>
    </Provider>
  );
}

export default App;
