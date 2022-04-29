export default class Packaging extends React.Component {
    constructor() {
      super();
      this.PassValue = this.PassValue.bind(this);
    }
  
    PassValue() {
      const form = document.forms.packagingForm
      const name = form.packagingName.value;
      const points = parseInt(form.points.value);
      const newPackaging = {packagingName: name, points: points};
      const {createPackaging} = this.props;
      createPackaging(newPackaging);
      form.packagingName.value = "";
      form.points.value = "";
    }
  
    render() {
      return (
        <form name="packagingForm" onSubmit={this.PassValue} style={{width:'1000px',float:'right',
        marginRight:'15px'}}>
          <br />
        <legend>Input a new package information</legend>
        <div class="form-group">
          <label for="packagingName">packagingName</label>
          <input type="text" class="form-control" id="packagingName"/>
        </div>
        <div class="form-group">
          <label for="points">points</label>
          <input type="text" class="form-control" id="points"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      )
    }
  }

  Packaging.propTypes = {
    createPackaging: PropTypes.func.isRequired,
  };