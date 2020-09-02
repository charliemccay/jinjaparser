$(document).ready(function () {
  var bc = new BroadcastChannel('parser_channel');
  const element = $('#values');

  const openWindow = (str) => {
    var windowObjectReference = null;

    if (windowObjectReference == null || windowObjectReference.closed) {
      window.open(str, '', 'resizable,scrollbars,status');
    } else {
      windowObjectReference.focus();
    }
  };

  element.keyup(() => {
    bc.postMessage({ values: element.val() });
  });
});
