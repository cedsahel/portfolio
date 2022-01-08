import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills/Skills"
import Projects from "./pages/Projects/Projects"

function App() {
  return (
    <>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/project' component={Projects} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </>
    </>
  );
}

export default App;
