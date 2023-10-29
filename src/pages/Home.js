import '../styles/home.css';
import React,{Component} from 'react';
import { StoreContext } from '../index';

export default class Home extends React.Component{

   render(){


    return (
      <div className="Home">
      <h1>Home</h1>
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
 