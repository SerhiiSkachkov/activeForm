import { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'components/Container';
import { Template } from 'containers/Template';
import { Decorate } from 'containers/Decorate';
import { Header } from 'components/Header';

const App: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Route exact path="/" component={Template}></Route>
          <Route exact path="/decorated" component={Decorate}></Route>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
