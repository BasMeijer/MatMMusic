import {Collection} from 'backbone';
import Artist from '../models/Artist';

/**
 * Collection for the Artists
 */
const Artists = Collection.extend({
    initialize: function (options) {
        this.username = options.username;
    },
    url: function(){
        return 'http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=' + this.username + '&api_key=766d9ad802e564f2f59800e71319d1e9&format=json';
    },
    model: Artist,
    parse: function (response) {
        var items = response.weeklyartistchart.artist;
        // console.log(items);
        return items;
    }
});

export default Artists;


