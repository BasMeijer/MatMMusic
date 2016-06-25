import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const RecommendationView = View.extend({
    template: _.template($("#RecViewTemplate").html()),
    tagName: 'div',
    className:'recommendation-item',
    render: function () {
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default RecommendationView;