import { fromJS } from "immutable"; // i have used immutable to make it easy to use
const initialState = fromJS({ // it is an initial state which has the default values
  view: "main",
  planNo: 1,
  openPayment: false
});

/**
 * @param {*} state 
 * @param {*} action 
 * @returns the state once it is updated we can use all over the app
 */
const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GO_TO_PRICING":
      state = state.set('view', 'pricing');
      return state;

    case "OPEN_PAYMENT":
      state = state.set('planNo', action.data.planNo);
      state = state.set('openPayment', action.data.open);
      return state;

    default:
    return state;

  }
};

export default DashboardReducer;