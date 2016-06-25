
import AppRouter from './routers/AppRouter';

var router = new AppRouter();
Backbone.history.start({pushState: true, root: '/SeriousJS/MellonMusic/'});


console.log('derp');