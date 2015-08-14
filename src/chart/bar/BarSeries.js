define(function(require) {

    'use strict';

    var List = require('../../data/List');

    return require('../../data/Series').extend({

        type: 'bar',

        getInitialData: function (option) {
            var list = List.fromArray(option.data);
            list.dataDimension = 1;
            return list;
        }
    });
});