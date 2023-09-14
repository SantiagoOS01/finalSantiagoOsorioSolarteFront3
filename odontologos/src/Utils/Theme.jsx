import { useContext, useEffect } from 'react';
import {AppContext, themes} from '../Context/context.jsx'

function Theme() {
  const { state, dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: state.theme === themes.light ? 'DARK' : 'LIGHT' });
  };

  useEffect(() => { 
    document.body.style.color = state.theme.font;
    document.body.style.backgroundColor = state.theme.background;
  }, [state.theme]);

  return (
    <div className="Theme" style={{ color: state.theme.font, background: state.theme.background }}>      
      <button className='themeButton' onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
}

export default Theme;
