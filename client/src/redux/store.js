// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducer';

// // Combina los reducers si tienes más de uno
// // const rootReducer = combineReducers({
// //   restaurante: rootReducer,                    -------->>>>>>>>>>>INVESTIGAR SOBRE ESTO
// //   // Agrega más reducers aquí si es necesario
// // });

// // Crea el store de Redux
// const store = createStore(rootReducer);

// // Exporta el store y el componente Provider
// export default {store, Provider};

//---------------------
//PI Henry >>
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducer';
// import thunk from 'redux-thunk';

// const composeEnhancers =
//    (typeof window !== 'undefined' &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//    compose;

// export const store = createStore(
//    rootReducer,
//    composeEnhancers(applyMiddleware(thunk)),
// );
//-------------- CHATGPT >>>>>>>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
