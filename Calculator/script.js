const display = document.getElementById('display');
    let current = '';

    function append(val) {
      if (display.innerText === '0' || display.innerText === 'Error') {
        current = val;
      } else {
        current += val;
      }
      display.innerText = current;
    }

    function clearDisplay() {
      current = '';
      display.innerText = '0';
    }

    function backspace() {
      current = current.slice(0, -1);
      display.innerText = current || '0';
    }

    function calculate() {
      try {
        const result = eval(current);
        display.innerText = result;
        current = result.toString();
      } catch {
        display.innerText = 'Error';
        current = '';
      }
    }

    function openFullScreen() {
      const elem = document.documentElement; // Or use document.getElementById("calc");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
      }
    }