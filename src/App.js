import Home from "./pages/Home"
import Details from "./pages/Details";
import Favorite from "./pages/Favorite"
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store/index";
import {Navbar, Nav, Container} from "react-bootstrap"

function App(){

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Pokedex-Dharma</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/" style={{color:"inherit", textDecoration: "none"}}>Home</Link></Nav.Link>
        <Nav.Link><Link to="/favorite" style={{color:"inherit", textDecoration: "none"}}>Favorite</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <p></p>
    <p></p>
    <Switch>
      <Route exact path="/">
        <Home></Home>
    </Route>
    <Route path="/pokemon/:pokeId">
      <Details></Details>
    </Route>
    <Route exact path="/favorite">
        <Favorite></Favorite>
    </Route>
    </Switch>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
