$(document).ready(function () {
  var bc = new BroadcastChannel('parser_channel');
  const element = $('#template');

  const openWindow = (str) => {
    var windowObjectReference = null;

    if (windowObjectReference == null || windowObjectReference.closed) {
      window.open(str, '', 'resizable,scrollbars,status');
    } else {
      windowObjectReference.focus();
    }
  };

  element.keyup(() => {
    bc.postMessage({ template: element.val() });
  });
});
