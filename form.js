/** @jsx React.DOM */

var FormInputItem=React.createClass({
  render:function() {
    return (

    <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input type="input" class="form-control" id="inputEmail3" placeholder="Email" />
      </div>
    </div>      

    );
  }
})


var FormBox = React.createClass({
  render: function() {
    return (
      <form class="form-horizontal" role="form">
        <FormInputItem />
      </form>
    );
  }
});
