import "./style.css"

import { Header } from "./componentes/header";
import { InputText } from "./componentes/inputText";
import { SectionTask } from "./componentes/sectionTasks";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="section-main">
        <InputText />
        <SectionTask/>
      </main>
    </div>
  );
}

export default App;
