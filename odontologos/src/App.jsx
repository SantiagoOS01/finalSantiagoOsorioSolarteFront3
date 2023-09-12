import AppRoutes from "./Routes/AppRoutes";
import AppProvider from "./Context/context";



function App() {
  return (
      <AppProvider>
        <AppRoutes/> 
      </AppProvider>       
      
  );
}

export default App;
