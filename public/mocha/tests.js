//var assert = require("assert")
var assert=chai.assert;
var expect = chai.expect;


//http://blog.codeship.com/mocha-js-chai-sinon-frontend-javascript-code-testing-tutorial/
describe("TextField", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var text_field = new TextField();
      expect(text_field.field_name).to.equal("text_1");
    });
 
    it("should set text field name if provided", function() {
      var text_field = new TextField("my_text");
      expect(text_field.field_name).to.equal("my_text");
    });
  });
 
  describe("render", function() {
    it("should render basic textbox", function() {
      var render = (new TextField("my")).render();
      expect(render).to.equal('<input type="text" name="my"/>');
    });
  });
});