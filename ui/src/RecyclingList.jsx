// /* globals React */

// function IssueRow({ issue }) {
//   return (
//     <tr>
//       <th scope="row">{issue.id}</th>
//       <td>{issue.status}</td>
//       <td>{issue.owner}</td>
//       <td>{issue.created.toDateString()}</td>
//       <td>{issue.effort}</td>
//       <td>{issue.due ? issue.due.toDateString() : ''}</td>
//       <td>{issue.title}</td>
//     </tr>
//   );
// }

// export default function IssueTable({ issues }) {
//   const issueRows = issues.map(issue => (
//     <IssueRow key={issue.id} issue={issue} />
//   ));

//   return (
//     // <table className="bordered-table">
//     <table class="table table-striped">
//       <thead>
//         <tr>
//           <th scope="col">ID</th>
//           <th scope="col">Status</th>
//           <th scope="col">Owner</th>
//           <th scope="col">Created</th>
//           <th scope="col">Effort</th>
//           <th scope="col">Due Date</th>
//           <th scope="col">Title</th>
//         </tr>
//       </thead>
//       <tbody>
//         {issueRows}
//       </tbody>
//     </table>
//   );
// }


// function RecycleRecord({record}) {
//   return (
//     <tr>
//         <td>{record.customerID}</td>
//         <td>{record.customerName}</td>
//         <td>{record.packagingID}</td>
//         <td>{record.packagingName}</td>
//         <td>{record.date}</td>
//     </tr>
//   );
// }


// export default function RecyclingList({records}) {

//   const recordRows = records.map(record => (<RecycleRecord key={record.customerID} record={record}/>));
//     return(
//       <table>
//          <thead>
//           <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Packaging ID</th>
//               <th>Packaging Name</th>
//               <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recordRows}
//         </tbody>
//       </table>
//     );
//   }
import graphQLFetch from './graphQLFetch.js';

class RecycleRecord extends React.Component {
  render() {
      const record = this.props.record;
      return (
      <tr>
          {/* <td>{record.customerID}</td>
          <td>{record.customerName}</td> */}
          <td scope="row">{record.packagingID}</td>
          {/* <td>{record.customerTel}</td> */}
          <td>{record.packagingName}</td>
          <td>{record.points}</td>
          <td>{record.date}</td>
      </tr>
      );
  }
}

export default class RecyclingList extends React.Component {

  constructor() {
    super();
    this.PassValue = this.PassValue.bind(this);
    this.recyclingList = this.recyclingList.bind(this);
    this.state = {records:[], customerName: "customer", amount: 0}
  }

  async recyclingList(customerTel) {
    const query = `query recordList($customerTel: String!){
      recordList(customerTel: $customerTel) {
        packagingID customerTel date
      }
    }`;
    const vars = {};
    vars.customerTel = customerTel;
    const data = await graphQLFetch(query, vars);
    const query2 = `query getName($customerTel: String!) {
      getName(customerTel: $customerTel) {
        customerName customerTel amount
      }
    }`;
    const data2 = await graphQLFetch(query2, vars);
    const customers = data2.getName;
    const query3 = `query getPackaging($packagingID: Int!) {
      getPackaging(packagingID: $packagingID) {
        packagingID packagingName points
      }
    }`;
    const recordList = data.recordList;
    const reocrds = []
    const vars1 = {}
    // var points = 0;
    for (let i = 0; i < recordList.length; i++) {
      vars1.packagingID = recordList[i].packagingID
      var data3 = await graphQLFetch(query3, vars1)
      recordList[i].packagingName = (data3.getPackaging[0]).packagingName
      recordList[i].points = (data3.getPackaging[0]).points
      // points += recordList[i].points
    }
    this.setState({records: recordList, customerName: customers[0].customerName, amount: customers[0].amount })
  }

  PassValue() {
    const customerTel = document.forms.customerTelForm.customerTel.value;
    //从whole那里继承这个函数
    if (customerTel == "") {
      alert("please fill the blanks");
    }
    this.recyclingList(customerTel);
    form.customerTel.value = "";
  }
  
  
//定义一个函数 使state中的list都是一个个的记录

  render() {
    //调用上面的函数
    const records = this.state.records.map(record => <RecycleRecord key={record.packagingID} record={record} />)
    return(
      <React.Fragment>
        <div style={{width:'1000px',float:'right',marginRight:'15px'}}>
          <br />
          <form name="customerTelForm" onSubmit={this.PassValue}>
            <legend>Search</legend>
            <div class="form-group">
              <label for="customerTel">customerTel</label>
              <input type="number" class="form-control" id="customerTel"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br/>
        <p>Hello {this.state.customerName}, you have {this.state.amount} points</p>
        <table class="table table-striped">
         <thead>
          <tr>
              {/* <th>Customer ID</th>
              <th>Customer Name</th> */}
              <th scope="col">Packaging ID</th>
              {/* <th scope="col">Customer Telephone</th> */}
              <th scope="col">Packaging Name</th>
              <th scope="col">Points</th>
              <th scope="col">Date</th>
          </tr>
          </thead>
          <tbody>
          {records}
          </tbody>
        </table>
        </div>
      </React.Fragment>
      
    )
  }
}
