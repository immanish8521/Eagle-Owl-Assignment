import React, {useState, useEffect} from "react";
import axios from "axios"
import './App.css';
import {InfoCardWithCircle, InfoCardWithArrow} from "./components/InfoCard";
import RecipieList from "./components/RecipieList";
import AllRecpies from './components/AllRecipies';
import Incorrect from './components/Incorrect';
import Untagged from './components/Untagged';
import Disabled from './components/Disabled';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [highMarginRecipies, setHighMarginRecipies] = useState()
  const [LowMarginRecipies, setLowMarginRecipies] = useState()
  const [flactuatingRecipies, setFlactuatingRecipies] = useState()


  useEffect(() => {
    axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top&limit=3`).then(res => {
      setHighMarginRecipies(res.data.results)
    }).catch(err => console.log(err))
  
    axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom&limit=3`).then(res => {
      setLowMarginRecipies(res.data.results)
    }).catch(err => console.log(err))
    
    axios.get(` https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top&limit=3`).then(res => {
      setFlactuatingRecipies(res.data.results)
    }).catch(err => console.log(err))
  
  }, [])

  
    return (
    <div className="App">
      <div className="grid grid-cols-3 gap-5 px-8 my-6">
          <InfoCardWithCircle title="High Margin Recipies" recipies={highMarginRecipies} />
          <InfoCardWithCircle title="Low Margin Recipies" recipies={LowMarginRecipies}/>
          <InfoCardWithArrow title="Top Flactuating Recipies" recipies={ flactuatingRecipies}/>
        </div>
        <Router>
          <div className="px-8">
            <Nav />
            <Switch>
              <Route exact path="/allRecipies" component={RecipieList} />
              <Route exact path="/incorrect" component={Incorrect} />
              <Route exact path="/untagged" component={Untagged} />
              <Route exact path="/disabled" component={Disabled} />
            </Switch>
          </div>
        </Router>
  
    </div>
  );
}

export default App;
