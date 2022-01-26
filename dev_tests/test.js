const cp = require("child_process");

function buildVls() {

}

function installVls() {
    cp.exec("v install vls", (error, stdout, stderr) => {
        if (error || stderr) {
            console.log(`failed to install vls, error: ${error.message}`);
            return;
        }

        if ( stdout.includes("Installed: False") || !(stdout.includes("Location:")) ) {
            console.log("failed to install vls package ${stdout}");
        } else {
            console.log("Succesfully installed vls package");
        }

    })
}

cp.exec("v show vls", (error, stdout, stderr) => {
    if (error || stderr) {
        console.log(`failed to check vls installation, error: ${error.message}`);
        return;
    }

    if ( stdout.includes("Installed: False") || !(stdout.includes("Location:")) ) {
        console.log("not installed");

    } else {
        console.log("installed");
    }

/*
    for (const entry in stdout.split("\n")) {
        var line = entry.split(":")

        if ( line[0].includes("Installed") ) {
            if ( !(JSON.parse(line[1].toLowerCase())) ) {
                console.log("vls not installed");
                break
            }
        } else {
            console.log("vls installed");
            break
        }
    }
*/
    //console.log(`stdout: ${a}`);
});
