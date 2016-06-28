import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

/**
 * The optionView holds all the form controls needed to navigate the user from 
 * the mainpage to the other pages.
 * 
 * Holds 3 options 
 * - Artists : ( recommendations based on artist name)
 * - Lastfm Username : (recommendations based on the lastfm username )
 * - Trending : ( recommendations based on trending artists)
 * 
 * Handles the events en then executes the corresponding function.
 * Navigates the user using the routers.
 */
const OptionView = View.extend({
    template: _.template($("#OptionTemplate").html()),
    initialize: function () {

    },
    events: {
        'click #lastfm': 'lastfmClickHandler',
        'click #artists': 'artistClickHandler',
        'submit #lastfm-form': 'formHandler',
        'submit #artist-form': 'artistHandler',
        'click #trending' : 'trendingHandler'
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
    },
    lastfmClickHandler: function (evt) {
        // Handles the click on the div to show the form.
        $('#lastfm').find('h2').empty();
        $('#lastfm').find('.hidden').fadeIn();
    },
    artistClickHandler: function (evt) {
        // Handles the click on the div to show the form.
        $('#artists').find('h2').empty();
        $('#artists').find('.hidden').fadeIn();
    },
    formHandler: function (event) {
        // Gets the value from the form and constructs the url.
        event.preventDefault();
        let name = $('#username').val();
        Backbone.history.navigate('recommendations/user/'+ name +'/' , { trigger: true });
    },
    artistHandler: function (event) {
         // Gets the value from the form and constructs the url.
        event.preventDefault();
        let artistname = $('#artistname').val();
        Backbone.history.navigate('recommendations/artist/'+ artistname +'/' , { trigger: true });
    },
    trendingHandler: function(event){
         // Gets the value from the form and constructs the url.
        event.preventDefault();
         Backbone.history.navigate('recommendations/trending/', { trigger: true });
    },
    tagName: 'div',
    className: 'mp-container'
});

export default OptionView;