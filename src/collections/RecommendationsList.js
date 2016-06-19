import {Collection} from 'backbone';
import Recommendation from '../models/Recommendation';

/**
 * Collection for the Artists
 */
const RecommendationsList = Collection.extend({
    model: Recommendation
});

export default RecommendationsList;
