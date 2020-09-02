$(document).ready(function () {
  var bc = new BroadcastChannel('parser_channel');
  const element = $('#template');

  element.keyup(() => {
    bc.postMessage({ template: element.val() });
  });
});
