import React from 'react';
import '../styles/app.css'

class Recipe extends React.Component{


  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    });
  }



    render(){
      const {recipesList}=this.props;


    return (
      <div className="Recipe">
        
        
      </div>
    );
  }

}
export default Recipe;
