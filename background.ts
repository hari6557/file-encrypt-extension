

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'FETCH_ENCRYPTION_KEY') {
    const { serviceId } = message;
    const encryptionKey = fetchEncryptionKey(serviceId);
    sendResponse({ encryptionKey });
  }
  return true;
});

// Mock function to fetch encryption key (Alternative to simulating an API response)
function fetchEncryptionKey(serviceId) {
  console.log(`Fetching encryption key for service ID: ${serviceId}`);
  return 'mock-256-bit-encryption-key';
}
