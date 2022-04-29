export default class Navigation extends React.Component {
    render() {
      return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand">Recycle</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/AddRecycling">AddRecycling</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/CreateAccount">CreateAccount</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/RecyclingList">RecyclingList</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/Packaging">Packaging</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/CustomerList">CustomerList</a>
              </li>
            </ul>
          </div>
        </nav>    
      )
    }
  }
