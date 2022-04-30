
export default class Login extends React.Component {
    constructor() {
      super();
      this.loginValidate = this.loginValidate.bind(this);
    }
  
    loginValidate() {
      const password = document.forms.loginForm.password.value;
      console.log(password)
      if (password == "password") {
        console.log(password == "password")
        this.props.history.replace('/AddRecycling')
      } else {
        alert("The password is wrong!");
      }
    }
  
    render() {
      return (
        <div style={{position:'absolute', left:'0', top:'0', width:'100%', height:'100%', 
        backgroundImage:'url("login_background.jpg")', backgroundSize:'cover'}}>
          <div style={{textAlign:'center', height: '45px', background: '#333'}}>
            <p className="navbar-brand" style={{color:'white'}}> Cosmetic Packaging Recycling System</p>
          </div>
          <form className="form" name="loginForm" onSubmit={this.loginValidate} style={{margin:'0 auto', 
          marginTop: '150px', width:'500px', borderStyle:'solid', borderRadius:'10px', borderColor:'#0066FF', 
          backgroundColor:'#f0f0f0'}}>
            <h2 style = {{color:'#888', margin:'5px',textAlign:'center'}}>Login</h2>
            <div className="form-group"  style={{textAlign:'center'}}>
              <br />
              <label>Password:</label>
              <input type="password" className="form-control" name="password" style={{margin:'0 auto', width:'400px'}}/>
              <small className="form-text text-muted" style={{textAlign:'center'}}>We'll never share your email with anyone else.</small>
            </div>
            <div style={{margin:'0 auto', width:'100px', marginBottom:'10px'}}>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      )
    }
}

  // Login.propTypes = {
  //   loginValidate: PropTypes.func.isRequired,
  // };

          {/* <h3 style={{marginBottom:'10px', color:'#0066FF'}}>Cosmetic Packaging Recycling System</h3> */}
          {/* <hr style={{margin:'0 auto', width:'300px'}} /> */}