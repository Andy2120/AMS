import './App.css';
import { BrowserRouter } from "react-router-dom";
import RootRouter from './components/router/RootRouter';
import Header from "./components/header/Header"
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <RootRouter />
    <Footer />
  </BrowserRouter>
  );
}

export default App;
