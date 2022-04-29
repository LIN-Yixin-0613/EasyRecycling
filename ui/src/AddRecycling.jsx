

export default class AddRecycling extends React.Component {
  constructor() {
    super();
    this.PassValue = this.PassValue.bind(this);
  }


  PassValue() {
    const form = document.forms.recyclingForm
    const packagingID = form.packagingID.value;
    const customerTel = form.customerTel.value;
    const date = (new Date()).toDateString();
    // const newRecord = {packagingID, customerTel, date};
    const newRecord = {};
    newRecord.packagingID = parseInt(packagingID);
    newRecord.customerTel = customerTel;
    newRecord.date = date;
    const {addRecycling} = this.props;
    addRecycling(newRecord);
    form.packagingID.value = "";
    form.customerTel.value = "";
  }

  render() {
    return (
      <form name="recyclingForm" onSubmit={this.PassValue} style={{width:'1000px',float:'right',
    marginRight:'15px'}}>
        <br />
        <legend>Add Recycling Record</legend>
        <div class="form-group">
          <label for="packagingID" class="form-label">packagingID</label>
          <input type="text" class="form-control" id="packagingID"/>
        </div>
        <div class="form-group">
          <label for="customerTel" class="form-label">customerTel</label>
          <input type="text" class="form-control" id="customerTel"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }
}


AddRecycling.propTypes = {
  addRecycling: PropTypes.func.isRequired,
};




