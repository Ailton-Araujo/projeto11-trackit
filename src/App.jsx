import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/styled/GlobalStyle";
import PageContextProvider from "./components/ContextProvider";
import Login from "./pages/login/Login";
import Cadastro from "./pages/signup/Cadastro";
import Header from "./components/Header";
import Hoje from "./pages/today/Hoje";
import Habitos from "./pages/habits/Habitos";
import Historico from "./pages/history/Historico";
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
