<<<<<<< HEAD
import { registerCommand } from "../commandManager"
import constants from "../util/constants"
var partyMembers = {};
var waitForPartyAccept = false;
registerCommand({
    aliases: ["party"],
    description: "Party commands",
    options: ["(add, invite, remove, disband, inviteall)"],
    subcommands: [["add", "invite", "remove", "disband", "inviteall"]],
    category: "info",
    execute: (args) => {
        // Filter invalid arguments
        if(args[1] == undefined) {
            return ChatLib.chat(`${constants.PREFIX}&eUnknown usage! Hit tab on "/bcw party" to see usages.`)
        }

        switch(args[1].toLowerCase()) {
            case "add":
                if(args[2] == undefined) {
                    return ChatLib.chat(`${constants.PREFIX}&cYou need to specify a person to add to the party!`);
                }
                partyMembers[args[2]] = true;
                return ChatLib.chat(`${constants.PREFIX}&aAdded &6${args[2]}&a to the party list!`);
            
            case "invite":
                if(args[2] == undefined)
                    return ChatLib.chat(`${constants.PREFIX}&cYou need to specify a person to add to the party!`);
                
                ChatLib.command(`p ${args[2]}`)
                waitForPartyAccept = true;
                return; 

            case "remove":
                if(args[2] == undefined) {
                    return ChatLib.chat(`${constants.PREFIX}&cYou need to specify a person to remove from the party!`);
                }
                if(!partyMembers[args[2]] || partyMembers[args[2]] == undefined) {
                    return ChatLib.chat(`${constants.PREFIX}&6${args[2]}&c is not in your party!`)
                }
                delete partyMembers[args[2]];
                return ChatLib.chat(`${constants.PREFIX}&cRemoved &6${args[2]}&c from the party!`)
            
            case "disband":
                partyMembers = {};
                return ChatLib.chat(`${constants.PREFIX}&aDisbanded party`)
                
            
            case "inviteall":
                return inviteAllMembers();
            

        }
    }
})

function getAllMembers() {
    var _members = "";
    Object.keys(partyMembers).forEach((member) => {
        _members = members.concat(member, " ");
    });
    return _members;
}

function inviteAllMembers() {
    var members = "";
    Object.keys(partyMembers).forEach((member) => {
        members = members.concat(member, " ");
    });
    ChatLib.command(`p invite ${members}`)
};

register("chat", (player) => {
	if(waitForPartyAccept)
        waitForPartyAccept = false;
}).setChatCriteria("-----------------------------------------------------\n${player} has invited you to join their party!\nYou have 60 seconds to accept. Click here to join!\n-----------------------------------------------------")

register("chat", (username, message, event) => {
    if(Object.keys(partyMembers).length == 0) {
        var _members = message.split(", ")
        _members.forEach(member => {
            partyMembers[member] = true;
        });
    }
    ChatLib.chat(`${constants.PREFIX}&aYou are in a party with: &6${message}`);
    cancel(event)
}).setChatCriteria("Party > ${username}: [BCW-Members] ${message}")

register("chat", (player, event) => {
	if(waitForPartyAccept) {
        waitForPartyAccept = false;
        partyMembers[player] = true;
        ChatLib.chat(`${constants.PREFIX}&aAdded&6 ${player}&a to the party!`);
        ChatLib.command("p disband")
        cancel(event);
    }
}).setChatCriteria("${player} joined the party.")
=======
import { registerCommand } from "../commandManager";
import constants from "../util/constants";
var partyMembers = {};
registerCommand({
  aliases: ["party"],
  description: "Party commands",
  options: ["(invite, remove, disband, inviteall"],
  subcommands: [["add", "remove", "inviteall"]],
  category: "info",
  execute: (args) => {
    // Filter invalid arguments
    if (args[1] == undefined) {
      return ChatLib.chat(
        `${constants.PREFIX}&eUnknown usage! Hit tab on "/bcw party" to see usages.`
      );
    }

    switch (args[1].toLowerCase()) {
      case "invite":
        if (args[2] == undefined) {
          return ChatLib.chat(
            `${constants.PREFIX}&cYou need to specify a person to add to the party!`
          );
        }
        listenForPartyJoin = true;
        ChatLib.chat(
          `${constants.PREFIX}&aInviting &6${args[2]}&a to the party..`
        );
        ChatLib.command(`p invite ${args[2]}`);
        setTimeout(() => {
          if (listenForPartyJoin == false) {
            clearTimeout(this);
          }
        }, 100);
        clea;
        partyMembers[args[2]] = true;
        return ChatLib.chat(
          `${constants.PREFIX}&aAdded &6${args[2]}&a to the party!`
        );

      case "remove":
        if (args[2] == undefined) {
          return ChatLib.chat(
            `${constants.PREFIX}&cYou need to specify a person to remove from the party!`
          );
        }
        if (!partyMembers[args[2]] || partyMembers[args[2]] == undefined) {
          return ChatLib.chat(
            `${constants.PREFIX}&6${args[2]}&a is not in your party!`
          );
        }
        delete partyMembers[args[2]];
        return ChatLib.chat(
          `${constants.PREFIX}&cRemoved &6${args[2]}&c from the party!`
        );

      case "disband":
        partyMembers = {};
        ChatLib.chat(`${constants.PREFIX}&aDisbanded party`);

      case "inviteall":
        var members = "";
        Object.keys(partyMembers).forEach((member) => {
          members = members.concat(member, " ");
        });
        ChatLib.chat(members);
        ChatLib.command(`p invite ${members}`);
    }
  },
});

register("chat", (playerName) => {
  listenForPartyJoin = false;
}).setCriteria(/Party > (?:\[.*?\] )?([^ ]{1,16}) [BCW] Joined/);
>>>>>>> 11ea832adefbb18778864f1083e437a7fb1260ea
