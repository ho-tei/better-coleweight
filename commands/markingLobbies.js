import { registerCommand } from "../commandManager";
import settings from "../settings";
import constants from "../util/constants";
const PREFIX = constants.PREFIX;
let lobbies = [];

register("chat", (server) => {
  if (!settings.lobbyMarking) return;
  if (lobbies.indexOf(server) > 0)
    ChatLib.chat(`${PREFIX}&aYou've been in this lobby!`);
  else lobbies.push(server);
}).setCriteria(/Sending to server ([A-Za-z0-9]+)\.\.\./g); // * Possibility of getting interefered by another mod hiding those
                                                            // TODO: Add notice for possible interferance (perhaps check if mods are installed that interfer?)

registerCommand({
  aliases: ["clearlobbies"],
  description: "Clears lobbies for lobby marking.",
  options: "",
  category: "miscellaneous",
  showInHelp: false,
  execute: (args) => {
    lobbies = [];
  },
});
