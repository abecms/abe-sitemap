'use strict';

var fs = require('fs');

var route = function route(req, res, next, abe) {

  abe.abeExtend.process('sitemap', [''], function(data) {
    res.send("Sitemap generated");
  });
}

exports.default = route