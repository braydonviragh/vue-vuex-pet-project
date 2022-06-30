import { createStore } from 'vuex'
import session from './modules/session';


// Create Store
export default createStore({
    modules: {
        session
    }
});