import {Router} from 'backbone';
import OptionView from '../views/OptionView';
import $ from 'jquery';

import Recommendation from '../models/Recommendation';
import Artists from '../collections/Artists';
import Recommendations from '../collections/Recommendations';
import CombinedRecommendations from '../collections/CombinedRecommendations';
import RecommendationsView from '../views/RecommendationsView';
import DashboardView from '../views/DashboardView';
import ErrorView from '../views/ErrorView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const AppRouter = Router.extend({
    routes: {
        '': 'options',
        'recommendations/user/:username/': 'userrecommendations',
    },
    options: function () {
        let option = new OptionView();
        $('#main').append(option.render().el);
    },
    userrecommendations: function (username) {
        // Empty the main div
        $('#main').empty();
        // Create the Dashboard View
        let dbView = new DashboardView();
        $('#main').append(dbView.render().el);

        getArtists(username);

        /**
         * Gets artists the user listened to, then calls the getRecommendations function.
         */
        function getArtists(username) {
            // Creates the artists collection and calls the function to get the recommendations
            var artists = new Artists({ username: username });
            artists.fetch().then(function () {
                // Checks if the user was not found or if there was an error.
                if (artists == false || artists.length <= 0) {
                    let errorView = new ErrorView();
                    $('.rec-container').append(errorView.render().el);
                    $('.rolling').addClass('hidden');
                } else {
                    // Gets the bandnames the user listened to.
                    let artistNameList = artists.pluck('name');
                    getRecommendations(artistNameList);
                }
            });
        }

        /**
         * Gets the recommendations items, filters through the reponse and then creates a recommendation for each artist.
         * 
         * @param {any} artistName
         */
        function getRecommendations(artistNameList) {
            var allCollections = new CombinedRecommendations();
            var itemsProcessed = 0;

            // foreach bandname create a collection with similar artists and combines all those collections
            artistNameList.forEach(function (element) {
                var tempCollection = new Recommendations({ artistname: element });
                
                tempCollection.fetch({
                    success: function (collection, response, options) {
                        // get the similar artist objects from the collection
                        let similarList = tempCollection.pluck('similarartists');
                        let similarartists = similarList[0].artist;
                        // make an recommendation object for each artist and adds it to the combined collection
                        similarartists.forEach(function (element) {
                            let rec = new Recommendation(element);
                            allCollections.add(rec);
                        });

                        // tracks if all the fetches are done, then calls the showRecommendations function
                        itemsProcessed++;
                        if (itemsProcessed === artistNameList.length) {
                            showRecommendations(allCollections);
                        }
                    },
                    error: function (collection, response, options) {
                        console.log("error");
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
            let recsView = new RecommendationsView({ collection: recsList });
            $('.rec-container').append(recsView.render().el);
            $('.rolling').addClass('hidden');
        }
    }
});

export default AppRouter;
