import {Collection} from 'backbone';
import Artist from '../models/Artist';

/**
 * Collection for the Artists
 */
const Artists = Collection.extend({
    model: Artist,
    url: "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=bas-meijer&api_key=766d9ad802e564f2f59800e71319d1e9&format=json",
    parse: function (response) {
        var items = response.weeklyartistchart.artist;
        console.log(items);
        return items;
    }
});

export default Artists;
