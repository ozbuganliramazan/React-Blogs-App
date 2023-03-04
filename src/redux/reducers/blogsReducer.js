import actinTypes from "../actions/actionTypes";

const initialState = {
  pending: false,
  success: false,
  blogs: [],
  error: false,
  errorMessage: "",
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actinTypes.blogActions.GET_BLOGS_START:
      return {
        ...state,
        pending: true,
      };
    case actinTypes.blogActions.GET_BLOGS_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        error: false,
        blogs: action.payload,
      };

    case actinTypes.blogActions.GET_BLOGS_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default blogsReducer;
