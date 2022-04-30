/* globals React */
/* eslint "react/jsx-no-undef": "off" */

import AddRecycling from './AddRecycling.jsx';
import CreateAccount from './CreateAccount.jsx';
import RecyclingList from './RecyclingList.jsx';
import Login from './Login.jsx';
import Packaging from './Packaging.jsx';
import CustomerList from './CustomerList.jsx';
import graphQLFetch from './graphQLFetch.js';
import Top from './Top.jsx';
import LeftNav from './LeftNav.jsx';

class Slogan extends React.Component {
  render() {
    return(
      <div style={{width:'1000px', height:'120px', borderStyle:'solid', borderWidth:'2px', 
      float:'right', textAlign:'center', marginTop:'13px', marginRight:'13px', borderRadius:'15px',
      borderColor:'#999'}}>
        <br />
        <h1 style={{color:'#999'}}>Recycle and Get Points for Discount</h1>
      </div>
    )
  }
}

export default class Whole extends React.Component {
  constructor(){
    super();
    this.state = {
      records: [],
    }
    this.createAccount = this.createAccount.bind(this);
    this.addRecycling = this.addRecycling.bind(this);
    this.createPackaging = this.createPackaging.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.addAmount = this.addAmount.bind(this);
  }

  async createAccount(newCustomer) {
    const query = `mutation createAccount($newCustomer: customerInputs!) {
      createAccount(newCustomer: $newCustomer) {
        customerTel
      }
    }`;
    const data = await graphQLFetch(query, {newCustomer});

  }

  async addRecycling(newRecord) {
    const query1 = `mutation addRecord($newRecord: recordInputs!) {
      addRecord(newRecord: $newRecord) {
        packagingID
      }
    }`;
    const data1 = await graphQLFetch(query1, {newRecord});

    const newpoints = await this.getPoints(newRecord.packagingID);
    // sleep(500);
    const addAmountInfo = {customerTel: newRecord.customerTel, points: newpoints};
    const d = await this.addAmount(addAmountInfo);
  }

  async getPoints(packagingID) {
    const query2 = `query getPackaging($packagingID: Int!) {
      getPackaging(packagingID: $packagingID) {
        packagingID packagingName points
      }
    }`;
    // const packagingID = newRecord.packagingID;
    const vars1 = {};
    vars1.packagingID = packagingID;
    const data2 = await graphQLFetch(query2, vars1);
    const newpoints = (data2.getPackaging)[0].points;
    return newpoints;
  }

  async addAmount(addAmountInfo) {
    const query3 = `mutation addAmount($addAmountInfo: addAmountInputs!) {
      addAmount(addAmountInfo: $addAmountInfo) {
        amount
      }
    }`;
    const data3 = await graphQLFetch(query3, {addAmountInfo});
  }

  async createPackaging(newPackaging) {
    const query = `mutation createPackaging($newPackaging: packagingInputs!) {
      createPackaging(newPackaging: $newPackaging) {
        packagingID
      }
    }`;
    const data = await graphQLFetch(query, {newPackaging});   
    return data; 
  }



  render() {
    // const {records} = this.state;
    return(
      <React.Fragment>
        <Top />
        <Slogan />
        <LeftNav />
        <ReactRouterDOM.HashRouter>

          <ReactRouterDOM.Switch>

            <ReactRouterDOM.Redirect exact from="/" to="/Login"/>
            
            <ReactRouterDOM.Route path="/AddRecycling">
              <AddRecycling addRecycling = {this.addRecycling}/>
            </ReactRouterDOM.Route>

            <ReactRouterDOM.Route path="/CreateAccount">
              <CreateAccount createAccount = {this.createAccount}/>
            </ReactRouterDOM.Route>

            <ReactRouterDOM.Route path="/RecyclingList">
              <RecyclingList records={this.state.records}/>
            </ReactRouterDOM.Route>

            <ReactRouterDOM.Route path="/Packaging">
              <Packaging createPackaging={this.createPackaging}/>
            </ReactRouterDOM.Route>

            <ReactRouterDOM.Route path="/CustomerList">
              <CustomerList/>
            </ReactRouterDOM.Route>

          </ReactRouterDOM.Switch>

        </ReactRouterDOM.HashRouter>

      </React.Fragment>
    );
  }
}
