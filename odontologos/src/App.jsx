import AppRoutes from "./Routes/AppRoutes";
import AppProvider from "./Context/context";
import './index.css'


function App() {
  return (
      <AppProvider>
        <AppRoutes/> 
      </AppProvider>       
      
  );
}

export default App;
