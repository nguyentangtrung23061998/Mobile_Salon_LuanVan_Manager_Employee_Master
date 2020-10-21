import { combineReducers } from 'redux';
import homeReducerWrapper from '../containers/home/state';
import loginReducerWrapper from '../containers/login/with_login';
import verifyDomainReducerWrapper from '../containers/verify_domain/state';

const rootRecuder = combineReducers({
    verifyDomain: verifyDomainReducerWrapper,
    login: loginReducerWrapper,
    home:homeReducerWrapper
})

const rootReducerWrapper = (state, action) => {
    if (action.type === 'app/setAuth') {
        state = undefined;
    }
    return rootRecuder(state,action);
}
export default rootReducerWrapper;