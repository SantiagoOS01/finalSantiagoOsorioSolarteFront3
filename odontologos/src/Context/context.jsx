import { useEffect, createContext, useReducer } from 'react';

export const themes = {
  light: {
    font: '#071920',
    background: '#E9F9FF',
  },
  dark: {
    font: '#E9F9FF',
    background: '#071920',
  },
};

export const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return { ...state, theme: themes.dark };
    case 'LIGHT':
      return { ...state, theme: themes.light };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const initialState = {
    theme: themes.light,
    users: []
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_USERS', payload: data });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state.users))
    localStorage.setItem('theme', state.theme);
  }, [state.theme, state.users]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
