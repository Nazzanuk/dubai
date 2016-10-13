//HEAD 
(function(app) {
try { app = angular.module("app"); }
catch(err) { app = angular.module("app", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("announcements","<div class=\"announcements\">\n" +
    "    <i class=\"fa fa-caret-right\"></i> &nbsp; DPG on target to deliver Mudon project with competitive mortgage solutions\n" +
    "</div>")

$templateCache.put("documents","<div id=\"documents\">\n" +
    "    <div class=\"box-item\" header=\"Projects\">\n" +
    "\n" +
    "        <div class=\"more-projects\">\n" +
    "            <div class=\"box-butn\">\n" +
    "                All Projects &nbsp; <i class=\"fa fa-caret-down\"></i>\n" +
    "\n" +
    "                <div class=\"small-projects\">\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Human Resources</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> West Zone Development</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Intranet Upgrade</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Branding</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> DPG Expansion</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Corporate Governance</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> East Zone Development</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> IT Upgrade</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Marketing Restructuring</div>\n" +
    "                    <div class=\"small-project\"><img src=\"public/img/folder-2.svg\" alt=\"\"> Flags</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"projects\">\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">Human Resources</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Dolorem error expedita molestias quod reprehenderit veritatis.</div>\n" +
    "            </div>\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">West Zone Development</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Amet expedita nihil nulla quia? Deleniti, recusandae.</div>\n" +
    "            </div>\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">Intranet Upgrade</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Fugiat labore maxime, modi quod tempora veritatis.</div>\n" +
    "            </div>\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">Branding</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Accusantium amet commodi eos ipsa repellat ut!</div>\n" +
    "            </div>\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">DPG Expansion</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Autem blanditiis exercitationem necessitatibus quae soluta.</div>\n" +
    "            </div>\n" +
    "            <div class=\"project\">\n" +
    "                <div class=\"project-title\">Corporate Governance</div>\n" +
    "                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                <div class=\"project-subtitle\">Adipisci, corporis facere maiores nisi officiis quia.</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("box","<div class=\"box\">\n" +
    "    <div class=\"box-header\">\n" +
    "        {{header}}\n" +
    "\n" +
    "        <!--<div class=\"box-expand\">-->\n" +
    "            <!--<i class=\"fa fa-minus\"></i>-->\n" +
    "        <!--</div>-->\n" +
    "        <div class=\"box-butn\" ng-if=\"butnText\">{{butnText}} &nbsp; <i class=\"fa fa-caret-right\"></i></div>\n" +
    "    </div>\n" +
    "    <div class=\"box-content\" ng-transclude></div>\n" +
    "</div>")

$templateCache.put("event","<div id=\"event\">\n" +
    "        <div class=\"event\" ng-click=\"toggleEvent()\" ng-class=\"{active:isVisible()}\">\n" +
    "            <div class=\"event-box\" ng-click=\"$event.stopPropagation()\">\n" +
    "                <div class=\"box-item\" header=\"Upcoming Event\">\n" +
    "\n" +
    "                    <!--<img src=\"https://images.unsplash.com/photo-1474679294639-dc85e32f2ef0?dpr=2&auto=format&crop=entropy&fit=crop&w=1000&h=350&q=80&cs=tinysrgb\" alt=\"\">-->\n" +
    "                    <div class=\"event-context\">\n" +
    "                        <div class=\"event-date\">\n" +
    "                            <div class=\"date-number\">05</div>\n" +
    "                            <div class=\"date-month\">Nov</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"event-content\">\n" +
    "                            <div class=\"content-title\">Fundraising Dinner</div>\n" +
    "                            <div class=\"content-small\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cumque dolorem eos eum expedita ipsam itaque perspiciatis sed. Dicta est incidunt laudantium modi quae quam, quidem quis sunt veritatis!</div>\n" +
    "                            <div class=\"content-items\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <!--<div class=\"col-xs-4\"><strong>Location:</strong></div>-->\n" +
    "                                    <!--<div class=\"col-xs-8\">Dubai Office</div>-->\n" +
    "                                    <div class=\"col-xs-4\"><strong>Location:</strong></div>\n" +
    "                                    <div class=\"col-xs-8\">Dubai Office</div>\n" +
    "                                    <div class=\"col-xs-4\"><strong>Date:</strong></div>\n" +
    "                                    <div class=\"col-xs-8\">05/11/2016</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <p>\n" +
    "                                <span class=\"butn red pull-right\"  ng-click=\"toggleEvent()\"><i class=\"fa fa-angle-left\"></i> &nbsp; Back</span>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "</div>")

$templateCache.put("events","<div id=\"events\">\n" +
    "    <div class=\"box-item\" header=\"Upcoming Events\" butn-text=\"All Events\">\n" +
    "        <div class=\"events\" ng-click=\"toggleEvent()\">\n" +
    "            <div class=\"event teal\">\n" +
    "                <div class=\"event-date\">\n" +
    "                    <div class=\"date-number\">05</div>\n" +
    "                    <div class=\"date-month\">Nov</div>\n" +
    "                </div>\n" +
    "                <div class=\"event-content\">\n" +
    "                    Fundraising Dinner\n" +
    "                    <div class=\"content-small\">Annual internal and privileged client dinner</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"event blue\">\n" +
    "                <div class=\"event-date\">\n" +
    "                    <div class=\"date-number\">12</div>\n" +
    "                    <div class=\"date-month\">Dec</div>\n" +
    "                </div>\n" +
    "                <div class=\"event-content\">\n" +
    "                    Investor Call\n" +
    "                    <div class=\"content-small\">Asperiores debitis dolor eaque expedita, in omnis</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"event\">\n" +
    "                <div class=\"event-date\">\n" +
    "                    <div class=\"date-number\">28</div>\n" +
    "                    <div class=\"date-month\">Jan</div>\n" +
    "                </div>\n" +
    "                <div class=\"event-content\">\n" +
    "                    West Zone Opening\n" +
    "                    <div class=\"content-small\">DPG opens West Zone retail facility at Al Waha</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"event\">\n" +
    "                <div class=\"event-date\">\n" +
    "                    <div class=\"date-number\">04</div>\n" +
    "                    <div class=\"date-month\">Mar</div>\n" +
    "                </div>\n" +
    "                <div class=\"event-content\">\n" +
    "                    Nostrum Perspiciatis\n" +
    "                    <div class=\"content-small\">Kuis quod repellendus temporibus totam veritatis.</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("foot","<div id=\"foot\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"foot\">\n" +
    "            <div class=\"foot-top\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <img src=\"public/img/hewaar-white.png\" alt=\"\" style=\"height:45px;\"><br>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <div class=\"foot-title\">Contact Us</div>\n" +
    "                        <div class=\"foot-item\">\n" +
    "                            <p>500 oracle parkway</p>\n" +
    "                            <p>Redwood Shores, 94065</p>\n" +
    "                            <p>Phone: 800 DPUAE (800 37823)</p>\n" +
    "                            <p>Email:admin@dp.ae</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <div class=\"foot-title\">Go Social</div>\n" +
    "                        <div class=\"foot-item\">\n" +
    "                            <p>\n" +
    "                                <i class=\"fa fa-fw fa-facebook\"></i>\n" +
    "                                <i class=\"fa fa-fw fa-twitter\"></i>\n" +
    "                                <i class=\"fa fa-fw fa-instagram\"></i>\n" +
    "                                <i class=\"fa fa-fw fa-linkedin\"></i>\n" +
    "                                <i class=\"fa fa-fw fa-youtube\"></i>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <img src=\"public/img/dp-logo-trans.png\" alt=\"\" style=\"height:50px\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"foot-bottom\">\n" +
    "                <a href=\"#\">About Dubai Properties</a> &nbsp; | &nbsp; <a>Privacy Statement</a>\n" +
    "                <p>Copyright © 2016, Dubai Properties and/or its affiliates. All rights reserved.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("gallery","<div id=\"gallery\">\n" +
    "    <div class=\"box-item\" header=\"Latest Gallery Images\" butn-text=\"All Images\">\n" +
    "        <div class=\"gallery\" ui-sref=\"gallery\" style=\"cursor:pointer\">\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&1')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&2')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&23')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&234')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&235')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&236')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&237')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&244')\"></div>\n" +
    "            <div class=\"gallery-item\" style=\"background-image: url('https://unsplash.it/400/?random&21')\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("header","<div id=\"header\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-bottom\">\n" +
    "            <div class=\"container\">\n" +
    "\n" +
    "                <div ng-transclude=\"headerLinks\"></div>\n" +
    "\n" +
    "                <div class=\"pull-right bottom-item\">\n" +
    "                    Ahmed Mahmood\n" +
    "                    <div class=\"pull-right item-image\" style=\"background-image: url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJ1XFhWAazn6HUs97tdWjgYCPaxzli3TCrFPDxSi1eVAkOkstO')\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-top\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"logo\" ui-sref=\"home\">\n" +
    "                    <img src=\"http://nathans.zone/sandbox/dubai/public/img/hewaar-white.png\" alt=\"hewaar logo\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"logo right\" ui-sref=\"home\">\n" +
    "                    <img src=\"http://nathans.zone/sandbox/dubai/public/img/dp-logo-trans.png\" style=\"height: 60px;margin-top: 0\" alt=\"dp logo\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"menu-search\">\n" +
    "                    <i class=\"fa fa-search\" ui-sref=\"search\"></i>\n" +
    "                    <input type=\"text\" placeholder=\"Search Hewaar\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("hero","<div id=\"hero\">\n" +
    "    <div class=\"hero\">\n" +
    "        <div class=\"hero-main\">\n" +
    "            <div class=\"main-img\" style=\"background-image: url('http://www.highwaytourism.net/sites/default/files/burj_al_arab_jumeirah_dubai-wide.jpg')\"></div>\n" +
    "            <div class=\"main-overlay\"></div>\n" +
    "            <div class=\"main-cat\">Intranet</div>\n" +
    "            <div class=\"main-title\">Hewaar Intranet is Live</div>\n" +
    "            <div class=\"main-text\">Alias debitis dicta fugit odit perferendis rerum vitae! Architecto culpa dolor explicabo nobis placeat? Aliquid eos, rerum.</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"hero-items\">\n" +
    "            <div class=\"hero-main\">\n" +
    "                <div class=\"main-img\" style=\"background-image: url('http://www.arthurweill.fr/img/unsplash/images_1280/tumblr_mnh17lfd9R1st5lhmo1_1280.jpg')\"></div>\n" +
    "                <div class=\"main-overlay\"></div>\n" +
    "                <div class=\"main-cat\">Human Resources</div>\n" +
    "                <div class=\"main-title\">Consectetur adipisicing elit</div>\n" +
    "                <div class=\"main-text\">Assumenda et impedit natus nisi. Atque exercitationem expedita porro quibusdam ullam vitae.</div>\n" +
    "            </div>\n" +
    "            <div class=\"hero-main\">\n" +
    "                <div class=\"main-img\" style=\"background-image: url('http://www.arthurweill.fr/img/unsplash/images_1280/7dwwcdv7wc4_1280.jpg')\"></div>\n" +
    "                <div class=\"main-overlay\"></div>\n" +
    "                <div class=\"main-cat\">Corporate</div>\n" +
    "                <div class=\"main-title\">New London Sales Office</div>\n" +
    "                <div class=\"main-text\">Facere fugit itaque iusto modi omnis perferendis quis quod reiciendis totam voluptatem.</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("polls","<div id=\"polls\">\n" +
    "    <div class=\"box-item\" header=\"Polls / Surveys\">\n" +
    "        <img src=\"http://polart2015.com.au/wp-content/uploads/2014/09/PolArt2015-Chairty-Dinner.jpg\" alt=\"\" style=\"width: calc(100% + 30px);margin: -15px -15px 10px\">\n" +
    "        <p><strong>Spring Fundraising Dinner</strong></p>\n" +
    "        <p>Which dates will you be available?</p>\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\"> &nbsp; 1st Oct 2016\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\"> &nbsp; 8th Oct 2016\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\"> &nbsp; 15th Oct 2016\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <p><span class=\"butn\">Submit</span></p>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<script>(function(t,e,c,n){var o,s,a;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(c),s=o[o.length-1],a=e.createElement(c),a.type=\"text/javascript\",a.async=!0,a.id=n,a.src=[\"https:\"===location.protocol?\"https://\":\"http://\",\"widget.surveymonkey.com/collect/website/js/dDMSyR8BR9csewvaaowXS2SHb1vMr5PGAxt_2FST7JFwD0QnO6F1mfQCcZFC7ONvxm.js\"].join(\"\"),s.parentNode.insertBefore(a,s))})(window,document,\"script\",\"smcx-sdk\");</script>-->\n" +
    "\n" +
    "</div>")

$templateCache.put("press-releases","<div id=\"press-releases\">\n" +
    "    <div class=\"box-item\" header=\"Press Releases\" butn-text=\"All Press Releases\">\n" +
    "        <div class=\"press-releases\">\n" +
    "            <div class=\"hero-main\">\n" +
    "                <div class=\"main-img\" style=\"background-image: url('http://www.arthurweill.fr/img/unsplash/images_1280/tumblr_n8zm2tFWMf1st5lhmo1_1280.jpg')\"></div>\n" +
    "                <div class=\"main-overlay\"></div>\n" +
    "                <div class=\"main-cat\">Corporate</div>\n" +
    "                <div class=\"main-title\">Design Innovation Project Launched</div>\n" +
    "            </div>\n" +
    "            <div class=\"hero-main\">\n" +
    "                <div class=\"main-img\" style=\"background-image: url('http://www.arabianbusiness.com/incoming/article623751.ece/BINARY/Dubai-property.jpg')\"></div>\n" +
    "                <div class=\"main-overlay\"></div>\n" +
    "                <div class=\"main-cat\">Corporate</div>\n" +
    "                <div class=\"main-title\">DP Expansion Underway</div>\n" +
    "            </div>\n" +
    "            <div class=\"hero-main\">\n" +
    "                <div class=\"main-img\" style=\"background-image: url('http://postbulletin.typepad.com/.a/6a00d83451cc8269e2010536b37c34970b-pi')\"></div>\n" +
    "                <div class=\"main-overlay\"></div>\n" +
    "                <div class=\"main-cat\">Corporate</div>\n" +
    "                <div class=\"main-title\">Partnership with IBM announced</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("promos","<div id=\"promos\">\n" +
    "    <div class=\"promos\">\n" +
    "        <div class=\"promo\">\n" +
    "            <img src=\"public/img/books-stack-of-three.svg\">\n" +
    "            <div>Book Club</div>\n" +
    "        </div>\n" +
    "        <div class=\"promo\" style=\"background-image: url('http://images.twistmagazine.com/uploads/posts/image/8722/b9d4e806b4.jpg')\">\n" +
    "            <div class=\"promo-overlay\">\n" +
    "                <i class=\"fa fa-play\" style=\"opacity: 0.8\"></i>\n" +
    "                <div>Embrace Activities</div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"promo\" ui-sref=\"discounts\">\n" +
    "            <img src=\"public/img/discount-sticker-with-percentage.svg\">\n" +
    "            <div>Offers & Discounts</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("services","<div id=\"services\">\n" +
    "    <div class=\"services\">\n" +
    "        <div class=\"service service-menu\">\n" +
    "            <div class=\"service-icon\"><img src=\"public/img/group.svg\"/></div>\n" +
    "            <div class=\"service-content\">Human Resources &nbsp; <i class=\"fa fa-angle-down\"></i></div>\n" +
    "\n" +
    "            <div class=\"menu-1\">\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">HRMS</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">Biometric Timesheet</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">People Manual</a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <a class=\"service service-menu\" ng-href=\"#/search\">\n" +
    "            <div class=\"service-icon\"><img src=\"public/img/magnifier.svg\"/></div>\n" +
    "            <div class=\"service-content\">Vacancies</div>\n" +
    "        </a>\n" +
    "        <div class=\"service service-menu\">\n" +
    "            <div class=\"service-icon\"><img src=\"public/img/security-shield.svg\"/></div>\n" +
    "            <div class=\"service-content\">Governance &nbsp; <i class=\"fa fa-angle-down\"></i></div>\n" +
    "            <div class=\"menu-1\">\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">DMS</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">ShieldLine</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">Performance Management System</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">Brand Guidelines</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">Process & Policies</a>\n" +
    "                <a href=\"#\" class=\"menu-1-item\" ui-sref=\"home\">BCM</a>\n" +
    "                <div class=\"menu-1-item\">\n" +
    "                    Third Level Nav\n" +
    "                    <i class=\"fa fa-angle-right pull-right\"></i>\n" +
    "\n" +
    "                    <div class=\"menu-2\">\n" +
    "                        <a href=\"#\" class=\"menu-2-item\">Documentation</a>\n" +
    "                        <a href=\"#\" class=\"menu-2-item\">Support</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"service service-menu\" ui-sref=\"legal\">\n" +
    "            <div class=\"service-icon\"><img src=\"public/img/hammer-legal-tool-symbol.svg\"/></div>\n" +
    "            <div class=\"service-content\">Legal Cases</div>\n" +
    "        </div>\n" +
    "        <div class=\"service service-menu\">\n" +
    "            <div class=\"service-icon\"><img src=\"public/img/files.svg\"/></div>\n" +
    "            <div class=\"service-content\">Document Manager</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("twitter","<div id=\"twitter\">\n" +
    "    <div class=\"box-item\" header=\"Tweet Feed\" butn-text=\"@DPGplc\">\n" +
    "\n" +
    "        <div class=\"twitter\">\n" +
    "            <div class=\"tweet\">\n" +
    "                <div class=\"tweet-icon\">\n" +
    "                    <img src=\"https://pbs.twimg.com/profile_images/783221121583898624/61fegpZf_400x400.jpg\" alt=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"tweet-content\">\n" +
    "                    Latest\n" +
    "                    <a href=\"\">@TowardsMaturity</a> report shows how transforming formal #learning can bring #business results:\n" +
    "                    <a href=\"\">http://bit.ly/2cADHPM</a> supported by DPG\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tweet\">\n" +
    "                <div class=\"tweet-icon\">\n" +
    "                    <img src=\"https://pbs.twimg.com/profile_images/783221121583898624/61fegpZf_400x400.jpg\" alt=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"tweet-content\">\n" +
    "                    A fantastic and inspiring video about self development through CPD\n" +
    "                    <a href=\"\">#loveCPD</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tweet\">\n" +
    "                <div class=\"tweet-icon\">\n" +
    "                    <img src=\"https://pbs.twimg.com/profile_images/783221121583898624/61fegpZf_400x400.jpg\" alt=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"tweet-content\">\n" +
    "                    Excited for\n" +
    "                    <a href=\"\">#PMAs16</a>? One of DPG's participants have been shortlisted for the Michael Kelly Outstanding Student Award\n" +
    "                    <a href=\"\">http://bit.ly/2djb87v</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!--<p style=\"margin-top: 15px\">-->\n" +
    "            <!--<span class=\"butn\"><i class=\"fa fa-twitter\"></i> &nbsp; @DPGplc</span>-->\n" +
    "        <!--</p>-->\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("vacancies","<div id=\"vacancies\">\n" +
    "    <div class=\"vacancies\">\n" +
    "        <div class=\"box-item\" header=\"Internal Vacancies\" butn-text=\"All Vacancies\">\n" +
    "\n" +
    "            <!--<div class=\"\"></div>-->\n" +
    "            <div class=\"vacancy\" ui-sref=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Front End Developer</div>\n" +
    "                    <p>HTML, JavaScript, C#. ASP.Net, TDD/BDD, Jira, Confluence, Agile/Waterfall...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"vacancy\" ui-sref=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Data Analyst</div>\n" +
    "                    <p>Data Analyst - Business Intelligence This is initially a 12 month contract based in The City of London...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"vacancy\" ui-sref=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Administrator</div>\n" +
    "                    <p>Systems Administrator - Splunk, Cloud, AWS, Opsview...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("case-screen","<div id=\"case-screen.html\">\n" +
    "    <div screen=\"case\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"pull-right\" style=\"margin-top: 30px;\">\n" +
    "                <div class=\"butn teal\" ui-sref=\"legal\">All Cases &nbsp; <i class=\"fa fa-list-ul\"></i></div>\n" +
    "                <div class=\"butn\" ui-sref=\"case-form\">Raise a Case &nbsp; +</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"dp-header\">Legal Case Management</div>\n" +
    "            <!--<div></div>-->\n" +
    "            <!--<div class=\"dp-subheader\">Case Detail</div>-->\n" +
    "\n" +
    "            <div class=\"box-item\" header=\"Case Info\">\n" +
    "                <div class=\"case-header\">\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Case ID</div>\n" +
    "                        <div class=\"header-value\">9b72r68e27</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Date</div>\n" +
    "                        <div class=\"header-value\">16th October 2016</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Status</div>\n" +
    "                        <div class=\"header-value\">OPEN</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Priority</div>\n" +
    "                        <div class=\"header-value\">High</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Requested By</div>\n" +
    "                        <div class=\"header-value\">Alejandro</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Request Type</div>\n" +
    "                        <div class=\"header-value\">Project 142596</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Contact Details</div>\n" +
    "                        <div class=\"header-value\">legal@dpg.com</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\"> Business Unit</div>\n" +
    "                        <div class=\"header-value\">Marketing</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"case-header\" style=\"margin-top: 0px\">\n" +
    "                    <div class=\"header-field max\">\n" +
    "                        <div class=\"header-label\" style=\"flex: 1 0 auto\">Detailed Description</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field max flush\">\n" +
    "                        <div class=\"header-textarea\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio perspiciatis quidem quis? Ad assumenda debitis deserunt dolorum eaque fuga hic iste necessitatibus, non numquam odit optio possimus quae quasi quisquam repellendus reprehenderit repudiandae suscipit tempora temporibus ut veritatis voluptates? Aliquid beatae expedita, laborum maxime quaerat sed! Harum incidunt, ipsum?</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"box-item\" header=\"Case Documents\">\n" +
    "                <div class=\"box-content\">\n" +
    "                    <div class=\"case-documents\">\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/doc.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">Internal Staff List 2016</div>\n" +
    "                                <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/pdf.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">DPG 2015</div>\n" +
    "                                <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/pdf.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">DPG 2016</div>\n" +
    "                                <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/doc.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">Internal Staff List 2016</div>\n" +
    "                                <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/pdf.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">DPG 2015</div>\n" +
    "                                <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"result\">\n" +
    "                            <img class=\"result-icon\" src=\"public/img/pdf.svg\">\n" +
    "                            <div class=\"result-content\">\n" +
    "                                <div class=\"dp-title\">DPG 2016</div>\n" +
    "                                <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("case-form-screen","<div id=\"case-form-screen.html\">\n" +
    "    <div screen=\"case-form\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"pull-right\" style=\"margin-top: 30px;\">\n" +
    "                <div class=\"butn teal\" ui-sref=\"legal\">All Cases &nbsp; <i class=\"fa fa-list-ul\"></i></div>\n" +
    "                <div class=\"butn\" ui-sref=\"case-form\">Raise a Case &nbsp; +</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"dp-header\">Legal Case Management</div>\n" +
    "\n" +
    "            <div class=\"box-item\" header=\"Submit A Legal Case\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Request type</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">Select type</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"fa fa-angle-down\"></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"case-label\" style=\"margin-top: 15px\">Date: 07/10/2016</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Download a template (optional)</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">Select template</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"fa fa-angle-down\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Name of individual requesting legal services</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <input type=\"text\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Contact details</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <input type=\"text\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Name of department or business unit</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">Select department</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"fa fa-angle-down\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Priority</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">High</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"fa fa-angle-down\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"case-field\">\n" +
    "                    <div class=\"case-label\">Detailed Description</div>\n" +
    "                    <div class=\"case-input\">\n" +
    "                        <textarea textarea=\"We require a standard NDA...\"></textarea>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"case-field\">\n" +
    "                            <div class=\"case-label\">Please upload relevant documents</div>\n" +
    "                            <div class=\"case-input\">\n" +
    "                                <input type=\"file\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <p>&nbsp;</p>\n" +
    "                <p>\n" +
    "                    <span class=\"butn teal\"><i class=\"fa fa-angle-left\"></i> &nbsp; Cancel</span>\n" +
    "                    <span class=\"butn\">Submit &nbsp; <i class=\"fa fa-check\"></i></span>\n" +
    "                </p>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>")

$templateCache.put("discounts-screen","<div id=\"discounts-screen.html\">\n" +
    "    <div screen=\"discounts\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <div class=\"dp-header\">Discounts & Offers</div>\n" +
    "\n" +
    "                    <div class=\"box-item\">\n" +
    "                        <div class=\"discounts\">\n" +
    "                            <div class=\"discount\" style=\"background-image: url('http://mm.aiircdn.com/137/785818.jpg')\">\n" +
    "                                <div class=\"discount-content\">\n" +
    "                                    <p><strong class=\"discount-title\">Employee offer from NONNO at Bay Avenue</strong></p>\n" +
    "                                    <p><strong>Company: </strong> Nonno Restaurant</p>\n" +
    "                                    <p><strong>Expires: </strong> 30 Sep 2016</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"discount-butn\">Discount: 50%</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"discount\" style=\"background-image: url('http://visitabudhabi.ae/DataFolder/Images/Thumbnails/900x600//12-Visit-Abu-Dhabi-Home-Page-2014.jpg')\">\n" +
    "                                <div class=\"discount-content\">\n" +
    "                                    <p><strong class=\"discount-title\"s>Abu Dhabi Hotels Eid Al-Adha offer</strong></p>\n" +
    "                                    <p><strong>Company: </strong> DNATA</p>\n" +
    "                                    <p><strong>Expires: </strong> 30 Sep 2016</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"discount-butn\">Summer Discount</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"discount\" style=\"background-image: url('http://www.ciarb.org/images/default-source/ciarb/our-network/landing/india-resized.jpg?sfvrsn=6')\">\n" +
    "                                <div class=\"discount-content\">\n" +
    "                                    <p><strong class=\"discount-title\">Discover India with Trident Hotels</strong></p>\n" +
    "                                    <p><strong>Company: </strong> SNTTA</p>\n" +
    "                                    <p><strong>Expires: </strong> 20 Sep 2016</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"discount-butn\">Discount: 50% Off</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"discount\" style=\"background-image: url('http://www.uaeinteract.com/news/article_pics/uae-59535.jpg')\">\n" +
    "                                <div class=\"discount-content\">\n" +
    "                                    <p><strong class=\"discount-title\">Mall Discount</strong></p>\n" +
    "                                    <p><strong>Company: </strong> SNTTA</p>\n" +
    "                                    <p><strong>Expires: </strong> 26 Sep 2016</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"discount-butn\">Discount: 15% Off</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"discount\" style=\"background-image: url('http://tocdn2-35e9.kxcdn.com/thumb/md-8/content/8_free_dubai_beaches/jbrbeach4172012_base.jpg')\">\n" +
    "                                <div class=\"discount-content\">\n" +
    "                                    <p><strong class=\"discount-title\">Dubai Hotels Discount</strong></p>\n" +
    "                                    <p><strong>Company: </strong> SNTTA</p>\n" +
    "                                    <p><strong>Expires: </strong> 15 Oct 2016</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"discount-butn\">Discount: 10% Off</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <vacancies-item></vacancies-item>\n" +
    "                    <gallery-item></gallery-item>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("gallery-screen","<div id=\"gallery-screen.html\">\n" +
    "    <div screen=\"gallery\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <div class=\"dp-header\">Image Gallery</div>\n" +
    "\n" +
    "                    <div class=\"box-item\">\n" +
    "                        <div class=\"projects\" style=\"cursor: pointer\" ui-sref=\"gallery-folder\">\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Human Resources</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">West Zone Development</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Intranet Upgrade</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Branding</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">DPG Expansion</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Corporate Governance</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Staff Photos</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Internal Branding</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"project\">\n" +
    "                                <div class=\"project-title\">Office Photos</div>\n" +
    "                                <img src=\"public/img/folder-2.svg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <vacancies-item></vacancies-item>\n" +
    "                    <!--<gallery-item></gallery-item>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("gallery-folder-screen","<div id=\"gallery-folder-screen.html\">\n" +
    "    <div screen=\"gallery-folder\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <div class=\"dp-header\">Human Resources</div>\n" +
    "\n" +
    "                    <div class=\"box-item\">\n" +
    "                        <div class=\"gallery-folder\">\n" +
    "                            <div class=\"folder-image\" ng-repeat=\"image in getImages() track by $index\">\n" +
    "                                <div class=\"image-image\" style=\"background-image:url('http://placeimg.com/600/400?random={{$index}}');\" alt=\"\"></div>\n" +
    "                                <div class=\"image-title\">HR_{{image}}</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <vacancies-item></vacancies-item>\n" +
    "                    <!--<gallery-item></gallery-item>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("home-screen","<div id=\"home-screen.html\">\n" +
    "    <div screen=\"home\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"announcements-item\"></div>\n" +
    "            <div class=\"services-item\"></div>\n" +
    "            <div class=\"hero-item\"></div>\n" +
    "            <!--<announcements-item></announcements-item>-->\n" +
    "            <!--<services-item></services-item>-->\n" +
    "            <!--<hero-item></hero-item>-->\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <div class=\"press-releases-item\"></div>\n" +
    "                    <div class=\"documents-item\"></div>\n" +
    "                    <div class=\"promos-item\"></div>\n" +
    "                    <!--<press-releases-item></press-releases-item>-->\n" +
    "                    <!--<documents-item></documents-item>-->\n" +
    "                    <!--<promos-item></promos-item>-->\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"vacancies-item\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"polls-item\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"events-item\"></div>\n" +
    "                    <div class=\"twitter-item\"></div>\n" +
    "                    <div gallery-item></div>\n" +
    "\n" +
    "                    <div class=\"promos\">\n" +
    "                        <div class=\"promo teal\" style=\"height:126px;\">\n" +
    "                            <img src=\"public/img/notebook.svg\">\n" +
    "                            <div>Policies & Procedures</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("legal-screen","<div id=\"legal-screen.html\">\n" +
    "    <div screen=\"legal\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"pull-right\" style=\"margin-top: 30px;\">\n" +
    "                <div class=\"butn teal\" ui-sref=\"legal\">All Cases &nbsp; <i class=\"fa fa-list-ul\"></i></div>\n" +
    "                <div class=\"butn\" ui-sref=\"case-form\">Raise a Case &nbsp; +</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"dp-header\">Legal Case Management</div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"box-item\" header=\"Filter Cases\">\n" +
    "                        <div class=\"search-filters\">\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <input type=\"text\" placeholder=\"Search Cases\">\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">Select Department</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Sections</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Request Types</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Document Types</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Statuses</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Priorities</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Legal Reps</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-9\">\n" +
    "                    <div class=\"box-item\" header=\"All Cases\">\n" +
    "                        <div class=\"case-documents\" ui-sref=\"case\">\n" +
    "                            <div class=\"result\" ng-repeat=\"case in getCases()\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        {{case.id}}\n" +
    "                                        <span class=\"case-status\" ng-if=\"case.open\">OPEN</span>\n" +
    "                                        <span class=\"case-status closed\" ng-if=\"!case.open\">CLOSED</span>\n" +
    "                                    </div>\n" +
    "                                    <p><span class=\"fa fa-caret-right\"></span> &nbsp; <strong>Department: </strong> {{case.department}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn teal\" ui-sref=\"case\">Reply &nbsp; <i class=\"fa fa-pencil\"></i></div>\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("post-screen","<div id=\"post-screen.html\">\n" +
    "    <div screen=\"post\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "\n" +
    "                    <div class=\"post-hero\">\n" +
    "                        <div class=\"hero-main large\">\n" +
    "                            <div class=\"main-img\" style=\"background-image: url('http://www.arthurweill.fr/img/unsplash/images_1280/7dwwcdv7wc4_1280.jpg')\"></div>\n" +
    "                            <div class=\"main-overlay\"></div>\n" +
    "                            <div class=\"main-title\">New London Sales Office</div>\n" +
    "                            <!--<div class=\"main-text\">Facere fugit itaque iusto modi omnis perferendis quis quod reiciendis totam voluptatem.</div>-->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"post-content\">\n" +
    "                        <div class=\"post-cat\">Corporate</div>\n" +
    "                        <div class=\"post-date\">12th October 2016</div>\n" +
    "                        <div class=\"post-summary\">Accusamus adipisci assumenda, beatae dignissimos ipsum iste laudantium natus quas quos sed.</div>\n" +
    "\n" +
    "                        <h2>Building the Future</h2>\n" +
    "\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "\n" +
    "                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>\n" +
    "\n" +
    "                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>\n" +
    "\n" +
    "                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>\n" +
    "\n" +
    "                        <p>\n" +
    "                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n" +
    "\n" +
    "                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n" +
    "                        </p>\n" +
    "\n" +
    "                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque ducimus, eveniet excepturi explicabo, id, laboriosam maiores minima nemo neque nihil nostrum officia provident qui sequi similique sit sunt voluptates.</p>\n" +
    "\n" +
    "                        <h2>A Different Approach</h2>\n" +
    "\n" +
    "                        <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n" +
    "\n" +
    "                        <p>\n" +
    "                            <img src=\"https://www.architectsjournal.co.uk/pictures/2000x2000fit/9/4/2/1369942_London_Skyline.jpg\">\n" +
    "                        </p>\n" +
    "\n" +
    "                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>\n" +
    "\n" +
    "                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>\n" +
    "\n" +
    "                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>\n" +
    "\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <events-item></events-item>\n" +
    "                    <vacancies-item></vacancies-item>\n" +
    "                    <gallery-item></gallery-item>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("search-screen","<div id=\"search-screen.html\">\n" +
    "    <div screen=\"search\">\n" +
    "        <div class=\"container\">\n" +
    "            <!--<div class=\"dp-header\">Document Search</div>-->\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-2\"></div>\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <div class=\"search-bar\">\n" +
    "                        <input type=\"search\" placeholder=\"Search Documents\" ng-model=\"getSearchFilter().$\" autofocus autocomplete=\"on\">\n" +
    "                        <div class=\"search-butn\"><i class=\"fa fa-search\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "\n" +
    "                    <div class=\"box-item\" header=\"Filters\">\n" +
    "                        <div class=\"search-filters\">\n" +
    "\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select ng-model=\"getSearchFilter().type\" style=\"text-transform: capitalize\">\n" +
    "                                    <option value=\"\">All Types</option>\n" +
    "                                    <option value=\"{{type}}\" ng-repeat=\"type in getTypes()\">{{type}}</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Departments</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Sections</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Document Types</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Document Subtypes</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Projects</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"box-item\" header=\"Advanced Filters\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "\n" +
    "                    <div class=\"box-item\" header=\"Results\">\n" +
    "                        <div class=\"search-results\">\n" +
    "                            <div class=\"result\" ng-repeat=\"doc in getDocuments() | filter:getSearchFilter() track by doc.id\">\n" +
    "                                <img ng-if=\"doc.type == 'document'\" class=\"result-icon\" src=\"public/img/{{doc.ext}}.svg\">\n" +
    "                                <img ng-if=\"doc.type == 'press-release'\" class=\"result-icon\" src=\"public/img/newspaper.svg\">\n" +
    "                                <img ng-if=\"doc.type == 'vacancy'\" class=\"result-icon\" src=\"public/img/curriculum-2.svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        {{doc.title}}\n" +
    "                                        <div class=\"result-updated\">Last Updated {{doc.date}}</div>\n" +
    "                                        <div class=\"search-type\">{{doc.type}}</div>\n" +
    "                                    </div>\n" +
    "                                    <p style=\"text-transform: capitalize\">{{doc.description}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("vacancy-screen","<div id=\"vacancy-screen.html\">\n" +
    "    <div screen=\"vacancy\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "\n" +
    "                    <!--<div class=\"vacancy-hero\">-->\n" +
    "                        <!--<div class=\"hero-main large\">-->\n" +
    "                            <!--&lt;!&ndash;<div class=\"main-img\" style=\"background-image: url('http://www.arthurweill.fr/img/unsplash/images_1280/7dwwcdv7wc4_1280.jpg')\"></div>&ndash;&gt;-->\n" +
    "                            <!--&lt;!&ndash;<div class=\"main-overlay\"></div>&ndash;&gt;-->\n" +
    "                            <!--<div class=\"main-title\">Front End Developer</div>-->\n" +
    "                            <!--&lt;!&ndash;<div class=\"main-text\">Facere fugit itaque iusto modi omnis perferendis quis quod reiciendis totam voluptatem.</div>&ndash;&gt;-->\n" +
    "                        <!--</div>-->\n" +
    "                    <!--</div>-->\n" +
    "\n" +
    "                    <div class=\"vacancy-date pull-right\" style=\"margin-top: 30px\">12th October 2016</div>\n" +
    "                    <div class=\"dp-header\">Data Analyst</div>\n" +
    "\n" +
    "                    <div class=\"vacancy-screen-content\">\n" +
    "                        <!--<div class=\"vacancy-cat\">Corporate</div>-->\n" +
    "                        <div class=\"vacancy-summary\" style=\"margin-top: 0\">\n" +
    "                            Data Analyst - Business Intelligence This is initially a 12 month contract based in The City of London...\n" +
    "                        </div>\n" +
    "\n" +
    "                        <h2>Full Job Spec</h2>\n" +
    "\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "\n" +
    "                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>\n" +
    "\n" +
    "                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>\n" +
    "\n" +
    "                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>\n" +
    "\n" +
    "                        <h2>Working At DPG</h2>\n" +
    "\n" +
    "                        <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n" +
    "\n" +
    "                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>\n" +
    "\n" +
    "                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>\n" +
    "\n" +
    "                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>\n" +
    "\n" +
    "                        <p><span class=\"butn\">Apply Via Email &nbsp; <i class=\"fa fa-angle-right\"></i></span></p>\n" +
    "\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <vacancies-item></vacancies-item>\n" +
    "                    <gallery-item></gallery-item>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")
}]);
})();