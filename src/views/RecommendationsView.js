import _ from 'underscore';
import {View} from 'backbone';
import RecommendationView from '../views/RecommendationView';
import $ from 'jquery';

const RecommendationsView = View.extend({
    template: _.template($("#RecsViewTemplate").html()),
    className:'item-container',
    render:function(){
        this.el.innerHTML = this.template(this.collection);
        var ul = this.$('ul');

        this.collection.each(function(model){
            var recView = new RecommendationView({model : model});
            ul.append(recView.render().el);
        });
        return this;
    }
});


export default RecommendationsView;