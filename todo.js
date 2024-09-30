let option = prompt("Would you like to ADD ,SHOW , DELETE");

let task = [];


while (option !== "quit") {
    if (option === "ADD") {
        let addtask = prompt("Would you like to ADD");
        task.push(addtask);
        console.log(`you adeed ${addtask}`);
        option = prompt("Would you like to ADD , SHOW , DELETE");
    }
    else if (option === "SHOW") {
        console.log(task);
    }

    else if (option === "DELETE") {
        let deletetask = prompt("Which Task Would you like to DELETE");
        task.splice(index - 1, 1)
    }
}