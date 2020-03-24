import { createStore , combineReducers } from 'redux';
import ModalReducer from '../reducers/ModalReducer';

const configureStore = () => {
    const store = createStore(
                combineReducers({                
                    ModalReducers: ModalReducer
                })
    );
    return store;
}

export default configureStore;