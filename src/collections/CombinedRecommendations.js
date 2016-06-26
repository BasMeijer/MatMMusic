import {Collection} from 'backbone';
import Recommendation from '../models/Recommendation';

/**
 * Collection for the Artists
 */
const CombinedRecommendations = Collection.extend({
    model: Recommendation,
});

export default CombinedRecommendations;
