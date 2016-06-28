import {Model} from 'backbone';

/**
 * Model for every Recommendation
 *
 * @constructor
 */
const Recommendation = Model.extend({
    defaults: {
        name: 'artistname',
        url : "the artist url",
        image : "the artist image url",
    }
});

export default Recommendation;
