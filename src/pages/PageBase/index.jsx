import Header from '../../components/header';
import Container from '../../components/container';
import Footer from '../../components/footer';
import { Outlet } from 'react-router-dom';

const PageBase = () => {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
