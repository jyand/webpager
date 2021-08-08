function main() {
    let par = Array.from(document.getElementsByTagName("p"));
    console.log(par);
    let nuPar = par.map(function (htm) {
        return [htm.innerHTML, htm.clientHeight, htm.offsetTop];
    });
}
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
    }, (injectionResults) => {
        console.log(injectionResults);
    });
});
