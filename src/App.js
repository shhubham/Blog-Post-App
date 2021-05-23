import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { AddBlog } from './Components/AddBlog'
import { EditBlog } from './Components/EditBlog'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider, GlobaProvider } from './Context/GlobalState';

function App() {
  return (
      <div className="App">
          <GlobaProvider>
          <Router>
          <Switch>
                  <AddBlog path="/add" component={AddBlog} />
                  <EditBlog path="/edit/:id" component={EditBlog} />
                  <Route path="/" component={Home} />
           </Switch>
          </Router>
              </GlobaProvider>
           
    </div>
  );
}

export default App;
