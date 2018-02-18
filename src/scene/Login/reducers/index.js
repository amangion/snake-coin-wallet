const authReducer = (state = { isAuthenticated: false, token: '' }, action) => {
  switch (action.type) {
    case 'SING_UP_USER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.data.token,
        currentUser: action.data.username,
      };
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        currentUser: '',
      };
    default:
      return state;
  }
};

export default authReducer;
