$(document).ready(function(){
  var text =
<h2>List of Edge URLs</h2>
<ul>
<li><a href='edge://about/'>edge://about</a></li>
<li><a href='edge://accessibility/'>edge://accessibility</a></li>
<li><a href='edge://app-service-internals/'>edge://app-service-internals</a></li>
<li><a href='edge://application-guard-internals/'>edge://application-guard-internals</a></li>
<li><a href='edge://apps/'>edge://apps</a></li>
<li><a href='edge://attribution-internals/'>edge://attribution-internals</a></li>
<li><a href='edge://autofill-internals/'>edge://autofill-internals</a></li>
<li><a href='edge://blob-internals/'>edge://blob-internals</a></li>
<li><a href='edge://bluetooth-internals/'>edge://bluetooth-internals</a></li>
<li><a href='edge://collected-cookies-dialog/'>edge://collected-cookies-dialog</a></li>
<li><a href='edge://compat/'>edge://compat</a></li>
<li><a href='edge://components/'>edge://components</a></li>
<li><a href='edge://conflicts/'>edge://conflicts</a></li>
<li><a href='edge://connectors-internals/'>edge://connectors-internals</a></li>
<li><a href='edge://crashes/'>edge://crashes</a></li>
<li><a href='edge://credits/'>edge://credits</a></li>
<li><a href='edge://data-viewer/'>edge://data-viewer</a></li>
<li><a href='edge://device-log/'>edge://device-log</a></li>
<li><a href='edge://discards/'>edge://discards</a></li>
<li><a href='edge://download-internals/'>edge://download-internals</a></li>
<li><a href='edge://downloads/'>edge://downloads</a></li>
<li><a href='edge://edge-dlp-internals/'>edge://edge-dlp-internals</a></li>
<li><a href='edge://edge-urls/'>edge://edge-urls</a></li>
<li><a href='edge://extensions/'>edge://extensions</a></li>
<li><a href='edge://extensions-internals/'>edge://extensions-internals</a></li>
<li><a href='edge://favorites/'>edge://favorites</a></li>
<li><a href='edge://flags/'>edge://flags</a></li>
<li><a href='edge://floc-internals/'>edge://floc-internals</a></li>
<li><a href='edge://gcm-internals/'>edge://gcm-internals</a></li>
<li><a href='edge://gpu/'>edge://gpu</a></li>
<li><a href='edge://help/'>edge://help</a></li>
<li><a href='edge://histograms/'>edge://histograms</a></li>
<li><a href='edge://history/'>edge://history</a></li>
<li><a href='edge://indexeddb-internals/'>edge://indexeddb-internals</a></li>
<li><a href='edge://inspect/'>edge://inspect</a></li>
<li><a href='edge://interstitials/'>edge://interstitials</a></li>
<li><a href='edge://invalidations/'>edge://invalidations</a></li>
<li><a href='edge://local-state/'>edge://local-state</a></li>
<li><a href='edge://management/'>edge://management</a></li>
<li><a href='edge://media-engagement/'>edge://media-engagement</a></li>
<li><a href='edge://media-internals/'>edge://media-internals</a></li>
<li><a href='edge://nacl/'>edge://nacl</a></li>
<li><a href='edge://net-export/'>edge://net-export</a></li>
<li><a href='edge://net-internals/'>edge://net-internals</a></li>
<li><a href='edge://network-errors/'>edge://network-errors</a></li>
<li><a href='edge://newtab/'>edge://newtab</a></li>
<li><a href='edge://ntp-tiles-internals/'>edge://ntp-tiles-internals</a></li>
<li><a href='edge://omnibox/'>edge://omnibox</a></li>
<li><a href='edge://password-manager-internals/'>edge://password-manager-internals</a></li>
<li><a href='edge://policy/'>edge://policy</a></li>
<li><a href='edge://predictors/'>edge://predictors</a></li>
<li><a href='edge://prefs-internals/'>edge://prefs-internals</a></li>
<li><a href='edge://print/'>edge://print</a></li>
<li><a href='edge://process-internals/'>edge://process-internals</a></li>
<li><a href='edge://push-internals/'>edge://push-internals</a></li>
<li><a href='edge://quota-internals/'>edge://quota-internals</a></li>
<li><a href='edge://sandbox/'>edge://sandbox</a></li>
<li><a href='edge://serviceworker-internals/'>edge://serviceworker-internals</a></li>
<li><a href='edge://settings/'>edge://settings</a></li>
<li><a href='edge://signin-internals/'>edge://signin-internals</a></li>
<li><a href='edge://site-engagement/'>edge://site-engagement</a></li>
<li><a href='edge://sync-internals/'>edge://sync-internals</a></li>
<li><a href='edge://system/'>edge://system</a></li>
<li><a href='edge://terms/'>edge://terms</a></li>
<li><a href='edge://tracing/'>edge://tracing</a></li>
<li><a href='edge://translate-internals/'>edge://translate-internals</a></li>
<li><a href='edge://ukm/'>edge://ukm</a></li>
<li><a href='edge://usb-internals/'>edge://usb-internals</a></li>
<li><a href='edge://user-actions/'>edge://user-actions</a></li>
<li><a href='edge://version/'>edge://version</a></li>
<li><a href='edge://web-app-internals/'>edge://web-app-internals</a></li>
<li><a href='edge://webrtc-internals/'>edge://webrtc-internals</a></li>
<li><a href='edge://webrtc-logs/'>edge://webrtc-logs</a></li>
<li><a href='edge://whats-new/'>edge://whats-new</a></li>
</ul>
<h2>For Debug</h2>
<p>The following pages are for debugging purposes only. Because they crash or hang the renderer, they're not linked directly; you can type them into the address bar if you need them.</p>
<ul>
<li>edge://badcastcrash/</li>
<li>edge://inducebrowsercrashforrealz/</li>
<li>edge://crash/</li>
<li>edge://crashintegrity/</li>
<li>edge://crashdump/</li>
<li>edge://kill/</li>
<li>edge://hang/</li>
<li>edge://shorthang/</li>
<li>edge://gpuclean/</li>
<li>edge://gpucrash/</li>
<li>edge://gpuhang/</li>
<li>edge://memory-exhaust/</li>
<li>edge://memory-pressure-critical/</li>
<li>edge://memory-pressure-moderate/</li>
<li>edge://inducebrowserheapcorruption/</li>
<li>edge://heapcorruptioncrash/</li>
<li>edge://quit/</li>
<li>edge://restart/</li>
</ul>;
  
  //main context
  document.getElementById("context").innerHTML= text
;})
