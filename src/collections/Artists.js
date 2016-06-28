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
        // Checks if there was an error loading the artists.
        if(response.weeklyartistchart == undefined){
            return false;
        }else{
            var items = response.weeklyartistchart.artist;
            return items;
        }
    }
});

export default Artists;


