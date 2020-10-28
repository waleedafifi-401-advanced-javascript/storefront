export default (state = false, action) => {
    const { type, payload } = action;
    return type === 'LOADING' ? payload : state;
  }
  
  export const loading = bool => ({
    type: 'LOADING',
    payload: bool,
  });
  