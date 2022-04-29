export default class CreateAccount extends React.Component {
    constructor() {
      super();
      this.PassValue = this.PassValue.bind(this);
    }
  
    PassValue() {
      const form = document.forms.accountForm
      const name = form.customerName.value;
      const tel = form.customerTel.value;
      const newCustomer = {customerName: name, customerTel: tel};
      const {createAccount} = this.props;
      createAccount(newCustomer);
      form.customerName.value = "";
      form.customerTel.value = "";
    }
  
    render() {
      return (
        // <form name="accountForm" onSubmit={this.PassValue}>
        //   <br/><h3>Create a Customer Account</h3>
        //   <p>Customer Name <input type="text" name="customerName" placeholder="customerName"/></p>
        //   <p>Customer Telephone <input type="text" name="customerTel" placeholder="customerTel"/></p>
        //   {/* <p><input type="submit" value="Submit"/></p> */}
        //   <button>create account</button>
        // </form>
        <form name="accountForm" onSubmit={this.PassValue} style={{width:'1000px',float:'right',
        marginRight:'15px'}}>
          <br />
        <legend>Create a Customer Account</legend>
        <div class="form-group">
          <label for="customerName">customerName</label>
          <input type="text" class="form-control" id="customerName"/>
          {/* <input type="text" class="form-control" id="packagingID" aria-label="Username"/> */}
        </div>
        <div class="form-group">
          <label for="customerTel">customerTel</label>
          <input type="text" class="form-control" id="customerTel"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      )
    }
  }

  CreateAccount.propTypes = {
    createAccount: PropTypes.func.isRequired,
  };