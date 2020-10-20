import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Navbar from "./components/file/Navbar"
import Footer from "./components/file/Footer"
import { Redirect, Route, Switch } from "react-router-dom"

const App = ()=>{
  return (
    <>
    <Navbar />

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/services" component={Services} exact />
      <Route path="/contact" component={Contact} exact />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  )
}

export default App;