import  CONSTANTS  from "../constants/index";

const initialState = {
    loginModal: false,
    registerModal: false
}

const ModalReducer = (state = initialState , action) => {
    switch(action.type){
        case CONSTANTS.TOGGLE_LOGIN_MODAL:
            return{
                ...state,
                loginModal: !state.loginModal
            }
        case CONSTANTS.TOGGLE_REGISTER_MODAL:
            return{
                ...state,
                registerModal: !state.registerModal
            }
        case CONSTANTS.HAVE_ACCOUNT:
            return{
                ...state,
                registerModal: !state.registerModal,
                loginModal: !state.loginModal
            }
        case CONSTANTS.DONT_HAVE_ACCOUNT:
            return{
                ...state,
                loginModal: !state.loginModal,
                registerModal: !state.registerModal,
            }

        default:
            return state
    }
}

export default ModalReducer;
