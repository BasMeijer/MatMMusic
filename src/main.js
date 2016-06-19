import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';
import Recommendation from './models/Recommendation';
import Artists from './collections/Artists';
import Recommendations from './collections/Recommendations';
import RecommendationsList from './collections/RecommendationsList';
import RecommendationView from './views/RecommendationView';


var artists = new Artists();
var allRecsList = new RecommendationsList();

artists.fetch().then(function () {
    var nameList = artists.pluck('name');
    nameList.forEach(function (element) {

        console.log("artist listened: " + element);
        var recs = new Recommendations({ artistname : element });

        recs.fetch().then(function () {

            var similarList = recs.pluck('similarartists');
            var artists = similarList[0].artist;

            artists.forEach(function(element){
                // console.log(element);
                var rec = new Recommendation(element);
                var recView = new RecommendationView({ model: rec });
                $('#main').append(recView.render().el);
                // allRecsList.add(rec);
            }); 
        });

    });
    
});

