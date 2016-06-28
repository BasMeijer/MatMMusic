import {Model} from 'backbone';

/**
 * Model for the Artists from the API
 *
 * @constructor
 */
const Artist = Model.extend({
    defaults: {
        name: 'artistname'
    }
});

export default Artist;
