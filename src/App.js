import Header from './components/Header/Header'
import React from 'react';
import Videos from './components/Videos/Videos';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uploadPage from './pages/Upload';


function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/videos/:videoID" render = {(props) => <Videos match={props.match}/>} />
          <Route path="/uploads" component={uploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;