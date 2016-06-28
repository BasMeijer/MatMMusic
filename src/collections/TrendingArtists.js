import {Collection} from 'backbone';
import TrendingArtist from '../models/TrendingArtist';

/**
 * Collection for the Trending Artists.
 */
const TrendingArtists = Collection.extend({
    url: function(){
        return 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=766d9ad802e564f2f59800e71319d1e9&format=json';
    },
    model:TrendingArtist
});

export default TrendingArtists;


