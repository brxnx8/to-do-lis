import "./style.css"

import { Header } from "./componentes/header";
import { InputText } from "./componentes/inputText";


function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-main">
        <InputText />
      </section>
    </div>
  );
}

export default App;
