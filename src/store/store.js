import { legacy_createStore } from "redux";

const reducer = (state = '', action) => {
    switch (action.type) {
      case "SHOOTER": {
        return state = 'shooter';
      }
      case "MMORPG": {
        return state = 'mmorpg';
      }
      case "SPORTS": {
        return state = 'sports';
      }
      case "NONE": {
        return state = 'none'
      }
    }
  };

export const store = legacy_createStore(reducer);

export const shooter = { type: "SHOOTER"};
export const mmorpg = { type: "MMORPG"};
export const sports = { type: "SPORTS"};
export const none = { type: "NONE"};
