import React, {Component, Fragment} from 'react';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Recipes from "./Components/Recipes";
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        
        <Navbar />
        
        <div class="content">
          <div class="container">
            <Title titre="Mes recettes" accroche="Retrouver toute vos recettes" />
            
            <div class="row">
              {/* Recipes */}
              <Recipes />
              <Recipes />
              <Recipes />
              <Recipes />
            </div>
          
          </div>
        </div>

      </Fragment>
    );
  }
}
export default App;
