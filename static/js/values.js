$(document).ready(function () {
  var bc = new BroadcastChannel('parser_channel');
  const element = $('#values');

  element.keyup(() => {
    bc.postMessage({ values: element.val() });
  });
});
