
import './css/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"; //routes

import Demo from "./signup";


function App() {
  return (
    <div className="App">
     
    
       



      <Router>
           
           {/* ROUTES LANG SAKALAM */}
           <Route exact path="/" component={Demo} />
   

      
         </Router>
    </div>




  );
}

export default App;
