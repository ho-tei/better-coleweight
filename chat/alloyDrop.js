//Written by _ryt
import axios from "../../axios"

//? Is this really useful nowadays?
// Previous usecase was to track when drop chances reset but now??
register("chat", (playerName) => {
    axios.get("https://ninjune.dev/api/alloy-drop/on-drop?username="+playerName)
}).setCriteria(/ALLOY! (?:\[.*?\] )?([^ ]{1,16}) just found a Divan's Alloy!/)


export default ""