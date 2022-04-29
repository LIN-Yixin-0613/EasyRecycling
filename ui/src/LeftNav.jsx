export default class Navigation extends React.Component {
    render() {
      return(
        <div class="wrapper">

            <nav id="sidebar">

                <div class="sidebar-header">
                    <h3>Cosmetic Packaging Recycling System</h3>
                </div>
        
                <ul class="list-unstyled components" style={{color:'white'}}>
                    <li>
                        <a href="/#/AddRecycling">addRecycling</a>
                    </li>

                    <li>
                        <a href="/#/CreateAccount">create account</a>
                    </li>

                    <li>
                        <a href="/#/RecyclingList">RecyclingList</a>
                    </li>

                    <li>
                        <a href="/#/Packaging">Packaging</a>
                    </li>

                    <li>
                        <a href="/#/CustomerList">CustomerList</a>
                    </li>
                </ul>
        
            </nav>

        </div>
      )
    }
}