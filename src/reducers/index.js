import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';

/**
 * This is the root reducers 
 * In future we can add more reducers when app grows and maintain it clean
 */
export default combineReducers({
    DashboardReducer
})