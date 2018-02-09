var executed_time = 0;
var result_stack = 0;
var x_log_16 = new Array();
function execute(){
  var stack_16 = 0;
  for (var i = 1; i <= 16; i++) {
    var random_bin = Math.round(Math.random()*10)%2;
    stack_16 += random_bin;
    result_stack += random_bin;
    document.getElementById('tbody').innerHTML += '<tr><td class="n">'+(i + executed_time * 16)+'</td><td class="x">'+random_bin+'</td><td class="s">'+result_stack+'</td><td class="pf">'+(result_stack / (i + executed_time * 16))+'</td><td class="p">('+result_stack+'/'+(i + executed_time * 16)+')</td></tr>';
  }
  x_log_16[i + executed_time * 16] = stack_16;
  // 0~16로 만들것
  document.getElementById('bodyWrap_2').innerHTML += '<div class="bar" id="'+(executed_time * 16)+'"><span style="top:'+((50 - Math.round(100 * result_stack / executed_time * 16)) * 3 + 160)+'px"><em>'+stack_16+'</em></span></div>';
  document.getElementById('bodyWrap_2').style.minWidth = (16*executed_time + 16)+'px';
  executed_time++;
}
