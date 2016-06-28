// Import the diffrent Routers
import AppRouter from './routers/AppRouter';
import ArtistRouter from './routers/ArtistRouter';
import TrendingRouter from './routers/TrendingRouter';

(function () {
    /**
     * Runs after dom is ready
     */
    let init = function () {

        // Create all the needed Routers
        var appRouter = new AppRouter();
        var artistRouter = new ArtistRouter();
        var trendingRouter = new TrendingRouter();

        Backbone.history.start({ pushState: true, root: '/SeriousJS/MellonMusic/' });
    };

    window.addEventListener('load', init);
})();