import {Router} from 'backbone';
import OptionView from '../views/OptionView';
import $ from 'jquery';

import TrendingArtists from '../collections/TrendingArtists';
import CombinedRecommendations from '../collections/CombinedRecommendations';
import Recommendation from '../models/Recommendation';
import RecommendationsView from '../views/RecommendationsView';
import DashboardView from '../views/DashboardView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const TrendingRouter = Router.extend({
    routes: {
        'recommendations/trending/': 'trendingrecommendations',
    },
    options: function () {
        let option = new OptionView();
        $('#main').append(option.render().el);
    },
    trendingrecommendations: function () {
        // Empty the main div
        $('#main').empty();
        // Create the Dashboard View
        let dbView = new DashboardView();
        $('#main').append(dbView.render().el);

        getTrendingRecommendations();

        // Gets Trending Recommendations Based on the collection
        function getTrendingRecommendations() {
            let trendingCollection = new TrendingArtists();
            trendingCollection.fetch().then(function () {
                // Fetches the artists, then filters through the api response to get the artists
                let similarList = trendingCollection.pluck('artists');
                let similarartists = similarList[0].artist;
                showRecommendations(similarartists);
            });
            // Removes the loading animation
            $('.rolling').addClass('hidden');
        }

        /**
         * Shows the Trending Recommendations, puts all the items in the collection and then renders the collection view.
         * 
         * @param {any} recsList
         */
        function showRecommendations(recsList) {
            let recs = new CombinedRecommendations();
            recsList.forEach(function(element){
                let rec = new Recommendation(element);
                recs.add(rec);
            });

            let recsView = new RecommendationsView({ collection: recs });
            $('.rec-container').append(recsView.render().el);
            $('.rolling').addClass('hidden');
            
        }
    }
});

export default TrendingRouter;
