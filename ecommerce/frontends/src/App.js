import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    //<div> --> initially then replacing it with Router so to wrap container around route
    <Router>
      <Header />
     <main className="py-3">
      <Container>
      {/* <HomeScreen /> */}
        <Route path="/" component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={ProductScreen} />
      </Container>
     </main>
     <Footer /> 
    </Router>
    //</div>
  );
}

export default App;
