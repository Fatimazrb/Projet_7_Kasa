import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Accueil from './components/accueil/accueil';
import Error from "./components/error/error";
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	 <Header />
			  	<Routes>
				  <Route  path="/" element={<Accueil/>} />
				{/* path="*" permet de renvoyé vers la page 404 ou vers une page prédéfinit
			si l'utilisateur se "perd" */}
				<Route  path="/about" element= {<About/>} />
				<Route  path="*" element={<Error/>} /> 
				{/* <Route path="products/:productId" element={<Singleproduct />} /> */}
				</Routes>
				
      <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
