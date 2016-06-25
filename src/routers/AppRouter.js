import {Router} from 'backbone';
import OptionView from '../views/OptionView';
import $ from 'jquery';

import Recommendation from '../models/Recommendation';
import Artists from '../collections/Artists';
import Recommendations from '../collections/Recommendations';
import RecommendationsView from '../views/RecommendationsView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const AppRouter = Router.extend({
    routes: {
        '': 'options',
        'recommendations/:username': 'recommendations',
    },
    options: function () {
        var option = new OptionView();
        $('body').append(option.render().el);
    },
    recommendations: function (username) {
        var artists = new Artists({ username: username });
        getArtistsListened(artists);
        /**
         * Gets the artists/bands the user listened to in that last week.
         * Then calls the getRecommendations function to get recommendations based on the listened artists.
         * 
         * @param {any} artists
         */
        function getArtistsListened(artists) {
            artists.fetch().then(function () {
                var artistNameList = artists.pluck('name');
                artistNameList.forEach(function (element) {
                    getRecommendations(new Recommendations({ artistname: element }));
                });
            });
        }

        /**
         * Gets 100 recommendations based on the given collection. Then Creates the collection views.
         * 
         * @param {any} recsList
         */
        function getRecommendations(recsList) {
            recsList.fetch().then(function () {
                var similarList = recsList.pluck('similarartists');
                var similarartists = new Recommendations(similarList[0].artist);
                console.log(similarartists);
                var View = new RecommendationsView({collection: similarartists});
                $('#main').append(View.render().el);
            });
        }
    }
});

export default AppRouter;
