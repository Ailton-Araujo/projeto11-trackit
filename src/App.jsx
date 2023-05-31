import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import GlobalStyled from "./components/styled/GlobalStyled";
import PageContextProvider from "./components/ContextProvider";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Header from "./components/Header";
import Hoje from "./Pages/Hoje";
import Habitos from "./Pages/Habitos";
import Historico from "./Pages/Historico";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <PageContextProvider>
      <GlobalStyled />
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
