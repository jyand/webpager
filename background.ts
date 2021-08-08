type ReadableText = [string, number, number] ;

function main() {
        let par: HTMLElement[] = Array.from(document.getElementsByTagName("p")) ;
        console.log(par) ;
        let nuPar: ReadableText[] = par.map(function(htm: HTMLElement): [string, number, number] {
                return [htm.innerHTML, htm.clientHeight, htm.offsetTop] ;
        }) ;
}

chrome.action.onClicked.addListener((tab) => { 
        chrome.scripting.executeScript({
                target: {tabId: tab.id, allFrames: true},
        },
        (injectionResults) => {
                console.log(injectionResults) ;
        }) ;
}) ;
