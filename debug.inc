//
// Debug-functions
//

if (!function_exists('_vd')) {
  function _vd($mixed, $title = '', $exit = false) {
    global $user;
    // Only the site admin is able to proceed here.
    if ($user->uid != 1) return;
    echo (!empty($title) ? ($title .':') : '') .'<pre>';
    var_dump($mixed);
    echo "</pre>\n";
    if ($exit) exit;
  }
}

if (!function_exists('_vds')) {
  function _vds($mixed, $title = '', $exit = false) {
    global $user;
    // Only the site admin is able to proceed here.
    if ($user->uid != 1) return;
    ob_start();
    echo (!empty($title) ? ($title .':') : '') .'<pre>';
    var_dump($mixed);
    echo "</pre>\n";
    $output = ob_get_contents();
    ob_end_clean();
    if ($exit) exit;
    return $output;
  }
}

function show($data, $func = "print_r", $return_str = false){
   ob_start();
   $func($data);
   $output = '<pre>'.htmlspecialchars(ob_get_contents()).'</pre>';
   ob_end_clean();
   if($return_str) return $output; else echo $output;
}
