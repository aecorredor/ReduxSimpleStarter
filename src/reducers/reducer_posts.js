import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      // const post = action.payload.data; |
      // const newState = { ...state, };   |-----------> ES5 WAY
      // newState[post.id] = post;         |
      // return newState;                  |

      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      // action.payload.data is an array: [post1, post2]
      return _.mapKeys(action.payload.data, 'id');

    case DELETE_POST:
      // removes the element with key=action.paylod from state object
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
