import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const OptionView = View.extend({
    template: _.template($("#OptionTemplate").html()),
    initialize: function () {

    },
    events: {
        'click #lastfm': 'lastfmClickHandler',
        'click #artists': 'artistClickHandler',
        'submit #lastfm-form': 'formHandler',
        'submit #artist-form': 'artistHandler'
    },
    render: function () {
        this.el.innerHTML = this.template();

        return this;
    },
    lastfmClickHandler: function (evt) {
        $('#lastfm').find('h2').empty();
        $('#lastfm').find('.hidden').fadeIn();
    },
    artistClickHandler: function (evt) {
        $('#artists').find('h2').empty();
        $('#artists').find('.hidden').fadeIn();
    },
    formHandler: function (event) {
        event.preventDefault();
        var name = $('#username').val();
        Backbone.history.navigate('recommendations/user/'+ name +'/' , { trigger: true });
    },
    artistHandler: function (event) {
        event.preventDefault();
        var artistname = $('#artistname').val();
        Backbone.history.navigate('recommendations/artist/'+ artistname +'/' , { trigger: true });
    },
    
    tagName: 'div',
    className: 'mp-container'
});

export default OptionView;