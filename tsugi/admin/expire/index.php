<?php
// In the top frame, we use cookies for session.
if ( ! defined('COOKIE_SESSION') ) define('COOKIE_SESSION', true);
require_once("../../config.php");
require_once("../../admin/admin_util.php");
require_once("expire_util.php");

use \Tsugi\UI\Table;
use \Tsugi\Util\U;
use \Tsugi\Core\LTIX;

\Tsugi\Core\LTIX::getConnection();

session_start();

require_once("../gate.php");
if ( $REDIRECTED === true || ! isset($_SESSION["admin"]) ) return;

if ( ! ( isset($_SESSION['id']) || isAdmin() ) ) {
    $_SESSION['login_return'] = LTIX::curPageUrlFolder();
    header('Location: '.$CFG->wwwroot.'/login');
    return;
}

$tenant_count = get_count_table('lti_key');
$context_count = get_count_table('lti_context');
$user_count = get_count_table('lti_user');

$tenant_days = isset($CFG->expire_tenant_days) ? $CFG->expire_tenant_days : 1000;
$tenant_days = U::get($_GET,'tenant_days',$tenant_days);
$context_days = isset($CFG->expire_context_days) ? $CFG->expire_context_days : 600;
$context_days = U::get($_GET,'context_days',$context_days);
$user_days = isset($CFG->expire_user_days) ? $CFG->expire_user_days : 600;
$user_days = U::get($_GET,'user_days',$user_days);
$pii_days = isset($CFG->expire_pii_days) ? $CFG->expire_pii_days : 180;
$pii_days = U::get($_GET,'pii_days',$pii_days);

$user_expire =  get_expirable_records('lti_user', $user_days);
$context_expire =  get_expirable_records('lti_context', $context_days);
$tenant_expire =  get_expirable_records('lti_key', $tenant_days);
$pii_expire =  get_pii_count($pii_days);

$check = sanity_check_days();
if ( is_string($check) ) $_SESSION["error"] = $check;

$OUTPUT->header();
$OUTPUT->bodyStart();
$OUTPUT->topNav();
$OUTPUT->flashMessages();
?>
<div id="iframe-dialog" title="Read Only Dialog" style="display: none;">
   <img src="<?= $OUTPUT->getSpinnerUrl() ?>" id="iframe-spinner"><br/>
   <iframe name="iframe-frame" style="height:600px" id="iframe-frame"
    onload="document.getElementById('iframe-spinner').style.display='none';">
   </iframe>
</div>
<h1>Manage Data Expiry</h1>
<p>
  <a href="<?= $CFG->wwwroot ?>/admin" class="btn btn-default">Admin</a>
</p>
<form>
<ul>
<li>User count: <?= $user_count ?>  <br/>
<ul>
<li>
Users with PII and no activity in
<input type="text" name="pii_days" size=5 class="auto_days" value="<?= $pii_days ?>"> days:
<?= $pii_expire ?>
<?php if ( $pii_expire > 0 ) { ?>
  <br/>
  <a href="pii-detail?pii_days=<?= $pii_days ?>" class="auto_expire btn btn-xs btn-default">View</a>
  <a href="#" title="Expire PII" class="auto_expire btn btn-xs btn-danger"
  onclick="showModalIframeUrl(this.title, 'iframe-dialog', 'iframe-frame', 'pii-expire?pii_days=<?= $pii_days ?>', _TSUGI.spinnerUrl, true); return false;" >
  Expire PII &gt; <?= $pii_days ?> Days
  </a>
<?php } ?>
</li>
<li>
Users with no activity in
<input type="text" name="user_days" size=5 class="auto_days" value="<?= $user_days ?>"> days:
<?= $user_expire ?>
<?php if ( $user_expire > 0 ) { ?>
  <br/>
  <a href="login-detail?base=user&days=<?= $user_days ?>" class="auto_expire btn btn-xs btn-default">View</a>
<a href="#" title="Expire Users" class="auto_expire btn btn-xs btn-danger"
  onclick="showModalIframeUrl(this.title, 'iframe-dialog', 'iframe-frame', 'login-expire?base=user&days=<?= $user_days ?>', _TSUGI.spinnerUrl, true); return false;" >
  Expire Users &gt; <?= $user_days ?> Days
  </a>
<?php } ?>
</li>
</ul>
<li>Context count: <?= $context_count ?>  <br/>
Contexts with no activity in
<input type="text" name="context_days" size=5 class="auto_days" value="<?= $context_days ?>"> days:
<?= $context_expire ?>
<?php if ( $context_expire > 0 ) { ?>
  <br/>
  <a href="login-detail?base=context&days=<?= $context_days ?>" class="auto_expire btn btn-xs btn-default">View</a>
<a href="#" title="Expire Contexts" class="auto_expire btn btn-xs btn-danger"
  onclick="showModalIframeUrl(this.title, 'iframe-dialog', 'iframe-frame', 'login-expire?base=context&days=<?= $context_days ?>', _TSUGI.spinnerUrl, true); return false;" >
  Expire Contexts &gt; <?= $context_days ?> Days
  </a>
<?php } ?>
</li>
<li>Tenant count: <?= $tenant_count ?>  <br/>
Tenants with no activity in
<input type="text" name="tenant_days" size=5 class="auto_days" value="<?= $tenant_days ?>"> days:
<?= $tenant_expire ?>
<?php if ( $tenant_expire > 0 ) { ?>
  <br/>
  <a href="login-detail?base=tenant&days=<?= $tenant_days ?>" class="auto_expire btn btn-xs btn-default">View</a>
<a href="#" title="Expire Tenants" class="auto_expire btn btn-xs btn-danger"
  onclick="showModalIframeUrl(this.title, 'iframe-dialog', 'iframe-frame', 'login-expire?base=tenant&days=<?= $tenant_days ?>', _TSUGI.spinnerUrl, true); return false;" >
  Expire Tenants &gt; <?= $tenant_days ?> Days
  </a>
<?php } ?>
</li>
</ul>
<input type="submit" value="Update">
</form>
<?php
$OUTPUT->footerStart();
?>
<script>
$('.auto_days').on('change', function() {
  $(".auto_expire").hide();
  $(this).closest('form').submit();
});
</script>
<?php
$OUTPUT->footerEnd();

