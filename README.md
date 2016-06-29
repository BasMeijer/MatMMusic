## MATMMusic
### An application build for the course Frontend Development.

Build with Backbone + Webpack and Babel for ES6 Features.

The application generates music / artist recommendations based on your input. Users without an last.fm account
can use the 2 most basic features to generate recommendations based on an artistname and based on trending artists.

Users with an last.fm account can use their account name to generate a personalized list of recommendations based on their listening behaviour.

The users can generate recommendations in 3 ways:

#### Based on a artist name. (generates 10 similar recommendations.)

Collections used :
- http://www.last.fm/api/show/artist.getSimilar

#### Based on a last.fm username. (generates 10 recommendations for every artist they listened to this week.)

Collections Used : 
- http://www.last.fm/api/show/user.getWeeklyArtistChart
- http://www.last.fm/api/show/artist.getSimilar

#### Based on trending artists. ( generates 50 recommendations based on the most trending ones globally. )

Collections Used : 
- http://www.last.fm/api/show/chart.getTopArtists