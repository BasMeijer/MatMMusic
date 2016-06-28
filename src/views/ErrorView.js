import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

/**
 * The Errorview shows a small warning to the user.
 * Currently shown when the username or artist can't be found.
 */
const ErrorView = View.extend({
    template: _.template($("#ErrorTemplate").html()),

    render: function () {
        this.el.innerHTML = this.template(this.collection);
        return this;
    },
    tagName: 'div',
    className: 'error-container'

});


export default ErrorView;