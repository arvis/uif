/** @jsx React.DOM */

var FormInputItem=React.createClass({
  render:function() {
    return (

    <div className="form-group">
      <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
      <div className="col-sm-10">
        <input type="input" className="form-control" id="inputEmail3" placeholder="Email" />
      </div>
    </div>      

    );
  }
})


var FormBox = React.createClass({
  render: function() {
    return (

        <form className="form-horizontal" role="form">

            < FormInputItem />

            <button type="submit" className="btn btn-primary">Apply</button>&nbsp;
            <button type="button" className="btn">Reset</button>
        </form>



    );
  }
});
