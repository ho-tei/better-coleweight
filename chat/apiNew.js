import constants from "../util/constants"
const PREFIX = constants.PREFIX


register("chat", (key) => {
    ChatLib.command(`bcw setkey ${key}`, true)
}).setCriteria(/Your new API key is (.+)/)


export default ""