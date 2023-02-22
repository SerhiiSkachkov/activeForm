import { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'components/Container';
import { Template } from 'containers/Template';
import { Decorate } from 'containers/Decorate';

const App: FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Template}></Route>
          <Route exact path="/decorated" component={Decorate}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
