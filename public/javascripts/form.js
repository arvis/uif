/** @jsx React.DOM */



var FormInputItem=React.createClass({
  render:function() {
    return (

    <div className="form-group">
      <label htmlFor="inputEmail3" className="col-sm-2 control-label">{this.props.label}</label>
      <div className="col-sm-5">
        <input type="input" className="form-control" id="inputEmail3" placeholder="Enter something" />
      </div>
    </div>      

    );
  }
})


var FormBox = React.createClass({
  render: function() {

        var formItems=this.props.data.map(function (item){
          return <FormInputItem label={item.label} />
        });

    return (
        <form className="form-horizontal" role="form">

            {formItems}

            <FormInputItem label={"Text label"} />

            <button type="submit" className="btn btn-primary">Apply</button>&nbsp;
            <button type="button" className="btn">Reset</button>
        </form>



    );
  }
});
