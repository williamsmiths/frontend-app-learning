// Alternative methods to bypass CORS for jitok API

// Method 1: JSONP (if API supports it)
export const createTokenViaJSONP = (tokenPayload) => {
  return new Promise((resolve, reject) => {
    const callbackName = 'jitokCallback' + Date.now();
    const script = document.createElement('script');

    // Set up callback
    window[callbackName] = (data) => {
      document.body.removeChild(script);
      delete window[callbackName];
      resolve(data);
    };

    // Create JSONP URL
    const params = new URLSearchParams({
      ...tokenPayload,
      callback: callbackName
    });

    script.src = `https://jitok.emrah.com/api?${params}`;
    script.onerror = () => {
      document.body.removeChild(script);
      delete window[callbackName];
      reject(new Error('JSONP request failed'));
    };

    document.body.appendChild(script);

    // Timeout after 10 seconds
    setTimeout(() => {
      if (window[callbackName]) {
        document.body.removeChild(script);
        delete window[callbackName];
        reject(new Error('JSONP request timeout'));
      }
    }, 10000);
  });
};

// Method 2: Server-sent events (if supported)
export const createTokenViaSSE = (tokenPayload) => {
  return new Promise((resolve, reject) => {
    const eventSource = new EventSource(`https://jitok.emrah.com/stream?data=${encodeURIComponent(JSON.stringify(tokenPayload))}`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        eventSource.close();
        resolve(data);
      } catch (error) {
        eventSource.close();
        reject(error);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
      reject(new Error('SSE connection failed'));
    };

    // Timeout after 10 seconds
    setTimeout(() => {
      eventSource.close();
      reject(new Error('SSE request timeout'));
    }, 10000);
  });
};

// Method 3: Browser extension proxy (if available)
export const createTokenViaExtension = async (tokenPayload) => {
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        action: 'makeRequest',
        url: 'https://jitok.emrah.com/api',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tokenPayload)
      }, (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(response);
        }
      });
    });
  } else {
    throw new Error('Browser extension not available');
  }
};

// Method 4: WebRTC data channel proxy (experimental)
export const createTokenViaWebRTC = async (tokenPayload) => {
  // This would require a WebRTC proxy server
  throw new Error('WebRTC proxy not implemented');
};

// Method 5: Use a public CORS proxy service
export const createTokenViaPublicProxy = async (tokenPayload) => {
  const proxyServices = [
    'https://cors-anywhere.herokuapp.com/',
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?',
    'https://thingproxy.freeboard.io/fetch/'
  ];

  for (const proxy of proxyServices) {
    try {
      console.log(`Trying proxy: ${proxy}`);

      const url = proxy + 'https://jitok.emrah.com/api';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(tokenPayload),
      });

      if (response.ok) {
        const data = await response.text();
        try {
          return JSON.parse(data);
        } catch {
          return data;
        }
      }
    } catch (error) {
      console.log(`Proxy ${proxy} failed:`, error.message);
      continue;
    }
  }

  throw new Error('All proxy services failed');
};
