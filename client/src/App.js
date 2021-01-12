import Menu from './pages/Menu'

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
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App