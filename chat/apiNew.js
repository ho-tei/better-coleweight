import constants from "../util/constants";
const PREFIX = constants.PREFIX;

//! Doesn't even work -> got moved to developer.hypixel.net
register("chat", (key) => {
  ChatLib.command(`bcw setkey ${key}`, true);
}).setCriteria(/Your new API key is (.+)/);

export default "";
