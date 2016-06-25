import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const DashboardView = View.extend({
    template: _.template($("#DashboardTemplate").html()),

    render: function () {
        this.el.innerHTML = this.template(this.collection);

        return this;
    },
    tagName: 'div',
    className: 'rec-container'
});


export default DashboardView;