//HEAD 
(function(app) {
try { app = angular.module("app"); }
catch(err) { app = angular.module("app", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("announcements","<div class=\"announcements\">\n" +
    "    <i class=\"fa fa-caret-right\"></i> &nbsp; DPG on target to deliver Mudon project with competitive mortgage solutions\n" +
    "</div>")

$templateCache.put("box","<div class=\"box\">\n" +
    "    <div class=\"box-header\">\n" +
    "        {{header}}\n" +
    "\n" +
    "        <div class=\"box-expand\">\n" +
    "            <i class=\"fa fa-minus\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"box-butn\" ng-if=\"butnText\">{{butnText}} &nbsp; <i class=\"fa fa-caret-right\"></i></div>\n" +
    "    </div>\n" +
    "    <div class=\"box-content\" ng-transclude></div>\n" +
    "</div>")

$templateCache.put("documents","<div id=\"documents\">\n" +
    "    <box-item header=\"Projects\" butn-text=\"All Projects\">\n" +
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
    "    </box-item>\n" +
    "</div>")

$templateCache.put("events","<div id=\"events\">\n" +
    "    <box-item header=\"Upcoming Events\" butn-text=\"All Events\">\n" +
    "        <div class=\"events\">\n" +
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
    "    </box-item>\n" +
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
    "    <box-item header=\"Latest Gallery Images\" butn-text=\"All Images\">\n" +
    "        <div class=\"gallery\">\n" +
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
    "    </box-item>\n" +
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

$templateCache.put("header","<div id=\"header\">\n" +
    "\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-bottom\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"bottom-item header-menu\">\n" +
    "                    Menu &nbsp; <i class=\"fa fa-angle-down\"></i>\n" +
    "                    <div class=\"menu-1\" ng-transclude=\"headerMenu\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"bottom-item item-menu\">DP Destinations</div>\n" +
    "                <div class=\"bottom-item item-menu\">DP Projects</div>\n" +
    "                <div class=\"bottom-item item-menu\">DP Management</div>\n" +
    "                <div class=\"bottom-item item-menu\">DP Business Structure</div>\n" +
    "                <div class=\"bottom-item item-menu\">Dubai Holding</div>\n" +
    "\n" +
    "                <div class=\"pull-right bottom-item\">\n" +
    "                    Ahmed Mahmood\n" +
    "                    <div class=\"pull-right item-image\" style=\"background-image: url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJ1XFhWAazn6HUs97tdWjgYCPaxzli3TCrFPDxSi1eVAkOkstO')\"></div>\n" +
    "                </div>\n" +
    "                <!--<div class=\"bottom-item item-menu pull-right\" style=\"color: black\">44°C &nbsp;-->\n" +
    "                    <!--<i class=\"fa fa-sun-o\"></i></div>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-top\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"logo\" ui-sref=\"home\">\n" +
    "                    <img src=\"public/img/hewaar-white.png\" alt=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"logo right\" ui-sref=\"home\">\n" +
    "                    <img src=\"public/img/dp-logo-trans.png\" alt=\"\" style=\"height: 60px;margin-top: 0\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"menu-search\">\n" +
    "                    <i class=\"fa fa-search\" ui-sref=\"search\"></i>\n" +
    "                    <input type=\"text\" placeholder=\"Search Hewaar\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("polls","<div id=\"polls\">\n" +
    "    <box-item header=\"Polls / Surveys\">\n" +
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
    "    </box-item>\n" +
    "</div>")

$templateCache.put("press-releases","<div id=\"press-releases\">\n" +
    "    <box-item header=\"Press Releases\" butn-text=\"All Press Releases\">\n" +
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
    "    </box-item>\n" +
    "</div>")

$templateCache.put("promos","<div id=\"promos\">\n" +
    "    <div class=\"promos\">\n" +
    "        <div class=\"promo\">\n" +
    "            <img src=\"public/img/notebook.svg\">\n" +
    "            <div>Policies & Procedures</div>\n" +
    "        </div>\n" +
    "        <div class=\"promo\" style=\"background-image: url('http://images.twistmagazine.com/uploads/posts/image/8722/b9d4e806b4.jpg')\">\n" +
    "            <div class=\"promo-overlay\">\n" +
    "                <i class=\"fa fa-play\" style=\"opacity: 0.8\"></i>\n" +
    "                <div>Embrace Activities</div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"promo\">\n" +
    "            <img src=\"public/img/discount-sticker-with-percentage.svg\">\n" +
    "            <div>Souq</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("services","<div id=\"services\">\n" +
    "    <div class=\"services\">\n" +
    "        <div class=\"service\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/group.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Human Resources</div>\n" +
    "        </div>\n" +
    "        <div class=\"service\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/magnifier.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Vacancies</div>\n" +
    "        </div>\n" +
    "        <div class=\"service\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/security-shield.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Shield Line</div>\n" +
    "        </div>\n" +
    "        <div class=\"service\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/web-link.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Linkit</div>\n" +
    "        </div>\n" +
    "        <div class=\"service\" ui-sref=\"legal\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/hammer-legal-tool-symbol.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Legal Cases</div>\n" +
    "        </div>\n" +
    "        <div class=\"service\">\n" +
    "            <div class=\"service-overlay\"></div>\n" +
    "            <div class=\"service-icon\">\n" +
    "                <img src=\"public/img/files.svg\"/>\n" +
    "            </div>\n" +
    "            <div class=\"service-content\">Document Manager</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("twitter","<div id=\"twitter\">\n" +
    "    <box-item header=\"Latest Tweets\" butn-text=\"@DPGplc\">\n" +
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
    "    </box-item>\n" +
    "</div>")

$templateCache.put("vacancies","<div id=\"vacancies\">\n" +
    "    <div class=\"vacancies\">\n" +
    "        <box-item header=\"Internal Vacancies\" butn-text=\"All Vacancies\">\n" +
    "\n" +
    "            <div class=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Front End Developer</div>\n" +
    "                    <p>HTML, JavaScript, C#. ASP.Net, TDD/BDD, Jira, Confluence, Agile/Waterfall...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Data Analyst</div>\n" +
    "                    <p>Data Analyst - Business Intelligence This is initially a 12 month contract based in The City of London...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"vacancy\">\n" +
    "                <div class=\"vacancy-content\">\n" +
    "                    <div class=\"vacancy-header\">Administrator</div>\n" +
    "                    <p>Systems Administrator - Splunk, Cloud, AWS, Opsview...</p>\n" +
    "                </div>\n" +
    "                <div class=\"vacancy-arrow\"><i class=\"fa fa-caret-right\"></i></div>\n" +
    "            </div>\n" +
    "        </box-item>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("case-screen","<div id=\"case-screen.html\">\n" +
    "    <div screen=\"case\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"pull-right\" style=\"margin-top: 30px;\">\n" +
    "                <div class=\"butn\" ui-sref=\"legal\">My Cases &nbsp; <i class=\"fa fa-list-ul\"></i></div>\n" +
    "                <div class=\"butn\">Raise a Case &nbsp; +</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"dp-header\">Legal Case Management</div>\n" +
    "            <!--<div></div>-->\n" +
    "            <!--<div class=\"dp-subheader\">Case Detail</div>-->\n" +
    "\n" +
    "            <box-item header=\"Case Info\">\n" +
    "                <div class=\"case-header\">\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Case ID</div>\n" +
    "                        <div class=\"header-value\">9b72r68e27</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field\">\n" +
    "                        <div class=\"header-label\">Date</div>\n" +
    "                        <div class=\"header-value\">16th October 2016</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-field max\">\n" +
    "                        <div class=\"header-label\">Description</div>\n" +
    "                        <div class=\"header-value\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae doloribus exercitationem? Commodi inventore ipsa iure nesciunt nostrum sapiente sint?</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </box-item>\n" +
    "\n" +
    "            <box-item header=\"Case Documents\">\n" +
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
    "            </box-item>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("home-screen","<div id=\"home-screen.html\">\n" +
    "    <div screen=\"home\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <announcements-item></announcements-item>\n" +
    "            <services-item></services-item>\n" +
    "            <hero-item></hero-item>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <press-releases-item></press-releases-item>\n" +
    "                    <documents-item></documents-item>\n" +
    "                    <promos-item></promos-item>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <vacancies-item></vacancies-item>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <polls-item></polls-item>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <events-item></events-item>\n" +
    "                    <twitter-item></twitter-item>\n" +
    "                    <gallery-item></gallery-item>\n" +
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
    "                <div class=\"butn\" ui-sref=\"legal\">My Cases &nbsp; <i class=\"fa fa-list-ul\"></i></div>\n" +
    "                <div class=\"butn\">Raise a Case &nbsp; +</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"dp-header\">Legal Case Management</div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <box-item header=\"Filter Cases\">\n" +
    "                        <div class=\"search-filters\">\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <input type=\"text\" placeholder=\"Search Cases\">\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">Order By Date</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Categories</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Subtypes</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </box-item>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-md-9\">\n" +
    "                    <box-item header=\"My Cases\">\n" +
    "                        <div class=\"case-documents\" ui-sref=\"case\">\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Internal Staff List 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Excepturi Optio\n" +
    "                                        <span class=\"case-status closed\">CLOSED</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Illo Ipsam Recusandae Saepe\n" +
    "                                        <span class=\"case-status closed\">CLOSED</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Internal Staff List 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2015\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Internal Staff List 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2015\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Internal Staff List 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2015\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        Internal Staff List 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Error maxime, neque officia praesentium repudiandae similique.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2015\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Amet autem cumque dolore eaque inventore nostrum obcaecati repudiandae vel voluptas voluptatem!</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"result\">\n" +
    "                                <img class=\"result-icon\" src=\"public/img/folder (2).svg\">\n" +
    "                                <div class=\"result-content\">\n" +
    "                                    <div class=\"dp-title\">\n" +
    "                                        DPG 2016\n" +
    "                                        <span class=\"case-status\">OPEN</span>\n" +
    "                                    </div>\n" +
    "                                    <p>Distinctio ducimus ea enim ipsam nisi sed tempora. Autem libero nemo quibusdam.</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"case-actions\" style=\"margin-left: auto\">\n" +
    "                                    <div class=\"butn\" ui-sref=\"case\">View &nbsp; <i class=\"fa fa-arrow-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </box-item>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
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
    "                    <polls-item></polls-item>\n" +
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
    "                    <box-item header=\"Filters\">\n" +
    "                        <div class=\"search-filters\">\n" +
    "                            <!--{{getSearchFilter()}}-->\n" +
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
    "                                    <option value=\"\">All Subtypes</option>\n" +
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
    "                                    <option value=\"\">All Functions</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"search-filter\">\n" +
    "                                <div class=\"fa fa-caret-down\"></div>\n" +
    "                                <select>\n" +
    "                                    <option value=\"\">All Projects</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </box-item>\n" +
    "\n" +
    "                    <box-item header=\"Advanced Filters\"></box-item>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "\n" +
    "                    <box-item header=\"Results\">\n" +
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
    "                    </box-item>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")
}]);
})();