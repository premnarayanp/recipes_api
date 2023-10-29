import '../styles/home.css';
import React,{Component} from 'react';
import { StoreContext } from '../index';
import { Recipe } from '../components';
export default class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }

   render(){
   
    const recipesList=this.props.recipesList;

    return (
      <div className="Home">
         {
          recipesList.map((recipes,index)=>
            <Recipe recipes={recipes} key={"key"+index}/>
          )
         }
      </div>
    );
  }

}

// class HomeWrapper extends Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <Home store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default HomeWrapper;
 