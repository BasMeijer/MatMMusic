import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const OptionView = View.extend({
    template: _.template($("#OptionTemplate").html()),
    initialize: function () {

    },
    events: {
        'click #lastfm': 'lastfmClickHandler',
        'submit #option-form': 'formHandler'
    },
    render: function () {
        this.el.innerHTML = this.template();

        return this;
    },
    lastfmClickHandler: function (evt) {
        $('#lastfm').find('h2').empty();
        $('#lastfm').find('.hidden').fadeIn();
    },
    formHandler: function (event) {
        event.preventDefault();
        var name = $('#username').val();
        Backbone.history.navigate('recommendations/'+ name +'/' , { trigger: true });

    },
    tagName: 'div',
    className: 'mp-container'
});

export default OptionView;