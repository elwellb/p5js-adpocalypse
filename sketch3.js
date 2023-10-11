let interval;
let consoleVar;
let msg;
let docFrag;

let txt = [
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "ACCESS GRANTED: LEVEL 10 CLEARANCE",
    "ERASING TRAILS...",
    "UPLOADING MALWARE: [███████]",
    "SYSTEM INFILTRATED: MAINFRAME SECURED",
    "DATA EXFILTRATION: [███--------]",
    "ALERT: FIREWALL BREACHED",
    "AUTHENTICATION: OVERRIDE SUCCESSFUL",
    "ACTIVATING BACKDOOR...",
    "NETWORK PENETRATION: 95% COMPLETE",
    "SYSTEM ACCESS GRANTED: ADMINISTRATOR PRIVILEGES UNLOCKED",
    "ANTIVIRUS OVERRIDE: MALWARE DEPLOYMENT INITIATED",
    "CIPHER BREAKTHROUGH: ENCRYPTED FILES DECRYPTED",
    "CRYPTO WALLET COMPROMISED: DIGITAL CURRENCY DRAINING",
    "BROWSER: " + navigator.userAgent,
    "PROCCESORS ACCESSED: 1/" + navigator.hardwareConcurrency,
    
]

function setup() {



    interval = window.setInterval(updateScreen, 200);
    consoleVar = document.getElementById("console");
    msg = document.querySelector(".msg");
    docFrag = document.createDocumentFragment();

    setTimeout(accessGranted, 8000);
}

function draw() {

}

function updateScreen() {
    txt.push(txt.shift());

    txt.forEach(function(e) {
        let p = document.createElement("p");
        p.textContent = e;
        docFrag.appendChild(p);
    });

    while (consoleVar.firstChild) {
        consoleVar.removeChild(consoleVar.firstChild);
    }
    consoleVar.appendChild(docFrag);
}

function accessGranted() {
    msg.style.background = "limegreen";
    msg.innerHTML = "ACCESS GRANTED";
    msg.style.boxShadow = "0 0 30px limegreen";
    consoleVar.style.display = "none";
    setInterval(nextPage, 3000);
}

function nextPage() {
    location = "index4.html"
}

