(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['peopleCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"peopleCard\">\r\n  <p>Game: "
    + alias4(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"game","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Username: "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div> \r\n";
},"useData":true});
})();