import { registerCommand } from "../commandManager";
import { updateDrillStrength } from "../render/dilloStatsUpdate"; // ! How does this not get marked as an error??

registerCommand({
  aliases: ["setdrill"],
  description: "Sets current drill strength.",
  options: "",
  category: "settings",
  execute: (args) => {
    updateDrillStrength();
  },
});
