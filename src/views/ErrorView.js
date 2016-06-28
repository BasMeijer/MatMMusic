import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

/**
 * The DashboardView holds the nav and loading animation. 
 * Can be extended to hold extra interface elements like header/footer/etc.
 */
const ErrorView = View.extend({
    template: _.template($("#ErrorTemplate").html()),

    render: function () {
        this.el.innerHTML = this.template(this.collection);

        return this;
    }
});


export default ErrorView;