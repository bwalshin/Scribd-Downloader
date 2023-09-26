let page = 1;
setInterval(() => {
  $('.reader_column span img')
    .toArray()
    .map((e) => {
      var a = document.createElement('a');
      a.href = new URL($(e).attr('src'), window.location.href).href;
      a.download = `wobble-page-${page}.png`;
      document.body.appendChild(a);
      a.click();

      page = page + 1;
      document.body.removeChild(a);
    });
  $('.page_right.next_btn').click();
}, 500);
