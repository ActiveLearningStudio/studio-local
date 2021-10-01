<?php
// In the top frame, we use cookies for session.
if (!defined('COOKIE_SESSION')) define('COOKIE_SESSION', true);
require_once("../../config.php");
require_once("../../admin/admin_util.php");

use \Tsugi\UI\Table;
use \Tsugi\Core\LTIX;

\Tsugi\Core\LTIX::getConnection();

header('Content-Type: text/html; charset=utf-8');
session_start();

if ( ! isAdmin() ) {
    $_SESSION['login_return'] = LTIX::curPageUrlFolder();
    header('Location: '.$CFG->wwwroot.'/login.php');
    return;
}

$query_parms = false;
$searchfields = array("C.context_id", "title", "C.created_at", "C.updated_at", "C.login_at", "C.login_count");
$sql = "SELECT C.context_id AS context_id, title, count(M.user_id) AS members, C.key_id AS key_value,
            CASE WHEN ISNULL(gc_secret) THEN 'LTI' ELSE 'Google' END AS key_type,
            C.login_at, C.login_count, C.created_at, C.updated_at
        FROM {$CFG->dbprefix}lti_context AS C
        LEFT JOIN {$CFG->dbprefix}lti_membership AS M ON C.context_id = M.context_id
        GROUP BY C.context_id";
$orderfields = array("C.context_id", "key_value", "title", "C.created_at", "C.updated_at", "C.login_at", "C.login_count");

$newsql = Table::pagedQuery($sql, $query_parms, $searchfields, $orderfields);
// echo("<pre>\n$newsql\n</pre>\n");
$rows = $PDOX->allRowsDie($newsql, $query_parms);
$newrows = array();
foreach ( $rows as $row ) {
    $newrow = $row;
    $newrows[] = $newrow;
}

$OUTPUT->header();
$OUTPUT->bodyStart();
$OUTPUT->topNav();
$OUTPUT->flashMessages();

$view_url = "membership";
$params=false; // Defaults to _GET
$extra_buttons = array("Admin" =>   $CFG->wwwroot."/admin");
Table::pagedTable($newrows, $searchfields, $orderfields, $view_url, $params, $extra_buttons);

$OUTPUT->footer();

