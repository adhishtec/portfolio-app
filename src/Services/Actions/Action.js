import { addValue, ON_VIEW_COUNT } from "../constent";

export const addVisit = (data) => {
  return {
    type: ON_VIEW_COUNT,
    data: data,
  };
};
