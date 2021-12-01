export const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.data }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.data.id),
      };

    case "SET_ITEMS":
      return {
        ...state,
        clubs: action.data.clubs,
        balls: action.data.balls,
      };

    default:
      return state;
  }
};
