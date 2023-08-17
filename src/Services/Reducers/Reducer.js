/* eslint-disable default-case */
import { addVisit } from "../Actions/Action";
import { ON_VIEW_COUNT } from "../constent";

const initialState = {
  visitorData: [],
};

export default function visitorItems(state = initialState, action) {
  switch (action.type) {
    case ON_VIEW_COUNT:
      return {
        ...state,
        cardData: action.data,
      };

      break;
    default:
      return state;
  }
}
