import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'; 
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import './styles/index.css';
import { App } from './components/index';



//logger function 
const logger=({dispatch,getState})=>(next)=>(action)=>{
  //middleware code
  //console.log("ACTION_TYPE=",action.type);
  next(action);
}

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log("STORE=",store);


export const StoreContext = createContext();
class Provider extends React.Component {
render() {
const { store} = this.props;
return (
  <StoreContext.Provider value={store}>
    {this.props.children}
  </StoreContext.Provider>
);
}
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
     <HashRouter basename='/'>
      <Provider store={store}>
        <App  store={store}/>
      </Provider>,
     </HashRouter> 
</React.StrictMode>
);



