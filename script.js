// ==UserScript==
// @name         s0ource io automation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       AbdoRayan404
// @match        http://s0urce.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=s0urce.io
// @grant        none
// ==/UserScript==

(function() {
    var UrlWordsMap = {
  "http://s0urce.io/client/img/word/e/26": "poly",
  "http://s0urce.io/client/img/word/e/36": "init",
  "http://s0urce.io/client/img/word/e/40": "dir",
  "http://s0urce.io/client/img/word/e/46": "get",
  "http://s0urce.io/client/img/word/e/47": "upload",
  "http://s0urce.io/client/img/word/e/5": "data",
  "http://s0urce.io/client/img/word/e/50": "send",
  "http://s0urce.io/client/img/word/e/51": "buffer",
  "http://s0urce.io/client/img/word/e/61": "intel",
  "http://s0urce.io/client/img/word/e/7": "num",
  "http://s0urce.io/client/img/word/e/8": "anon",
  "http://s0urce.io/client/img/word/m/19": "urlcheck",
  "http://s0urce.io/client/img/word/m/26": "sizeof",
  "http://s0urce.io/client/img/word/m/54": "disconnect",
  "http://s0urce.io/client/img/word/m/59": "setstats",
  "http://s0urce.io/client/img/word/m/61": "process",
  "http://s0urce.io/client/img/word/e/3": "point",
  "http://s0urce.io/client/img/word/e/45": "write",
  "http://s0urce.io/client/img/word/m/34": "eventtype",
  "http://s0urce.io/client/img/word/e/1": "part",
  "http://s0urce.io/client/img/word/m/37": "getid",
  "http://s0urce.io/client/img/word/e/30": "port",
  "http://s0urce.io/client/img/word/e/19": "join",
  "http://s0urce.io/client/img/word/e/11": "val",
  "http://s0urce.io/client/img/word/m/4": "newline",
  "http://s0urce.io/client/img/word/e/28": "bit",
  "http://s0urce.io/client/img/word/m/0": "download",
  "http://s0urce.io/client/img/word/e/57": "system",
  "http://s0urce.io/client/img/word/m/24": "responder",
  "http://s0urce.io/client/img/word/e/6": "emit",
  "http://s0urce.io/client/img/word/e/49": "global",
  "http://s0urce.io/client/img/word/e/24": "info",
  "http://s0urce.io/client/img/word/m/11": "findpackage",
  "http://s0urce.io/client/img/word/m/50": "accountname",
  "http://s0urce.io/client/img/word/m/49": "package",
  "http://s0urce.io/client/img/word/e/58": "signal",
  "http://s0urce.io/client/img/word/m/22": "thread",
  "http://s0urce.io/client/img/word/e/55": "key",
  "http://s0urce.io/client/img/word/e/4": "list",
  "http://s0urce.io/client/img/word/m/17": "generate",
  "http://s0urce.io/client/img/word/m/15": "proxy",
  "http://s0urce.io/client/img/word/m/25": "mysql",
  "http://s0urce.io/client/img/word/e/27": "user",
  "http://s0urce.io/client/img/word/m/29": "setcookie",
  "http://s0urce.io/client/img/word/e/25": "load",
  "http://s0urce.io/client/img/word/e/31": "stat",
  "http://s0urce.io/client/img/word/m/8": "setping",
  "http://s0urce.io/client/img/word/e/60": "root",
  "http://s0urce.io/client/img/word/m/43": "threat",
  "http://s0urce.io/client/img/word/m/14": "number",
  "http://s0urce.io/client/img/word/m/23": "command",
  "http://s0urce.io/client/img/word/e/16": "pass",
  "http://s0urce.io/client/img/word/m/32": "encode",
  "http://s0urce.io/client/img/word/e/53": "cookies",
  "http://s0urce.io/client/img/word/m/6": "constructor",
  "http://s0urce.io/client/img/word/m/65": "writefile",
  "http://s0urce.io/client/img/word/e/44": "client",
  "http://s0urce.io/client/img/word/m/9": "setnewid",
  "http://s0urce.io/client/img/word/e/56": "ping",
  "http://s0urce.io/client/img/word/m/56": "userport",
  "http://s0urce.io/client/img/word/m/64": "hexagon",
  "http://s0urce.io/client/img/word/m/18": "getping",
  "http://s0urce.io/client/img/word/e/35": "ghost",
  "http://s0urce.io/client/img/word/m/10": "username",
  "http://s0urce.io/client/img/word/m/35": "decrypt",
  "http://s0urce.io/client/img/word/m/57": "hostserver",
  "http://s0urce.io/client/img/word/m/21": "config",
  "http://s0urce.io/client/img/word/e/18": "set",
  "http://s0urce.io/client/img/word/m/31": "datatype",
  "http://s0urce.io/client/img/word/e/52": "url",
  "http://s0urce.io/client/img/word/m/13": "listconfig",
  "http://s0urce.io/client/img/word/e/9": "add",
  "http://s0urce.io/client/img/word/m/47": "module",
  "http://s0urce.io/client/img/word/m/39": "gridheight",
  "http://s0urce.io/client/img/word/e/38": "reset",
  "http://s0urce.io/client/img/word/m/46": "export",
  "http://s0urce.io/client/img/word/e/41": "handle",
  "http://s0urce.io/client/img/word/m/48": "serverproxy",
  "http://s0urce.io/client/img/word/m/33": "length",
  "http://s0urce.io/client/img/word/e/43": "xml",
  "http://s0urce.io/client/img/word/m/2": "filedir",
  "http://s0urce.io/client/img/word/e/33": "delete",
  "http://s0urce.io/client/img/word/m/30": "loadbytes",
  "http://s0urce.io/client/img/word/m/44": "fillgrid",
  "http://s0urce.io/client/img/word/e/37": "temp",
  "http://s0urce.io/client/img/word/m/53": "newserver",
  "http://s0urce.io/client/img/word/e/34": "net",
  "http://s0urce.io/client/img/word/m/27": "getfile",
  "http://s0urce.io/client/img/word/m/55": "account",
  "http://s0urce.io/client/img/word/m/41": "getlog",
  "http://s0urce.io/client/img/word/e/17": "right",
  "http://s0urce.io/client/img/word/m/60": "response",
  "http://s0urce.io/client/img/word/e/10": "add",
  "http://s0urce.io/client/img/word/h/27": "systemportkey",
  "http://s0urce.io/client/img/word/h/8": "disconnectserver",
  "http://s0urce.io/client/img/word/h/6": "eventlistdir",
  "http://s0urce.io/client/img/word/h/11": "patcheventlog",
  "http://s0urce.io/client/img/word/h/52": "decryptdatabatch",
  "http://s0urce.io/client/img/word/h/24": "respondertimeout",
  "http://s0urce.io/client/img/word/h/37": "getpartoffile",
  "http://s0urce.io/client/img/word/h/19": "createfilethread",
  "http://s0urce.io/client/img/word/h/51": "bufferpingset",
  "http://s0urce.io/client/img/word/h/43": "uploaduserstats",
  "http://s0urce.io/client/img/word/h/7": "generatecodepack",
  "http://s0urce.io/client/img/word/h/22": "fileexpresslog",
  "http://s0urce.io/client/img/word/h/14": "changeusername",
  "http://s0urce.io/client/img/word/h/53": "getmysqldomain",
  "http://s0urce.io/client/img/word/h/28": "loadaltevent",
  "http://s0urce.io/client/img/word/h/38": "hostnewserver",
  "http://s0urce.io/client/img/word/h/3": "batchallfiles",
  "http://s0urce.io/client/img/word/h/0": "getdatapassword",
  "http://s0urce.io/client/img/word/h/40": "loadregisterlist",
  "http://s0urce.io/client/img/word/h/45": "blockthreat",
  "http://s0urce.io/client/img/word/h/46": "disconnectchannel",
  "http://s0urce.io/client/img/word/h/30": "changepassword",
  "http://s0urce.io/client/img/word/h/25": "createnewsocket",
  "http://s0urce.io/client/img/word/h/44": "removeoldcookie",
  "http://s0urce.io/client/img/word/h/54": "includedirectory",
  "http://s0urce.io/client/img/word/h/36": "removenewcookie",
  "http://s0urce.io/client/img/word/h/1": "getxmlprotocol",
  "http://s0urce.io/client/img/word/h/34": "dodecahedron",
  "http://s0urce.io/client/img/word/h/31": "exportconfigpackage",
  "http://s0urce.io/client/img/word/h/12": "createnewpackage",
  "http://s0urce.io/client/img/word/h/9": "ghostfilesystem",
  "http://s0urce.io/client/img/word/h/23": "tempdatapass",
  "http://s0urce.io/client/img/word/h/32": "statusofprocess",
  "http://s0urce.io/client/img/word/e/2": "left",
  "http://s0urce.io/client/img/word/e/15": "type",
  "http://s0urce.io/client/img/word/h/41": "checkhttptype",
  "http://s0urce.io/client/img/word/h/49": "wordcounter",
  "http://s0urce.io/client/img/word/m/12": "vector",
  "http://s0urce.io/client/img/word/e/0": "domain",
  "http://s0urce.io/client/img/word/m/38": "connect",
  "http://s0urce.io/client/img/word/h/10": "emitconfiglist",
  "http://s0urce.io/client/img/word/h/2": "mergesocket",
  "http://s0urce.io/client/img/word/h/15": "rootcookieset",
  "http://s0urce.io/client/img/word/h/26": "create2axisvector",
  "http://s0urce.io/client/img/word/h/16": "systemgridtype",
  "http://s0urce.io/client/img/word/h/50": "setnewproxy",
  "http://s0urce.io/client/img/word/h/29": "destroybatch",
  "http://s0urce.io/client/img/word/h/33": "sendintelpass",
  "http://s0urce.io/client/img/word/h/5": "deleteallids",
  "http://s0urce.io/client/img/word/h/35": "channelsetpackage",
  "http://s0urce.io/client/img/word/h/17": "getfirewallchannel",
  "http://s0urce.io/client/img/word/h/21": "joinnetworkclient",
  "http://s0urce.io/client/img/word/h/13": "create3axisvector",
  "http://s0urce.io/client/img/word/h/18": "sizeofhexagon",
  "http://s0urce.io/client/img/word/h/42": "httpbuffersize",
  "http://s0urce.io/client/img/word/h/47": "loadloggedpassword",
  "http://s0urce.io/client/img/word/m/36": "encryptfile",
  "http://s0urce.io/client/img/word/e/59": "size",
  "http://s0urce.io/client/img/word/h/20": "unpacktmpfile",
  "http://s0urce.io/client/img/word/h/39": "callmodule",
  "http://s0urce.io/client/img/word/h/4": "encryptunpackedbatch",
  "http://s0urce.io/client/img/word/h/48": "encodenewfolder",
  "http://s0urce.io/client/img/word/m/16": "setport",
  "http://s0urce.io/client/img/word/e/54": "http",
  "http://s0urce.io/client/img/word/e/48": "bytes",
  "http://s0urce.io/client/img/word/m/45": "newhost",
  "http://s0urce.io/client/img/word/e/13": "event",
  "http://s0urce.io/client/img/word/m/28": "syscall",
  "http://s0urce.io/client/img/word/e/29": "remove",
  "http://s0urce.io/client/img/word/m/1": "filetype",
  "http://s0urce.io/client/img/word/e/12": "call",
  "http://s0urce.io/client/img/word/e/20": "count",
  "http://s0urce.io/client/img/word/m/20": "password",
  "http://s0urce.io/client/img/word/m/7": "getinfo",
  "http://s0urce.io/client/img/word/e/22": "socket",
  "http://s0urce.io/client/img/word/m/58": "getkey",
  "http://s0urce.io/client/img/word/m/3": "encrypt",
  "http://s0urce.io/client/img/word/m/62": "userid",
  "http://s0urce.io/client/img/word/m/5": "channel",
  "http://s0urce.io/client/img/word/e/23": "com",
  "http://s0urce.io/client/img/word/m/40": "decryptfile",
  "http://s0urce.io/client/img/word/m/51": "gridwidth",
  "http://s0urce.io/client/img/word/e/39": "log",
  "http://s0urce.io/client/img/word/m/63": "server",
  "http://s0urce.io/client/img/word/m/52": "getpass",
  "http://s0urce.io/client/img/word/e/32": "host",
  "http://s0urce.io/client/img/word/e/14": "loop",
  "http://s0urce.io/client/img/word/e/42": "file"
}
    var current = "";
    var runtimeSettings = {
        port: "1"
    }
    var settings = {
        hackingMessage: "Yup. power of Automation"
    }

    function StartGUI(){
        let windowHTML = (`<div class="window" style="border-color: rgb(0,0,0); color: rgb(191, 207, 210); height: 320px; width: 480px; z-index: 10; top: 11.5%; right: 40px">`+
                              '<div id="custom-gui-bot-title" class="window-title"> </div>'+
                              `<div class="window-content" style="height: 320px; width: 480px; ">`+
                                  '<div id="start-hack" class="button" style="display: block; margin-bottom: 15px">'+
                                      'Hack Top player'+
                                  '</div>'+
                                  '<div id="cracking-status" style="display: block; margin-bottom: 15px">'+
                                      'Cracking: False'+
                                  '</div>'+
                                  '<div id="cracking-status" style="display: block; margin-bottom: 15px">'+
                                      `Hacking message: ${settings.hackingMessage}`+
                                  '</div>'+
                              '</div>'+
                         '</div>')
        $('html body div#game-page div.window-wrapper').append(windowHTML)

        document.querySelector('#start-hack').addEventListener('click', LookForVictim);
        console.warn('Automation ;D Started');
    }

    function Learn(){
        if(document.querySelector("#window-tool > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)").innerText.split(' ')[0] !== 'Cracked'){
            UrlWordsMap[document.querySelector('.tool-type-img').src] = document.querySelector('#tool-type-word').value
            console.log(UrlWordsMap)
        }
    }
    function LookForVictim(){
        document.querySelectorAll('.window-content div[class=window-list-table-wrapper]:not(:first-child) table tr')[0].click();
        setTimeout(()=> document.querySelector('#window-other-button').click(), 250);
        setTimeout(()=> document.querySelector(`#window-other-attackbutton-wrapper #window-other-port${runtimeSettings.port}`).click(), 250);
        
        if(!document.querySelector('#tool-type-form > button')){
            let submitButton = document.createElement('button');
            submitButton.type = 'submit'
            document.querySelector('#tool-type-form').appendChild(submitButton);
        }
    }


    setInterval(function Crack(){
        if(document.querySelector('#topwindow-success').style.display != 'none'){
            document.querySelector('#targetmessage-input').value = settings.hackingMessage
            document.querySelector('#targetmessage-button-send').click()
            return;
        }
        if(document.querySelector('#window-tool').style.display == 'none') {
            document.querySelector('#cracking-status').innerText = 'CDM: Closed'
            return;
        }
        if(document.querySelector('#progressbar-firewall-amount').style.width == "100%") {
            document.querySelector('#window-tool > div:nth-child(3) > span:nth-child(2)').click()
            document.querySelector('#cracking-status').innerText = 'CDM: Closed'
            return;
        }

        document.querySelector('#cracking-status').innerText = 'CDM: Open'
        if(!document.querySelector('#window-tool > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)')){
            let statusSpan = document.createElement('span');
            document.querySelector("#window-tool > div:nth-child(4) > div:nth-child(2) > div:nth-child(2)").appendChild(statusSpan)
        }

        let status = document.querySelector('#window-tool > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)');
        status.innerText = 'Brute forcing...'

        let wordLink = document.querySelector('.tool-type-img').src;
        if(UrlWordsMap.hasOwnProperty(wordLink) && current != wordLink){
            status.innerText = 'Cracked !'
            document.querySelector('#tool-type-word').value = UrlWordsMap[wordLink]
            document.querySelector("#tool-type-form")[0].innerHTML += `<button type="submit" class="button">Send</button>`;
            document.querySelector('#tool-type-form > button').click();

            status.innerText = 'Brute forcing...'
        }else{
            status.innerText = "Failed to Crack, input it manually"
            current = wordLink;
        }

    }, 750)


    window.onload = ()=>{
        document.querySelector('#tool-type-word').addEventListener('change', Learn)
        document.querySelector('#login-play').addEventListener('click', setTimeout(StartGUI, 2000));
    }

    window.wordsMap = UrlWordsMap;
})();