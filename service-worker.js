importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉Service Worker is working!`);
} else {
  console.log(`Boo! Workbox didn't load 😬Service Worker won't work properly...`);
}

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute, matchPrecache } = workbox.precaching;

precacheAndRoute([{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"favicon.ico"},{"revision":"11f5a5b052878df74b4ac95e530ff49d","url":"icon-black.png"},{"revision":"a3c3b9455114d88e7942b3b8f97147a3","url":"icon-primary.png"},{"revision":"a92ba365f8006bcfff9b8e487c20418c","url":"icon-white.png"},{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"images/$__favicon.ico"},{"revision":"97df5a777e0f3d1f68d7189b6f588f92","url":"images/AddPluginInfoButton.png"},{"revision":"1f0589099665caf696d8b89d9b33b727","url":"images/CommentSection_cn.png"},{"revision":"6626da8cc52cb65aaa1c9a93c8375515","url":"images/CommentSection_en.png"},{"revision":"77497c6be59dbb85b5a6dc5dcfe58009","url":"images/install_en.gif"},{"revision":"167354d0c3d7ada81ffab410805d2dd8","url":"images/install_zh.gif"},{"revision":"498de7851705db56b8812bf1d52733b3","url":"images/kin-filter-concept.svg"},{"revision":"b69aabe0914a7bcc47da2209d9f3fa35","url":"images/PluginInfoEditor_cn.png"},{"revision":"668243d998a61723550c5c36a6c8fa53","url":"images/PluginInfoEditor_en.png"},{"revision":"08d6a36f63b6e1ce27428918002c864d","url":"images/SidebarResizerDemo.gif"},{"revision":"e30e153c25df17a151dd4d4db67c101b","url":"index.html"},{"revision":"f4dfb91b41162973378511907c0e4ea4","url":"library/callback.tid"},{"revision":"87c5ca14a33f3c8c786625742ee193c7","url":"library/index.html"},{"revision":"e27355083c069c58ae29fffb2797be8a","url":"library/plugins/aaldrich_tables.json"},{"revision":"03b02d31ce78543a7d8f88866767bfed","url":"library/plugins/aaldrich_task-manager.json"},{"revision":"57e2bca0c504a6416d2914383e052469","url":"library/plugins/ahahn_tinka.json"},{"revision":"cab368fe9c0de6331c57b3cf47fd6c0a","url":"library/plugins/bimlas_disqus.json"},{"revision":"b0a5ab4aef0d24cd8dddb010bca31e08","url":"library/plugins/bimlas_kin-filter.json"},{"revision":"f92ea1edeae3d419047220dbda091112","url":"library/plugins/bimlas_locator.json"},{"revision":"9a65d803ed9435e025f37942ae2f6516","url":"library/plugins/bj_Calendar.json"},{"revision":"ed0b237b65bb8b322a5c7440d5becf70","url":"library/plugins/bj_clickaction.json"},{"revision":"3d05e7c478a253f2bdb113f9da8c93e3","url":"library/plugins/bj_drag-and-drop.json"},{"revision":"a6948759544f0094e59286be312a83e1","url":"library/plugins/bj_flexitype.json"},{"revision":"24763e4bb5d5d11e0ce428c5deed3158","url":"library/plugins/bj_jsoneditor.json"},{"revision":"574d858cbca98508c215690a71099176","url":"library/plugins/bj_markdownlike.json"},{"revision":"170193afa335f2406c79e6ecab42f493","url":"library/plugins/bj_plugins_marked.json"},{"revision":"35434fc8c1659c137ea2bc0e57d4d1d1","url":"library/plugins/bj_storytabs.json"},{"revision":"ef08b8b97314222c111fba492e52bd35","url":"library/plugins/bj_taglist.json"},{"revision":"7d6d9c3460b3cfbf25862c24f0681b67","url":"library/plugins/bj_tiddlyclip.json"},{"revision":"1979ed42b33edb7f299ab1458a871323","url":"library/plugins/bj_typestemplate.json"},{"revision":"10a4cdc491d72fc9a6c3b8963aaa2a12","url":"library/plugins/bj_visualeditor.json"},{"revision":"b25926f2f6ba09593266d9482285853b","url":"library/plugins/BTC_Muuri-Kanban.json"},{"revision":"c8ca46de535ab40c3ea0b844ada38a01","url":"library/plugins/BTC_Muuri.json"},{"revision":"4ad893b3503ccc8d8e060bf28e5c1c19","url":"library/plugins/BurningTreeC_KeeBoord.json"},{"revision":"8bcc1940057b7da35fb54dca3e38d25f","url":"library/plugins/cdaven_markdown-export.json"},{"revision":"3512da2da7f4f2118f446cd3dcbb1e1e","url":"library/plugins/commons_file-uploads-fission.json"},{"revision":"4c5418f95e43f0b860142513d54321f9","url":"library/plugins/commons_file-uploads-github.json"},{"revision":"4dec3549025eaa61afb85f819932682e","url":"library/plugins/commons_file-uploads.json"},{"revision":"c9f182e45b8091d65071843971e055d9","url":"library/plugins/D%26DTools_CreatureManager.json"},{"revision":"ecb3210d2ccc30bcd3bbcfb3ecd03a95","url":"library/plugins/D%26DTools_Creatures.json"},{"revision":"f9163465d542be183eba50c7bcb3397f","url":"library/plugins/D%26DTools_D%26DEdition.json"},{"revision":"422b55950de85f8d0cb51bc68e558676","url":"library/plugins/D%26DTools_d20.js.json"},{"revision":"1a1a9d493771cc6721e69d10cefa68a9","url":"library/plugins/D%26DTools_EncounterBuilder.json"},{"revision":"79bcd093601d5256946b8b438ca366d6","url":"library/plugins/D%26DTools_NPCNameGenerator.json"},{"revision":"3fe7b9e1c459342ff28566dc8a6a5886","url":"library/plugins/D%26DTools_Spells.json"},{"revision":"f378cf99586bbdcb9905cef1a0ede47f","url":"library/plugins/danielo_context.json"},{"revision":"214aabdca7b1695fc6193a286446906a","url":"library/plugins/danielo515_encryptTiddler.json"},{"revision":"d2d306a977fda0b641665c1149cfb1de","url":"library/plugins/dullroar_sitemap.json"},{"revision":"8ef2caf60f7258e6497649e9941e2a9a","url":"library/plugins/eucaly_flexwidth.json"},{"revision":"7839436c4f37663edf8ef1c0b0c4a5d7","url":"library/plugins/eucaly_matchfilter.json"},{"revision":"d9ae939520643c2976545232c9aa49df","url":"library/plugins/eucaly_popuptagger.json"},{"revision":"cf1070e71975a347d1bcbf4cb573f289","url":"library/plugins/eucaly_quickjump.json"},{"revision":"607526cc151e0faa5f7d118586e3d303","url":"library/plugins/eucaly_titleme.json"},{"revision":"d59964c61eaf7e681cebd5885c9e6eeb","url":"library/plugins/felixhayashi_hotzone.json"},{"revision":"682bf7e727c79c6081001178500e4f8c","url":"library/plugins/felixhayashi_respawn.json"},{"revision":"56a98cdbd07a7ca29501aea078dcd010","url":"library/plugins/felixhayashi_tiddlymap.json"},{"revision":"900f5f1273b1c1519a381afec147667f","url":"library/plugins/felixhayashi_vis.json"},{"revision":"f9cc93a2d342ce45f35387461e6ff652","url":"library/plugins/flibbles_relink-markdown.json"},{"revision":"05cc829219274af25b4b3ac402ce9916","url":"library/plugins/flibbles_relink-titles.json"},{"revision":"9debefad820a434fa471b09e74139738","url":"library/plugins/flibbles_relink.json"},{"revision":"20bbf0e53a0ef71c46178f04bbabdb3a","url":"library/plugins/Gk0Wk_echarts-gl.json"},{"revision":"80541be84660c09db0f57f09a636d9cb","url":"library/plugins/Gk0Wk_echarts-graph-modularity.json"},{"revision":"c4080b70ae194189ad7ab01cac79463c","url":"library/plugins/Gk0Wk_echarts-liquidfill.json"},{"revision":"abdd21e721509b3e17747d43a47381bc","url":"library/plugins/Gk0Wk_echarts-stat.json"},{"revision":"5c330a614847c8582560d6a424958dd8","url":"library/plugins/Gk0Wk_echarts.json"},{"revision":"308658da692421d00d829c4097d685bf","url":"library/plugins/Gk0Wk_jQuery.json"},{"revision":"f755bfdf7451a60c51a0f273c099e0b7","url":"library/plugins/Gk0Wk_lodash.json"},{"revision":"88120c1504023641bc99fd5483f834b1","url":"library/plugins/Gk0Wk_notionpage-backlink.json"},{"revision":"c4e26482e54404ca7d24a1590df6a939","url":"library/plugins/Gk0Wk_notionpage-covericon.json"},{"revision":"fa28472162ad96796335f3f7c8026b4c","url":"library/plugins/Gk0Wk_page-toc.json"},{"revision":"1e46a980fb75b8ce3975e860e9b9e1dc","url":"library/plugins/Gk0Wk_sidebar-resizer.json"},{"revision":"d6970e7564edced4f5f006c303502a9c","url":"library/plugins/Gk0Wk_TiddlySeq.json"},{"revision":"bd976a7bc5961e0c7b7a1fc41b368341","url":"library/plugins/Gk0Wk_TW5-CodeMirror-Enhanced.json"},{"revision":"52ef1b505d31a37f1478fd4d56c0e68b","url":"library/plugins/gsd5_core.json"},{"revision":"dd74c92cd7e3614adf36155e951d5b96","url":"library/plugins/gsd5_ticklers.json"},{"revision":"547cf38f25cc4a5543877b133e098f59","url":"library/plugins/HCHaase_TOCgeneric.json"},{"revision":"9642695c91b43417690c5fff0db94cf3","url":"library/plugins/hoelzro_full-text-search.json"},{"revision":"ee1aca0c67bb564bac5235d4999f5efa","url":"library/plugins/hoelzro_progress-bar.json"},{"revision":"e7a7c3f4674622ef8bb5073a9bfe9a32","url":"library/plugins/inmysocks_Bookmarks.json"},{"revision":"3816e3bd2dda34baee6da316d97c6e76","url":"library/plugins/inmysocks_Calendar.json"},{"revision":"0fddb6f57ca25a98861bd21528931943","url":"library/plugins/inmysocks_CategoryLists.json"},{"revision":"1239f39c2b000e3725091ec131310177","url":"library/plugins/inmysocks_Citations.json"},{"revision":"2d02ab55d5d9f1f0738806f8148bbb8d","url":"library/plugins/inmysocks_Contacts.json"},{"revision":"f27fd8da8299ef57580796cd0c40ce2c","url":"library/plugins/inmysocks_Dashboard.json"},{"revision":"b4c8928b5657ccfdddbe5437c9ffeacc","url":"library/plugins/inmysocks_IconMenus.json"},{"revision":"95ddbb23c567397a0d693d532671e8b6","url":"library/plugins/inmysocks_LibraryTracker.json"},{"revision":"4807a8cb77f70af88688cbca7ae99d62","url":"library/plugins/inmysocks_ManageTOC.json"},{"revision":"84bc87027e7fc1a3b9f5794a1f6c894d","url":"library/plugins/inmysocks_MinimalTaskList.json"},{"revision":"2eb0c44f38556d30e98131f864e037b6","url":"library/plugins/inmysocks_QuickNotes.json"},{"revision":"f95b71048ab1214465dd13067503b649","url":"library/plugins/inmysocks_randVal.json"},{"revision":"a2a7321283cf477fd54ae160530f8702","url":"library/plugins/inmysocks_SearchableDictionary.json"},{"revision":"831bbbc58bf3e87dd701089ea43a4388","url":"library/plugins/inmysocks_StartupActions.json"},{"revision":"70650c054e34e1c67f047ecb59468b72","url":"library/plugins/inmysocks_TaskList.json"},{"revision":"3fa5785e67b8a60bca406875228674e9","url":"library/plugins/inmysocks_TriggerActions.json"},{"revision":"941884eddb22abfd4a3e4b341d2ddfad","url":"library/plugins/innoq_ace.json"},{"revision":"3221c2fa5c4c87e918641c0c10045333","url":"library/plugins/jd_mobvsimp.json"},{"revision":"ea7a126130f56c55ffe22e0acb21ac29","url":"library/plugins/jd_plainrevs.json"},{"revision":"dc0e100c9b713d9f3b21a7c5a2b70a45","url":"library/plugins/joerenes_TW5-TeXZilla.json"},{"revision":"15fd41759a1bea1fb75f613c35efebfa","url":"library/plugins/kixam_datepicker.json"},{"revision":"04c8e8dc9eb97ae3c55887f93921befa","url":"library/plugins/kixam_moment.json"},{"revision":"2665261cae3b33239b2dd93c560a3ecc","url":"library/plugins/kixam_timeline.json"},{"revision":"10403ddcdcf0f280c0bc02996286ac88","url":"library/plugins/kookma_commander.json"},{"revision":"b8c6472c79e52b0b51b155d2017ce57f","url":"library/plugins/kookma_favorites.json"},{"revision":"c2e391e3e7c680a02a6d4a0ad761d3eb","url":"library/plugins/kookma_gatha.json"},{"revision":"ef93afdb797233a639a1d17e073b5695","url":"library/plugins/kookma_hsl.json"},{"revision":"4b442b450347a81c2f5869afb320bff5","url":"library/plugins/kookma_indexer.json"},{"revision":"65819e0accb152606b865651d268b9fb","url":"library/plugins/kookma_pinboard.json"},{"revision":"6a1a0d42ff049a8a5aba20c29a6ef5ce","url":"library/plugins/kookma_refnotes.json"},{"revision":"214d6072ebd28d50ef5540d4ad7c0483","url":"library/plugins/kookma_search.json"},{"revision":"88fee7d520a950971715a89cbd679d14","url":"library/plugins/kookma_searchwikis.json"},{"revision":"48399ac00d82723470b7e43873973598","url":"library/plugins/kookma_section.json"},{"revision":"0dc8efa3fc81a9618ff59a022dd00bb0","url":"library/plugins/kookma_shiraz.json"},{"revision":"595111ddd21c80b61e1379a2e82625f9","url":"library/plugins/kookma_slider.json"},{"revision":"0e3d8d8a253bf2c18e1b97ec50418a9b","url":"library/plugins/kookma_solution.json"},{"revision":"a5a0ae49f6403372505a7d65a51c9cb0","url":"library/plugins/kookma_tamasha.json"},{"revision":"85159f66a2cd3254e8685d8b986902d4","url":"library/plugins/kookma_timelines.json"},{"revision":"d23811e8b36289148b1311bb8261551e","url":"library/plugins/kookma_toc.json"},{"revision":"885eeab5a139b1efd751fda9850c78ce","url":"library/plugins/kookma_todolist.json"},{"revision":"0e278c8db8b5e39539c5204d7f8a126d","url":"library/plugins/kookma_trashbin.json"},{"revision":"bc50aee54cf4e22c35fa77af7e6e88e8","url":"library/plugins/kookma_utility.json"},{"revision":"7006527ce858a1244fcf2d6774d2c2b5","url":"library/plugins/kookma_vote.json"},{"revision":"e0e6391845fe2e89b0b1d4a1189f1cc5","url":"library/plugins/linonetwo_commandpalette.json"},{"revision":"12be3c7551695b7983236a4ca40a9dda","url":"library/plugins/linonetwo_copy-on-select.json"},{"revision":"f9284bf8a9e0128488f2bdc2934d044a","url":"library/plugins/linonetwo_flowtiwi-sidebar.json"},{"revision":"0db79eb38af7d7765cb616b7752be4c9","url":"library/plugins/linonetwo_github-external-image.json"},{"revision":"bf686a30f6cd7f55db0cccb1173f6642","url":"library/plugins/linonetwo_inverse-link-and-folder.json"},{"revision":"1f0c29aecc70b9d6d391cbe949e48070","url":"library/plugins/linonetwo_itonnote.json"},{"revision":"2215d7db9f14f5f9f3879a743a91446b","url":"library/plugins/linonetwo_markdown-transformer.json"},{"revision":"24e3b8395ac483796a6e9d284207cd4b","url":"library/plugins/linonetwo_open-in-external-app.json"},{"revision":"00b2bce8d6940a974945261aee5f6de1","url":"library/plugins/linonetwo_pinyin-fuzzy-search.json"},{"revision":"65830e22d0661d678a92ba76f94ca29a","url":"library/plugins/linonetwo_prevent-edit.json"},{"revision":"4b838d4041d0155db177ce1f463cf4ac","url":"library/plugins/linonetwo_preview-glass.json"},{"revision":"d82a5c706931c70abaa99f94be85dabb","url":"library/plugins/linonetwo_service-worker.json"},{"revision":"b0752ec8baf112821690baaefd7e2231","url":"library/plugins/linonetwo_slate-write.json"},{"revision":"5f395e0fbf12752e7e3f667a4cbf60de","url":"library/plugins/linonetwo_smart-field.json"},{"revision":"c732635f753a95e8e87fd5a2a109ac72","url":"library/plugins/linonetwo_source-control-management.json"},{"revision":"270c00e984fa24e2071c388514ffc2bd","url":"library/plugins/linonetwo_sub-wiki.json"},{"revision":"1070c92e83271c28cee73b8bbcd72634","url":"library/plugins/linonetwo_template-list.json"},{"revision":"8b210dea780a056d9d34ba2577578d55","url":"library/plugins/linonetwo_tw-mobile-sync.json"},{"revision":"2391f558b7bd3546eb0fdb34236a25e5","url":"library/plugins/linonetwo_tw-react.json"},{"revision":"a1caf7e113951ab7dcc2997b72ff9a4a","url":"library/plugins/linonetwo_zx-script.json"},{"revision":"42a169cc4980915fa8431233fcb43ff2","url":"library/plugins/longguzzz_OpenForest.json"},{"revision":"d05889b7b9076794b646c59c620b67f2","url":"library/plugins/longguzzz_TagViewModifier.json"},{"revision":"e54e94a631346dc7fe9017d53eb79777","url":"library/plugins/malgam_loadnew.json"},{"revision":"7951ca3f911a76c056471a80b2cdb633","url":"library/plugins/malgam_version-control.json"},{"revision":"22d385de9b451ebe921b99bfaf89a5b8","url":"library/plugins/mat_field-value-selector.json"},{"revision":"375842c95bb9ecc1a344db4c96c56782","url":"library/plugins/mklauber_aliases.json"},{"revision":"3e5bc6db6c76b8e2949bbd4ebfd38809","url":"library/plugins/mklauber_dropaction.json"},{"revision":"97e77b2a744f6ec33abbb369ef7b7d3a","url":"library/plugins/mklauber_in.js.json"},{"revision":"b8d451a28883771d4059d54c8c84da6a","url":"library/plugins/mklauber_math.js.json"},{"revision":"8f93699700a0c963e2124040f8fd38c7","url":"library/plugins/mklauber_preferences.json"},{"revision":"19f94c95a7c13d8d903e812c8b8cd458","url":"library/plugins/mklauber_shuffle.json"},{"revision":"09b6974504cb6060f4704bcbf1144160","url":"library/plugins/mklauber_SoundPad.json"},{"revision":"7dbca00b3a09323236fb4996071fc8b6","url":"library/plugins/mklauber_substory.json"},{"revision":"f7d1fe5bc9a37f2b2d137ec0b0ac1857","url":"library/plugins/nico_notebook-mobile.json"},{"revision":"b68a8f4a6301d5bd7b70409b87f7009f","url":"library/plugins/nico_shields.json"},{"revision":"96e2f2c046e0a56c17908a86a78bb8a6","url":"library/plugins/noteself_core.json"},{"revision":"f099386936754a614ae113e701945594","url":"library/plugins/noteself_online.json"},{"revision":"b18fb4bd42071932a49110f156350dfd","url":"library/plugins/oeyoews_copy-title.json"},{"revision":"1a5d8bdc52e4a36a74fdd27411ab7b46","url":"library/plugins/oeyoews_cpl-info.json"},{"revision":"be962835b3c37dde3c25cb25824d55bc","url":"library/plugins/oeyoews_gh-repo-btn.json"},{"revision":"0c94cd0c58bb273cca31cf995a9ab052","url":"library/plugins/oeyoews_mb-hidesidebar.json"},{"revision":"96157a28d2aa2e63a81d8c782bde6a5e","url":"library/plugins/oeyoews_notification-style.json"},{"revision":"4df28bd07655bd0f2c66e3b9185b7644","url":"library/plugins/oeyoews_search-images.json"},{"revision":"bc1832c8cf067009a0a4455d3950ef8e","url":"library/plugins/oeyoews_shortcuts.json"},{"revision":"7b9f065fc8890ac3f4791977e21ea864","url":"library/plugins/oeyoews_title-caption.json"},{"revision":"6108a956e542cb5e9d1105bb9a8ebc71","url":"library/plugins/oeyoews_tw-hitokoto.json"},{"revision":"933b25a67d4c3c13a0dc06451b5bbbd0","url":"library/plugins/oeyoews_tw-meta.json"},{"revision":"1c546aa3ce586bd2fdd7dfaf4a3b33e0","url":"library/plugins/oeyoews_tw-scrollbar.json"},{"revision":"9cbbe11ab3bb443ced3483b6c532166e","url":"library/plugins/oeyoews_twfooter.json"},{"revision":"98a8239a68e91d3cfba465443c649d44","url":"library/plugins/oeyoews_twm.json"},{"revision":"0e3f4256dfbec1cb7c8ee4b32abce5db","url":"library/plugins/oeyoews_two-themes-pc-mb.json"},{"revision":"90a05ebbbc07abecf58bf3781e3c7e3c","url":"library/plugins/oflg_fishing-analysis.json"},{"revision":"db086cdb73c3067a532dc835dd67a4e0","url":"library/plugins/oflg_fishing-catchfish.json"},{"revision":"ce823fcf6940797f20714c91e1a9a5a6","url":"library/plugins/oflg_fishing-twpub.json"},{"revision":"38ef3a9fecde2fedf2c08fd7a9cfa8f8","url":"library/plugins/oflg_fishing-zh-Hans.json"},{"revision":"bccaadd437e24eb052b84408b208d54f","url":"library/plugins/oflg_fishing.json"},{"revision":"6a9148974577bf8817e93084acdc90b1","url":"library/plugins/oflg_lazy-tiddler.json"},{"revision":"c04e3ff519c088dfd24fa2da0edb473c","url":"library/plugins/phiv_streams-fusion.json"},{"revision":"51e51b16b4b70d48b3fee7cd80507376","url":"library/plugins/rboue_SocialCalc.json"},{"revision":"13734860735d02f3662277f1bf59a5ba","url":"library/plugins/rboue_Three.js-plus.json"},{"revision":"8abe3da6d629a790c0f80740584bb010","url":"library/plugins/rboue_Three.js.json"},{"revision":"5f9881eec4d90c4d0522e2b6d74febbe","url":"library/plugins/rmnvsl_krystal.json"},{"revision":"0f6fe82e183babce0d84e71a4ef996d2","url":"library/plugins/sk_BalanceCheck.json"},{"revision":"f4b1964d4e2d2848f28273a0dff76d2f","url":"library/plugins/sk_ColorText.json"},{"revision":"0aa9b8a10e02e4eaa0b988fe8316c93b","url":"library/plugins/sk_EmailConvert.json"},{"revision":"9ec2f9d1edaac3002b230d23cab045b2","url":"library/plugins/sk_FancyQuotes.json"},{"revision":"162560a21599b89ed30dfb136f1412e1","url":"library/plugins/sk_FindReplace.json"},{"revision":"e701b4bd3418064e337a963c449f7afd","url":"library/plugins/sk_HTMLConvert.json"},{"revision":"245927e9469fc7c751730c96e2cfb561","url":"library/plugins/sk_Indents.json"},{"revision":"498c74772ec7717752cbb08e36d40152","url":"library/plugins/sk_Links.json"},{"revision":"3d7fc03199043d02089075fbd660a67d","url":"library/plugins/sk_MathCell.json"},{"revision":"15ed6943f4ec81cec0617c86bb46f83d","url":"library/plugins/sk_SidebarHelp.json"},{"revision":"9f8eb1099e54ce28fcd0d2f3635fa628","url":"library/plugins/sk_TableCols.json"},{"revision":"4881dc77511adb41c7e14b4fc4826ec2","url":"library/plugins/sk_TableHelper.json"},{"revision":"2e415382d2ddd1ecdf74d711bf4dbb3c","url":"library/plugins/sk_TabletoTiddlers.json"},{"revision":"aa06b99c8f2b85b091b3d7024242ee54","url":"library/plugins/sk_Transclude.json"},{"revision":"c0171bac4cfbcd711561809207a39124","url":"library/plugins/sk_WhiteList.json"},{"revision":"959a99863d233fe0036f9ab948d8fe1d","url":"library/plugins/smilyorg_monaco-wikitext.json"},{"revision":"15c8cf65583c6274ae7ed31f06d2e325","url":"library/plugins/smilyorg_monaco.json"},{"revision":"ec6eb449bdcc951b7cd2be1bce62ea51","url":"library/plugins/sobjornstad_TiddlyRemember.json"},{"revision":"c2f34b8efdea4cba28506716e5ed11ef","url":"library/plugins/sq_file-uploads-PUT.json"},{"revision":"fc2fb4c873c169760f7fa02ce0f30f57","url":"library/plugins/sq_links-context-menu.json"},{"revision":"583bf42b3277b8054d244961efe224b9","url":"library/plugins/sq_node-files-PUT-support.json"},{"revision":"c9f4f3497dbadd5498cba771bb8b42d1","url":"library/plugins/sq_streams.json"},{"revision":"28097c0620b3ecc94f4c1c8b804915c1","url":"library/plugins/stobot_sticky.json"},{"revision":"fff22589b3c63b93609b525073be9e17","url":"library/plugins/sycom_atom-feed.json"},{"revision":"159407b48973aab08466157c8305930b","url":"library/plugins/sycom_feather-icons.json"},{"revision":"15afe4925dbf01b0be996bc2aad4d74e","url":"library/plugins/sycom_g-analytics.json"},{"revision":"5790568e987d8e2cbda1a9cddf7e195c","url":"library/plugins/sycom_leaflet.json"},{"revision":"56bbf0c21a9ab4c5df3f48ce0cfaa213","url":"library/plugins/telmiger_EditorCounter.json"},{"revision":"91b32b18b7eb01ad43979034f5a840a7","url":"library/plugins/telmiger_HarveyBalls.json"},{"revision":"0fb4fa153930b9368a9312a805fa4dfe","url":"library/plugins/telmiger_PluginSize.json"},{"revision":"fd0cbe98016bec396a2faeff24bd6394","url":"library/plugins/telmiger_rpn.json"},{"revision":"c2d40380b3f33d4fb94435e92afa8241","url":"library/plugins/tesseract_Action-JSONtid.json"},{"revision":"6f8c68a6872c690269d92af79bbfd730","url":"library/plugins/tesseract_attributes.json"},{"revision":"24682f6d9abdaa5eaba534d5e31c0ea0","url":"library/plugins/tesseract_CleverNote.json"},{"revision":"9bca8fb6d6620e1c84fc991796ebdedb","url":"library/plugins/tesseract_dragSnippetTitle.json"},{"revision":"f8b4c49d7be6fea7270f3d30b6c11e00","url":"library/plugins/tesseract_ExtendedInfo.json"},{"revision":"dae7b13d4abe2bcaf252148a2ff39701","url":"library/plugins/tesseract_forloop.json"},{"revision":"017685b846f02ed92c9a3d28ee930b1d","url":"library/plugins/tesseract_ImportResolution.json"},{"revision":"1466a8d4a866a5b6c13220a3c5b0d0cb","url":"library/plugins/tesseract_Moments.json"},{"revision":"5dd4b3b95c57b6bc2e86c8be412f36bc","url":"library/plugins/tesseract_reveal-Ext.json"},{"revision":"91b73d4c6b0b38b00075d0ae52e21462","url":"library/plugins/tesseract_sortan.json"},{"revision":"394734c6c77ab5f6c71911facfd6b36c","url":"library/plugins/tesseract_swal.json"},{"revision":"0bf8c2438a013b2126ae9a48b007831f","url":"library/plugins/tesseract_tekan.json"},{"revision":"1c12302f813159cc6cf84fc663a96d10","url":"library/plugins/tesseract_uncheckactions.json"},{"revision":"05f87df7aa23bdd1a9053505e62528d3","url":"library/plugins/tesseract_uuid.json"},{"revision":"a974c25d74f9915d7e32a1b6f2c168f4","url":"library/plugins/tg_bottom.json"},{"revision":"fbc86d72357de9b31f195252d5acd88a","url":"library/plugins/tg_chars-button.json"},{"revision":"9937579c3abfb9f678651fdeb710da7b","url":"library/plugins/tg_exploration.json"},{"revision":"f4e6028e779372487168b47bf2a574e8","url":"library/plugins/tg_highlight-button.json"},{"revision":"28b470358259cdb8f856811c42c27b14","url":"library/plugins/tg_iframe-button.json"},{"revision":"a64e6639b6257decffcdf10352787bd3","url":"library/plugins/tg_layout.json"},{"revision":"2c89fee8fc9d357663942474924119c2","url":"library/plugins/tg_leftmenu.json"},{"revision":"a6dd44a0657acec461a00d2f9de73cd2","url":"library/plugins/tg_list-bullet2-button.json"},{"revision":"0e4794acfd878ddcfe39758866c54a5c","url":"library/plugins/tg_mark-button.json"},{"revision":"5b545e91010f611460b0565b0aef6c5a","url":"library/plugins/tg_newline-button.json"},{"revision":"e53e8c069889e7fb4ac7708f68ce5892","url":"library/plugins/tg_note-button.json"},{"revision":"7434f017232421b02e09975a9652bfd1","url":"library/plugins/tg_prettylink-button.json"},{"revision":"f4925fc7f4eba961eb2176d35c2c28a9","url":"library/plugins/tg_ro.json"},{"revision":"441ff8158eb905b1828d1bf04a134342","url":"library/plugins/tg_sro.json"},{"revision":"2ceca08af2de0503eb0bc26dd86a84fb","url":"library/plugins/tg_tabstory.json"},{"revision":"0e75a523a8ac2f3de088203121e743ee","url":"library/plugins/tg_tiddlersbar.json"},{"revision":"bfe137d9f1c1fb96f9f6a10e5f7b0725","url":"library/plugins/tg_timestamp-button.json"},{"revision":"71791f704f303917bc64c08fd81fb4cc","url":"library/plugins/tg_toolbar.json"},{"revision":"27b7cee0f61dc994997a5835e74b388a","url":"library/plugins/tg_topleftmenu.json"},{"revision":"343848ad06c8dae13269206028fbc8f9","url":"library/plugins/tg_topmenu.json"},{"revision":"afb517bb19d56fe4699301475b103f41","url":"library/plugins/tg_tristate.json"},{"revision":"085699890d8ee2cbe8749b198f9afe4c","url":"library/plugins/TheDiveO_FontAwesome.json"},{"revision":"e7e1081e31fc5cc5a0c2a1a8ecf2ef2c","url":"library/plugins/TheDiveO_IPlayerInspiredVideojsSkin.json"},{"revision":"76d3f69444e6ca71e8876af4b1540762","url":"library/plugins/TheDiveO_SublimeInspiredVideojsSkin.json"},{"revision":"6b468414f5cf942c83254be68baa82ac","url":"library/plugins/TheDiveO_ThirdFlow.json"},{"revision":"61d238f27db1a1b66356ab5b50c14cd2","url":"library/plugins/TheDiveO_TwFusejs.json"},{"revision":"f0ef1d1d5bc4c123fbb72a8e7dba2e72","url":"library/plugins/TheDiveO_TwTube.json"},{"revision":"39b658236e702505d971844939de8dc5","url":"library/plugins/TheDiveO_VideojsHotkeys.json"},{"revision":"3d548750531f98e4affe9201ed7f851e","url":"library/plugins/TheDiveO_YouTubeInspiredVideojsSkin.json"},{"revision":"79d0f8c38c0d1a9ead35a2f31bec15a4","url":"library/plugins/themes_inmysocks_Mobile.json"},{"revision":"0ac9b0cd27d3956c7301d4a3dc4ac8a1","url":"library/plugins/themes_jd_Alone.json"},{"revision":"1975cf3d0585f45e4271841badb734c3","url":"library/plugins/themes_jd_Material.json"},{"revision":"99a7960db8c78864ef3ac12617ed3ab3","url":"library/plugins/themes_jd_Mono.json"},{"revision":"84495f105654a2acd93f3dc5da54da3d","url":"library/plugins/themes_jd_Whitespace.json"},{"revision":"0aeb01ef699847deee694826bbad6a43","url":"library/plugins/themes_linonetwo_itonnote.json"},{"revision":"8599bd7aa689821377324ae5193231f1","url":"library/plugins/themes_nico_notebook.json"},{"revision":"5013e6074367ed3d78a381a56085f67e","url":"library/plugins/themes_tg_emphasized.json"},{"revision":"6c5a3ecd0abbb1e920566dc6c7a3846c","url":"library/plugins/themes_tg_mobie.json"},{"revision":"439d9e756db9b71f7f7d0ec546312bbd","url":"library/plugins/themes_tiddlywiki_snowwhite.json"},{"revision":"2bb12c2087d9921e0771027b1d800a7c","url":"library/plugins/themes_wikilabs_slant-01.json"},{"revision":"fa58cc2e7259c1dd21eff0056196b3df","url":"library/plugins/themes_xp-j.json"},{"revision":"ef8491a104077ce5b99a5d0e073b5912","url":"library/plugins/themes_xp-k.json"},{"revision":"9201e47ce13b5c6b7e5d4f80631a3ef6","url":"library/plugins/tobibeer_appear.json"},{"revision":"4bf52b28f425f4fdebbdef0e69490fd3","url":"library/plugins/venomspinner_ghostwriter.json"},{"revision":"f4c934fcdffba5bbaf4ef455bf83045b","url":"library/plugins/wikilabs_advanced-search-plus.json"},{"revision":"de84da57a47d06d457e0de908312c0b9","url":"library/plugins/wikilabs_bundler.json"},{"revision":"4a4123fb1a9c46011a8b7bf9cc43ad61","url":"library/plugins/wikilabs_click-effect.json"},{"revision":"74a040838df9e748b88aa5f3c9a88282","url":"library/plugins/wikilabs_custom-markup.json"},{"revision":"1eaf0f8d5d7f5239cb9b5c962b3ba625","url":"library/plugins/wikilabs_edit-tabs.json"},{"revision":"ddccab66cc6f52533a7c9c8d5e2b9cf0","url":"library/plugins/wikilabs_field-editor.json"},{"revision":"3e9fcfa89692a8491cc0c102a8e0a7e0","url":"library/plugins/wikilabs_field-search.json"},{"revision":"c4cded9e78ab1bd685807a52aa1a9a70","url":"library/plugins/wikilabs_field-visibility.json"},{"revision":"09c5f4aa457c0ebc1bc787258f7d02a2","url":"library/plugins/wikilabs_info-session.json"},{"revision":"2ef16522918c68b626cbeae9b31829cb","url":"library/plugins/wikilabs_info-tagmap.json"},{"revision":"51b525ecc10b2cc5e79fd91419ee1cc9","url":"library/plugins/wikilabs_keyvalues.json"},{"revision":"be93a8b7cc38f7e301a54f186cd90a22","url":"library/plugins/wikilabs_link-to-tabs.json"},{"revision":"c11f3c131215be684025868383642c39","url":"library/plugins/wikilabs_markdown-it.json"},{"revision":"c57a802c1124581795ec0ad005ff7583","url":"library/plugins/wikilabs_multicol-dropdown.json"},{"revision":"78dad922bff2f2599100075c97646783","url":"library/plugins/wikilabs_new-tiddler-from-search.json"},{"revision":"8cca105a71eaa55139c66040f1e9f3a9","url":"library/plugins/wikilabs_persistent-states.json"},{"revision":"e34616dd4c2a9383c4a90b0d60591359","url":"library/plugins/wikilabs_pragma-comment.json"},{"revision":"9e28c84cf8c048c45886f0fc36a407d5","url":"library/plugins/wikilabs_presentation-test.json"},{"revision":"d8658a2ca39e6602494581f41ea468a5","url":"library/plugins/wikilabs_remove-states.json"},{"revision":"501107983daa6d8e456b16138fac412b","url":"library/plugins/wikilabs_space-space-newline.json"},{"revision":"e0576852513e18208d59e8ef0e1e68eb","url":"library/plugins/wikilabs_speciallinks.json"},{"revision":"467134ec7307fdb5a565e15e064fd77b","url":"library/plugins/wikilabs_thin-scrollbars.json"},{"revision":"ba130d368bb07bdee24cef62f79db772","url":"library/plugins/wikilabs_tm-open-story.json"},{"revision":"6defe048ce6c43de5c388c260358484b","url":"library/plugins/wikilabs_tocP.json"},{"revision":"1c7ed977ce41477d075387dd6f918e55","url":"library/plugins/wikilabs_trigger.json"},{"revision":"aa2a70f8df565d2f3b1e3b243ab29eb0","url":"library/plugins/wikilabs_uni-link.json"},{"revision":"246e1d15da797f2b07ad451f89f0760e","url":"library/plugins/wikilabs_webdav-lm.json"},{"revision":"61cf7b15af1434837761a416d4607be0","url":"library/plugins/wikilabs_xenlist.json"},{"revision":"a789069aa7a4738dd3cc274e4fed39de","url":"library/plugins/xp_aggregation-aphorism.json"},{"revision":"6fff410fc5cfc6db31394aaeb616ceee","url":"library/plugins/xp_aggregation-bookshelf.json"},{"revision":"589634198dea12aa2b5ab6e90743b9d4","url":"library/plugins/xp_aggregation-checklist.json"},{"revision":"23c3d926bba37ab23037c163cb036c82","url":"library/plugins/xp_aggregation-consumer.json"},{"revision":"ad191ae148281730782b3be0ed0af74a","url":"library/plugins/xp_aggregation-courses.json"},{"revision":"b907aa6bc165d756e10ed6aee705272d","url":"library/plugins/xp_aggregation-enterprises.json"},{"revision":"750fd0150afed9df10b4c2326beb5276","url":"library/plugins/xp_aggregation-gtd.json"},{"revision":"634f953a08c9cf78dee7e6da52d6d8b3","url":"library/plugins/xp_aggregation-howtos.json"},{"revision":"c9f3b5b1bc80fb14dffce927684eb9f8","url":"library/plugins/xp_aggregation-knowledge-system.json"},{"revision":"ace5c1b6fe5b029b642ac563f0f08925","url":"library/plugins/xp_aggregation-people.json"},{"revision":"0aca89d50c99bf3ac4806c0c1d8d6e61","url":"library/plugins/xp_aggregation-plugins.json"},{"revision":"c55ac1d1db16b7b701183478484851ad","url":"library/plugins/xp_aggregation-snippets.json"},{"revision":"b520a0f4b28e5321fa872a1c86410bb4","url":"library/plugins/xp_aggregation-software.json"},{"revision":"791199c4febd19500df113c30c20b30b","url":"library/plugins/xp_aggregation-whys.json"},{"revision":"bebad4f78ccf87978e2709353b73ba1e","url":"library/plugins/xp_aggregation.json"},{"revision":"b515c1294aa8c95175cace439ea598e8","url":"library/plugins/xp_columns.json"},{"revision":"608270dbc8e3b6b4e9da589cc9ea05f4","url":"library/plugins/xp_diary.json"},{"revision":"50807f527d090b03627dc1399fd48fc9","url":"library/plugins/xp_emoji-button.json"},{"revision":"84d67c36b6942fc3a4aeb1dcb382337b","url":"library/plugins/xp_html-button.json"},{"revision":"975ca208d0bb206bda981cc75fa07242","url":"library/plugins/xp_leftopentab.json"},{"revision":"8d0237445e7e0382e36589301fa8cdb7","url":"library/plugins/xp_magicsidebar.json"},{"revision":"f87228647f2eb3c5e294346268bf1f91","url":"library/plugins/xp_managetags.json"},{"revision":"975612dc4099b39e7a58ef3f921d0236","url":"library/plugins/xp_mark-button.json"},{"revision":"a47c52bb409997d87f171a949d812851","url":"library/plugins/xp_quickbar.json"},{"revision":"e1e4829db49d6a411ad27f94513c555e","url":"library/plugins/xp_splashscreen.json"},{"revision":"22e35c7d3f417b9a4775dd2969a253e5","url":"library/plugins/xp_switchlayout.json"},{"revision":"006209145eef486bc52e25b26b7185b5","url":"library/plugins/xp_theme-changer.json"},{"revision":"7f3033f4d2051feb6d032ae010b484ba","url":"tiddlywikicore-5.2.2.js"},{"revision":"8c969b8f06012b19a889c3ca2685a9e6","url":"vercel.json"}]);

registerRoute(
  /\.css$/,
  // Use cache but update in the background.
  new StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|woff2?|ttf)$/,
  // Use the cache if it's available.
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        // Cache only a few images.
        maxEntries: 100,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(/\.js$/, new StaleWhileRevalidate());
registerRoute(/(^\/$|index.html)/, new StaleWhileRevalidate());
