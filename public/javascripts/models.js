
/*
var TextField=function TextField(name){

	this.render=function(){
		return "textfield "+name;
	};
};
*/


var TextField =function(field_name) {
	if (!field_name){
		field_name="text_1";
	}

    this.field_name = field_name;
	this.render = function() {
	        return '<input type="text" name="'+this.field_name+'"/>';
	    };
	}


var IntegerField=function(){

	return "int field"
};

var DateField=function(){

	return "date field"
};

var BigTextField=function(){

	return "text area field"
};



var Employee={
	firstName: new TextField("first_name"),
	salary:new IntegerField(),
	date_of_birth:new DateField(),
	description:new BigTextField()
};