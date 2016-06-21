import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const OptionView = View.extend({
    template: _.template($("#OptionTemplate").html()),
    event:{
        'click .submit-option' : 'clickHandler'
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
    },
    clickHandler : function(evt){
        console.log('clicky');
    },
    tagName: 'div',
    className: 'mp-container'
});

export default OptionView;