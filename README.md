MATMMusic is an application build for the course Frontend Development.

Build with Backbone + Webpack and Babel for ES6 Features.

The application generates music / artist recommendations based on your input.


The user can generate recommendations in 3 ways:

1. : Based on a artist name. (generates 10 similar recommendations.)

Collections used :
http://www.last.fm/api/show/artist.getSimilar

2. : Based on a last.fm username. (generates 10 recommendations for every artist they listened to this week.)

Collections Used : 
http://www.last.fm/api/show/user.getWeeklyArtistChart
http://www.last.fm/api/show/artist.getSimilar

3. : Based on trending artists. ( generates 50 recommendations based on the most trending ones globally. )

Collections Used : 
http://www.last.fm/api/show/chart.getTopArtists