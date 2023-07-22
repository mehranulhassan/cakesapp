import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import Middle from "./components/middle";
import Services from "./components/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/Cakes';
import Cakes from "./components/Cakes";
import Weddingcake from './components/weddingcake';
import BirthdayCake from "./components/Birthdaycake";
import img1 from './images/image4.jfif';
import Contact from './components/Contactus';
const data = [
 { id: 1, name:"molten lava" ,"imgUrl":"/images/cake1.jpg",price: "$500" },
{ id: 2, name:"lion King" , image:"/images/cake1.jpg",price:"$100" },
{"id": 1, "name": "test product 1", "imgUrl": "/Images/cake1.jpg", "price": 100},
 {id: 3, name:"cramel chocolate" ,image:"/images/cake2.jpg",price:"$200" },
];
const App = () => {
 return (
 <div className="main">
 <BrowserRouter>
 <div className="navbarcontainer">
 <Navbar />

 </div>
 <Routes>

 <Route exact path="/Team" element={<Team key="team"></Team>}></Route>
 <Route exact path="/Home" element={<Home key={Home}> </Home>}> </Route>
 <Route exact path="/Services" element={<Services key="Services"></Services>}></Route>
 <Route exact path="/Cakes" element={<Cakes key="Cakes"></Cakes>}></Route>
 <Route exact path="/Birthdaycake" element={<BirthdayCake
Data={data}></BirthdayCake>}></Route>
<Route exact path="/Contactus" element={<Contact/>}></Route>
<Route exact path="/weddingcake" element={<Weddingcake Data={data}></Weddingcake>}></Route>


 </Routes>
 <Footer/>
 <Middle/>
 </BrowserRouter>
 </div>
 );
};
export default App;