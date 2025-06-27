import { ThemeProvider } from "@emotion/react";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilo";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
         <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
