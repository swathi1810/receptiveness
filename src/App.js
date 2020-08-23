import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid , Row, Col} from './style';

const App = () => {
  return (
    <div className="App">
     <h1>Receptiveness</h1>
     <Grid>
     <Row>
       <Col size ={1}>
         So LOnnnnng
       </Col>
     </Row>
     <Row>
       <Col size={2}>
         I'm twice the size of
       </Col>
       <Col size ={1}>
        you!
       </Col>
       <Col size={1} collapse="xs">
         See if it Collapses
       </Col>
     </Row>

     </Grid>
    </div>
  );
}

export default App;
