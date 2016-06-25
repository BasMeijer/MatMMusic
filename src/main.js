import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';
// Models
import Recommendation from './models/Recommendation';
// Collections
import Artists from './collections/Artists';
import Recommendations from './collections/Recommendations';
// Views
import RecommendationView from './views/RecommendationView';
import OptionView from './views/OptionView';
// Routers
import AppRouter from './routers/AppRouter';

document.addEventListener("User", function (e) {
    // var artists = new Artists({ username: e.detail.username });
    // getArtistsListened(artists);
});

var router = new AppRouter();
Backbone.history.start({pushState: true, root: '/SeriousJS/MellonMusic/'});
