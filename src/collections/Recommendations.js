import {Collection} from 'backbone';
import Recommendation from '../models/Recommendation';

/**
 * Collection for the Recommendations, must have an url and username to fetch.
 */
const Recommendations = Collection.extend({
    initialize: function (options) {
        this.artistname = options.artistname;
    },
    url: function () {
        return 'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + this.artistname + '&api_key=766d9ad802e564f2f59800e71319d1e9&format=json&limit=10';
    },
    model: Recommendation,
});

export default Recommendations;
