// This extension works whenever the homepage is reddit/popular (or home?)
// this will switch the state selection from my state to all states

// NOTE: GET THE STATE FROM LOCAL STORAGE INSTEAD

(function () {
    // get second instance of spacer class in menuArea
    let stateOptions = $(".menuarea").find('.selected'); 

    // figure out how to get the value from chrome storage
    let defaultState = chrome.storage.local.get("storedState", function(result) {
        alert("in chrome.get");
        alert("result.value = " + result.value);
        defaultState = result.value;
        alert("retrieving from local storage = " + defaultState)
    });


    alert("The default state = " + defaultState);

    // only change webpage if state is not the one in memory
    if (!stateOptions.text().includes(defaultState)) {
        let newOption = $("a.choice:contains(" + defaultState + ")");

        newOption[0].click(function() {
            window.location.href = newOption.attr('href');
        });
    }

    // // only run if allStates is not selected 
    // if (!stateOptions.text().includes("All States"))
    // {
    //     let allOption = $("a.choice:contains('All States')");
           
    //     // when clicking set the window.location.href to the href in the tag
    //     // use [0] to work with the dom element

    //     allOption[0].click(function() {
    //         window.location.href = allOption.attr('href');            
    //     });
    // }
})();