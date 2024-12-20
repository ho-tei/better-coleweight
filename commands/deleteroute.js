import { registerCommand } from "../commandManager";
import constants from "../util/constants";

registerCommand({
  aliases: ["deleteroute"],
  description: "Deletes a saved route.",
  options: "(route name)",
  category: "waypoints",
  execute: (args) => {
    if (args[1] == undefined)
      return ChatLib.chat(
        `${constants.PREFIX}&bUsage: /bcw deleteroute (name)`
      );
    let routes = JSON.parse(
      FileLib.read("BetterColeweight", "config/routes.json")
    );
    ChatLib.chat(
      `${constants.PREFIX}&b${
        delete routes[args[1]] ? "Deleted" : "Unabled to delete"
      }. Do "/bcw import" to see routes.`
    );
    FileLib.write(
      "BetterColeweight",
      "config/routes.json",
      JSON.stringify(routes)
    );
  },
});
