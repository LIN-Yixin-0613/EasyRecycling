import graphQLFetch from './graphQLFetch.js';

class Customer extends React.Component {
  render() {
      const customer = this.props.customer;
      return (
      <tr>
          <td scope="row">{customer.customerName}</td>
          <td>{customer.customerTel}</td>
          <td>{customer.amount}</td>
      </tr>
      );
  }
}

export default class CustomerList extends React.Component {

  constructor() {
    super();
    this.PassValue = this.PassValue.bind(this);
    this.customerList = this.customerList.bind(this);
    this.state = {customerList:[]}
  }

  async customerList(amount) {
    const query = `query customerList($amount: Int!){
      customerList(amount: $amount) {
        customerName customerTel amount
      }
    }`;
    const vars = {};
    vars.amount = amount;
    const data = await graphQLFetch(query, vars);
    const customers = data.customerList;
    // const vars1 = {}
    // var points = 0;
    // for (let i = 0; i < recordList.length; i++) {
    //   vars1.packagingID = recordList[i].packagingID
    //   var data3 = await graphQLFetch(query3, vars1)
    //   recordList[i].packagingName = (data3.getPackaging[0]).packagingName
    //   recordList[i].points = (data3.getPackaging[0]).points
    //   // points += recordList[i].points
    // }
    this.setState({customerList: customers})
  }

  PassValue() {
    const amount = document.forms.amountForm.amount.value;
    //从whole那里继承这个函数
    
    this.customerList(parseInt(amount));
    form.customerTel.value = "";
  }
  
  
//定义一个函数 使state中的list都是一个个的记录

  render() {
    //调用上面的函数
    const customers = this.state.customerList.map(customer => <Customer key={customer.customerTel} customer={customer} />)
    return(
      <React.Fragment>
        <div style={{width:'1000px',float:'right',marginRight:'15px'}}>
          <form name="amountForm" onSubmit={this.PassValue}>
            <br />
            <legend>Search</legend>
            <div class="form-group">
              <label for="amount">amount</label>
              <input type="text" class="form-control" id="amount"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br/>
        <table class="table table-striped">
         <thead>
          <tr>
              {/* <th>Customer ID</th>
              <th>Customer Name</th> */}
              <th scope="col">Customer Name</th>
              {/* <th scope="col">Customer Telephone</th> */}
              <th scope="col">Telephone Number</th>
              <th scope="col">Amount</th>
          </tr>
          </thead>
          <tbody>
          {customers}
          </tbody>
        </table>
        </div>
      </React.Fragment>
      
    )
  }
}
