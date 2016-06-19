import {Model} from 'backbone';

/**
 * Model for every match in the collection
 *
 * @constructor
 */
const Artist = Model.extend({
    defaults: {
        name: 'artistname'
    }
});

export default Artist;
