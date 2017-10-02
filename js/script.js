// This extension works whenever the homepage is reddit/popular (or home?)
// this will switch the state selection from my state to all states

// NOTE: GET THE STATE FROM LOCAL STORAGE INSTEAD

(function () {
    // get second instance of spacer class in menuArea
    let stateOptions = $(".menuarea").find('.selected'); 

    // figure out how to get the value from chrome storage
    let defaultState = chrome.storage.local.get("storedState", function(result) {
        defaultState = result.value;
    });

    // only change webpage if state is not the one in memory
    if (!stateOptions.text().includes(defaultState)) {
        let newOption = $("a.choice:contains(" + defaultState + ")");

        newOption[0].click(function() {
            window.location.href = newOption.attr('href');
        });
    }
})();