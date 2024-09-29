document.getElementById('screenshotBtn').addEventListener('click', () => {
    chrome.tabs.captureVisibleTab(null, {}, (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'screenshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
