import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/styled/GlobalStyle";
import PageContextProvider from "./components/ContextProvider";
import Login from "./pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Header from "./components/Header";
import Hoje from "./Pages/hoje/Hoje";
import Habitos from "./Pages/habitos/Habitos";
import Historico from "./Pages/historico/Historico";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <PageContextProvider>
      <GlobalStyle />
      {pathname !== "/" && pathname !== "/cadastro" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Hoje" element={<Hoje />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
      {pathname !== "/" && pathname !== "/cadastro" && <Footer />}
    </PageContextProvider>
  );
}

export default App;
