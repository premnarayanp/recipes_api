import {Routes, Route} from 'react-router-dom';
import React from 'react';
import {  Home } from '../pages/index';
import  Navbar  from './Navbar';
import '../styles/app.css'

class App extends React.Component{


  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    });
  }



    render(){


      //const {store}=this.props;
      const {recipesList}=this.props.store.getState();
  
    const Page404=()=>{
      return <h1>404</h1>
    };

    return (
      <div className="App">
          <Navbar />
  
          <Routes>
             <Route path="/" element={<Home recipesList={recipesList} />} />
             <Route path="*" element={<Page404/>} />
        </Routes>
        
      </div>
    );
  }

}
export default App;
