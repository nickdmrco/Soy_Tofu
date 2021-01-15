
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
          </Route>
          <Route path='/saved'>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
