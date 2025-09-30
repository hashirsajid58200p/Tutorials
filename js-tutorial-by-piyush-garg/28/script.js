// Promisification

// Without Promise

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = (err) => callback(err);
  document.head.appendChild(script);
}

loadScript("test.js", (err, script) => {
  if (err) {
    console.log(err);
  } else {
    console.log("script loaded");
  }
});

const loadScriptNew = promisify(loadScript);

(async () => {
  const result = await loadScriptNew("test.js");
  console.log(result);
})();
