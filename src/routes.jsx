import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import Page404 from './pages/Page404';
import PageBase from './pages/PageBase';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path='/Sobre' element={<Sobre />}></Route>
          <Route path='/Projetos' element={<Projetos />}></Route>
          <Route path='/Contatos' element={<Contatos />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
