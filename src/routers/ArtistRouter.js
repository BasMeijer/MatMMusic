import {Router} from 'backbone';
import OptionView from '../views/OptionView';
import $ from 'jquery';

import Recommendation from '../models/Recommendation';
import Artists from '../collections/Artists';
import Recommendations from '../collections/Recommendations';
import RecommendationView from '../views/RecommendationView';
import RecommendationsView from '../views/RecommendationsView';
import DashboardView from '../views/DashboardView';
import ErrorView from '../views/ErrorView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const ArtistRouter = Router.extend({
    routes: {
        'recommendations/artist/:artistname/': 'artistsrecommendations',
    },
    options: function () {
        var option = new OptionView();
        $('#main').append(option.render().el);
    },
    artistsrecommendations: function (bandname) {
        // Empty the main div
        $('#main').empty();
        // Create the Dashboard View
        var dbView = new DashboardView();
        $('#main').append(dbView.render().el);

        getRecommendations(bandname);


        /**
         * Gets the recommendations items, filters through the reponse and then creates a recommendation for each artist.
         * 
         * @param {any} artistName
         */
        function getRecommendations(artistName) {
            var tempCollection = new Recommendations({ artistname: artistName });
            tempCollection.fetch().then(function () {
                // get the similar artist objects from the collection
                var similarList = tempCollection.pluck('similarartists');
                // Checks if something went from and shows an errorview if so.
                if (similarList[0] == null) {
                    var errorView = new ErrorView();
                    $('.rec-container').append(errorView.render().el);
                } else {
                    var similarartists = similarList[0].artist;
                    // make an recommendation object for each artist and adds it to the combined collection
                    similarartists.forEach(function (element) {
                        var rec = new Recommendation(element);
                        var recView = new RecommendationView({ model: rec });
                        $('.rec-container').append(recView.render().el);
                    });
                }
            });
            // stops the loading animation
            $('.rolling').addClass('hidden');
        }


        /**
         * Shows the recommendations on screen with the RecommendationsView
         * 
         * @param {any} recsList
         */
        function showRecommendations(recsList) {
            var recsView = new RecommendationsView({ collection: recsList });
            $('.rec-container').append(recsView.render().el);
            $('.rolling').addClass('hidden');
        }

    }
});

export default ArtistRouter;
