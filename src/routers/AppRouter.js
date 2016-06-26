import {Router} from 'backbone';
import OptionView from '../views/OptionView';
import $ from 'jquery';

import Recommendation from '../models/Recommendation';
import Artists from '../collections/Artists';
import Recommendations from '../collections/Recommendations';
import CombinedRecommendations from '../collections/CombinedRecommendations';

import RecommendationView from '../views/RecommendationView';
import RecommendationsView from '../views/RecommendationsView';
import DashboardView from '../views/DashboardView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const AppRouter = Router.extend({
    routes: {
        '': 'options',
        'recommendations/user/:username/': 'userrecommendations',
        'recommendations/artist/:artistname/': 'artistsrecommendations',
    },
    options: function () {
        var option = new OptionView();
        $('#main').append(option.render().el);
    },
    userrecommendations: function (username) {
        // Empty the main div
        $('#main').empty();
        // Create the Dashboard View
        var dbView = new DashboardView();
        $('#main').append(dbView.render().el);

        getArtists(username);

        /**
         * Gets artists the user listened to, then calls the getRecommendations function.
         */
        function getArtists(username) {
            // Creates the artists collection and calls the function to get the recommendations
            var artists = new Artists({ username: username });
            artists.fetch().then(function () {
                // Gets the bandnames the user listened to.
                var artistNameList = artists.pluck('name');
                getRecommendations(artistNameList);
            });
        }

        function getRecommendations(artistNameList) {
            var allCollections = new CombinedRecommendations();
            var itemsProcessed = 0;

            // foreach bandname create a collection with similar artists and combines all those collections
            artistNameList.forEach(function (element) {
                var tempCollection = new Recommendations({ artistname: element });

                tempCollection.fetch({
                    success: function (collection, response, options) {
                        // get the similar artist objects from the collection
                        var similarList = tempCollection.pluck('similarartists');
                        var similarartists = similarList[0].artist;
                        // make an recommendation object for each artist and adds it to the combined collection
                        similarartists.forEach(function (element) {
                            var rec = new Recommendation(element);
                            allCollections.add(rec);
                        });

                        // tracks if all the fetches are done, then calls the showRecommendations function
                        itemsProcessed++;
                        if (itemsProcessed === artistNameList.length) {
                            console.log("done with all");
                            showRecommendations(allCollections);
                        }
                    },
                    error: function (collection, response, options) {
                        console.log("error")
                    }
                });
            });
        }

        /**
         * 
         * Creates a View for the Recommendations Collection.
         * @param {any} recsList
         */
        function showRecommendations(recsList) {
            var recsView = new RecommendationsView({ collection: recsList });
            $('.rec-container').append(recsView.render().el);
            $('.rolling').addClass('hidden');
        }
    }
});

export default AppRouter;
