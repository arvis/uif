/** @jsx React.DOM */


var TableHead = React.createClass({
  render: function() {

    return (
      <th>aaa</th>
    );
  }
});

var TableRow = React.createClass({
  render: function() {

    var tableCells=this.props.data.map(function (item){
      return <TableCell >  {item.value} </TableCell>
    });


    return (
      <tr>
        {tableCells}
      </tr>


    );
  }
});


var TableCell = React.createClass({
  render: function() {

    return (
      <td>{this.props.children}</td>
    );
  }
});




var DataGrid = React.createClass({
  render: function() {

    var tableRows=this.props.data.map(function (item){
      return <TableRow data={item} />
    });


    return (

    <table className="table table-striped">
      <thead>
        <tr>
          <TableHead />
          <TableHead />
          <TableHead />
          <TableHead />
        </tr>
      </thead>
      <tbody>

        {tableRows}

      </tbody>
    </table>


    );
  }
});



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


var NavBar = React.createClass({
  render: function() {


    return (


    <div className="container">

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron">
        <h1>Navbar example</h1>
        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
        <p>
          <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
        </p>
      </div>

    </div>



    );
  }
});




//var Alert = require('support/react-bootstrap/src/Alert');