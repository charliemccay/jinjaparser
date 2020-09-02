$(document).ready(function () {
  var bc = new BroadcastChannel('parser_channel');

  const openWindow = (str) => {
    var windowObjectReference = null;

    if (windowObjectReference == null || windowObjectReference.closed) {
      window.open(str, '', 'resizable,scrollbars,status');
    } else {
      windowObjectReference.focus();
    }
  };

  const data = (function () {
    let values = { template: null, values: null };

    const getValues = () => values;

    const setValues = (newValues) => {
      values = { ...values, ...newValues };
    };

    return {
      getValues,
      setValues,
    };
  })();

  bc.onmessage = (messageEvent) => {
    data.setValues(messageEvent.data);

    $.post('/convert', {
      ...data.getValues(),
      input_type: 'json',
      showwhitespaces: 1,
      dummyvalues: 0,
    }).done(function (response) {
      // Grey out the white spaces chars if any
      response = response.replace(/•/g, '<span class="whitespace">•</span>');
      console.log($('#render'));
      // Display the answer
      $('#render').html(response);
    });
  };
});
