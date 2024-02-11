chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    if (msg.message === 'open_popup') {
        // Enable the page-action for the requesting tab.
        chrome.pageAction.show(sender.tab.id);
    }
});
