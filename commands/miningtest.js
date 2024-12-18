import { registerCommand } from "../commandManager";
import constants from "../util/constants";

registerCommand({
  aliases: ["miningtest", "test"],
  description: "Resets guis related to mining tests.",
  options: "",
  category: "miscellaneous",
  execute: (args) => {
    ChatLib.command("bcw reload all", true); // ? Why not internally call functions?
    ChatLib.command("soopyclearminingprofit", true); // ? Is it not possible to create a reference, as soopy is a dependency?
    ChatLib.chat(
      `${constants.PREFIX}&bGuis reloaded! Make sure to check your drill fuel!`
    );
  },
});
