import Whole from './Whole.jsx';
import Login from './Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component {
  render() {
    return(
      <ReactRouterDOM.HashRouter>

        <ReactRouterDOM.Switch>

          <ReactRouterDOM.Route path='/Login' component={Login}/>
          <ReactRouterDOM.Route path='/' component={Whole}/>

        </ReactRouterDOM.Switch>

      </ReactRouterDOM.HashRouter>
    )
  }   
}

ReactDOM.render(<App />, document.getElementById('contents'));
