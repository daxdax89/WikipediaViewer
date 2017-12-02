/*
// Search
// https://www.mediawiki.org/wiki/API:Search_and_discovery

// Random Page
// https://en.wikipedia.org/wiki/Wikipedia:Random
https://en.wikipedia.org/wiki/Special:Random
*/
var search = $('.search');
var result = $('.result');

search.keyup(function() {
  if (search.val() === '') {
    result.html('');
    exit;
  }
  
  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: search.val(), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      var html  = '  <!-- result -->';
          html += '  <div class="row row-centered">';
          
      x.query.search.map(function(w) {
        html += '    <div class="col-xs-10 col-centered">';
        html += '      <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
        html += '        <div class="panel panel-default">';
        html += '          <div class="panel-heading">';
        html += '            <h3 class="panel-title">' + w.title + '</h3>';
        html += '          </div>';
        html += '          <div class="panel-body">';
        html += '            ' + w.snippet;
        html += '          </div>';
        html += '        </div>';
        html += '      </a>';
        html += '    </div>';
      });
      
      html += '  </div>';
      
      result.html(html);
    }
  });
});