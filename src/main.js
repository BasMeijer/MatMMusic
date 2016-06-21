import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';
// Models
import Recommendation from './models/Recommendation';
// Collections
import Artists from './collections/Artists';
import Recommendations from './collections/Recommendations';
import RecommendationsList from './collections/RecommendationsList';
// Views
import RecommendationView from './views/RecommendationView';
import OptionView from './views/OptionView';

var option = new OptionView();
$('body').append(option.render().el);

// var artists = new Artists();
// getArtistsListened(artists);


function getArtistsListened(artists) {
    artists.fetch().then(function () {
        var artistNameList = artists.pluck('name');

        artistNameList.forEach(function (element) {
            console.log("artist listened: " + element);
            var recsList = new Recommendations({ artistname: element });
            getRecommendations(recsList);
        });
    });
}


function getRecommendations(recsList) {
    recsList.fetch().then(function () {
        var similarList = recsList.pluck('similarartists');
        var similarartists = similarList[0].artist;

        similarartists.forEach(function (element) {
            var rec = new Recommendation(element);
            var recView = new RecommendationView({ model: rec });
            $('#main').append(recView.render().el);
            // allRecsList.add(rec);
        });
    });
}