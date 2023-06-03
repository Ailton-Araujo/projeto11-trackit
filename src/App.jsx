import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/styled/GlobalStyle";
import { useUserDataContext } from "./components/ContextProvider";
import Login from "./pages/login/Login";
import Cadastro from "./pages/signup/Cadastro";
import Header from "./components/Header";
import Hoje from "./pages/today/Hoje";
import Habitos from "./pages/habits/Habitos";
import Historico from "./pages/history/Historico";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useUserDataContext();

  useEffect(() => {
    if (Object.values(user).length !== 0) {
      navigate("/hoje");
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {pathname !== "/" && pathname !== "/cadastro" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
        {/* <Route path="/habitos" element={<Habitos />} />
        <Route path="/historico" element={<Historico />} /> */}
      </Routes>
      {pathname !== "/" && pathname !== "/cadastro" && <Footer />}
    </>
  );
}

export default App;
