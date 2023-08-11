import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Details from "./Components/Details";
import Head from "./Page/Head/Head";
import Search from "./Page/Search/Search";
import Save from "./Page/Save/Save";
import Shop from "./Page/Shop/Shop";
import NavLogin from "./Page/NavLogin";


function App() {
  return (

    <div className="App">
        {/* <section>
          <Head />
          <NavLogin />
        </section>

       

        <section>
          <Search />
        </section>

        <section>
          <Save />
        </section>

        <section>
          <Shop />
        </section>
         */}
       

       <Routes>
             <Route path='/' element={<Register/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/Details' element={<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;
