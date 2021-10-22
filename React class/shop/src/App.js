import logo from './logo.svg';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';

function App() {

  let [data, data변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="jumbotron">
        <h1>hello</h1>
        <p>설명</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>{data[0].title}</h4>
            <p>{data[0].content}</p>
            <p>{data[0].price}</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
            <h4>{data[1].title}</h4>
            <p>{data[1].content}</p>
            <p>{data[1].price}</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
            <h4>{data[2].title}</h4>
            <p>{data[2].content}</p>
            <p>{data[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
