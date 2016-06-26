
import AppRouter from './routers/AppRouter';
import ArtistRouter from './routers/ArtistRouter';

var router = new AppRouter();
var router2 = new ArtistRouter();

Backbone.history.start({pushState: true, root: '/SeriousJS/MellonMusic/'});