import {Model} from 'backbone';

/**
 * Model for every match in the collection
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
