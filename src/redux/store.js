import { init } from "@rematch/core";
import games from "./models/games";
import filters from "./models/filters";

const store = init({ models: { games, filters }});

export default store;