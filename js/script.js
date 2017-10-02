// This extension works whenever the homepage is reddit/popular (or home?)
// this will switch the state selection from my state to all states

// NOTE: GET THE STATE FROM LOCAL STORAGE INSTEAD

(function () {
    // get second instance of spacer class in menuArea
    const currentlySelected = $(".menuarea .spacer:last-child .selected").text();

    chrome.storage.local.get("storedState", function({storedState}) {
        // only change webpage if state is not the one in memory
        const sameAsSelected = currentlySelected.includes(storedState);
        if (!sameAsSelected) {
            const [insteadClick] = $(`a.choice:contains("${storedState}")`);
            insteadClick.click();
        }
    });
})();
