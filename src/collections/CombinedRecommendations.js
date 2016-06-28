import {Collection} from 'backbone';
import Recommendation from '../models/Recommendation';

/**
 * Combined collection of recommendations, used to store many Recommendations collections in. Without needing an url to fetch. 
 * 
 */
const CombinedRecommendations = Collection.extend({
    model: Recommendation,
});

export default CombinedRecommendations;
