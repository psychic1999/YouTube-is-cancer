// ==UserScript==
// @name        YouTube is cancer
// @namespace   youtube
// @match       *://*.youtube.com/*
// @grant       none
// @version     2.18.7
// @author      psychic1999
// @description YouTube is cancer
// @downloadURL https://raw.githubusercontent.com/psychic1999/YouTube-is-cancer/refs/heads/main/YouTube-is-cancer.user.js
// @updateURL https://raw.githubusercontent.com/psychic1999/YouTube-is-cancer/refs/heads/main/YouTube-is-cancer.user.js
// ==/UserScript==
(function() {
let css = `


/*////////////// DESKTOP //////////////*/
/*BG IMAGE*/
ytd-app,
html:has(ytm-app){
    background-image: url(https://bing.biturl.top/?resolution=UHD&format=image&index=0&mkt=en-US)!important;
    background-repeat: no-repeat!important;
    background-attachment: fixed;
    background-position: center;
    background-size:  cover!important;
}
/*TRANSPARENT*/
#chips-wrapper,
#filter-chip-bar,
.ytd-tabbed-page-header,
ytd-mini-guide-entry-renderer,
#content.ytd-engagement-panel-section-list-renderer,
#subheader.ytd-engagement-panel-title-header-renderer:not(:empty),
.ytd-donation-shelf-renderer,
ytd-video-renderer.ytd-backstage-post-renderer,
ytm-channel-list-sub-menu-renderer{
    background-color: transparent!important;
}
/*SCREEN DESKTOP*/
html[dark]{
ytd-masthead,
#background.ytd-masthead,
#contentContainer.tp-yt-app-drawer,
#guide-content.ytd-app,
ytd-mini-guide-renderer,
ytd-multi-page-menu-renderer,

ytd-search,
tp-yt-paper-dialog,
#container.ytd-searchbox,
.sbsb_a,
a.ytd-search-refinement-card-renderer,

ytd-browse,
tp-yt-app-toolbar.ytd-tabbed-page-header,
.yt-contextual-sheet-layout-wiz,
ytd-post-renderer,
tp-yt-paper-listbox.yt-dropdown-menu,

ytd-watch-flexy,
.playlist-items.ytd-playlist-panel-renderer,
ytd-menu-popup-renderer,
#header.ytd-engagement-panel-title-header-renderer,
ytd-transcript-segment-list-renderer,
ytd-transcript-search-panel-renderer,
.watch-skeleton .skeleton-bg-color,
yt-confirm-dialog-renderer{
    background-color: rgba(0, 0, 0, .4)!important;
}
}
/*SCREEN MOBILE*/
ytm-select,
.yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,

.engagement-panel-container,
.yt-spec-dialog-layout,
.dialog,

ytm-mobile-topbar-renderer,
.ytSearchboxComponentSuggestionsContainer,
ytm-watch-card-rich-header-renderer{
    background-color: rgba(0, 0, 0, .4)!important;
}
html:has(ytm-watch,ytm-settings,ytm-search,ytm-browse):not(:has(div[tab-identifier="FEwhat_to_watch"] )){
    background-color: rgba(0, 0, 0, .4)!important;
    background-blend-mode:overlay!important;
}
ytm-feed-filter-chip-bar-renderer.frosted-glass{
    backdrop-filter: none!important;
}
/*LOGO*/
/*desktop*/
path[fill="#f00"],
path[fill="#FF0033"],
/*mobile*/
[d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"]{
    fill:#1375b7!important;
}
/*////////////// LAYOUT //////////////*/
ytd-search ytd-video-renderer{
    display: inline-flex;
    width:20%!important;
    min-width:225px;
    margin-top: 8px!important;
}
ytd-search #dismissible.ytd-video-renderer{
    display: inline-grid;
    width:100%;
}
ytd-search .text-wrapper.ytd-video-renderer{
    margin-top: 8px!important;
}
ytd-video-renderer[use-search-ui] #channel-info.ytd-video-renderer {
    padding: 8px 0;
    margin-right:8px;
}
ytd-search #badges.ytd-video-renderer {
    margin-bottom: 0;
}
ytd-search ytd-video-renderer ytd-thumbnail{
    min-width: 0!important;
}
ytd-search #content.ytd-playlist-renderer,
ytd-search .yt-lockup-view-model-wiz__metadata{
    width:100%;
}
ytd-search #list.ytd-playlist-renderer,
ytd-search yt-lockup-metadata-view-model,
ytd-search .metadata-snippet-container,
ytd-search .metadata-snippet-container-one-line{
    margin-right:8px!important;
}
#expandable-metadata.ytd-video-renderer:not(:empty) {
    margin: 8px 0;
    margin-right:16px!important;
}
ytd-search .metadata-snippet-container{
    max-height: 5.4rem!important;
    -webkit-line-clamp: 3!important;
}
ytd-search .metadata-snippet-container-one-line{
    max-height: 5.4rem!important;
    -webkit-line-clamp: 3!important;
    white-space: normal!important;
}
ytd-expandable-metadata-renderer:not([is-expanded]),
#time.ytd-video-renderer{
    filter: opacity(0.8);
}
ytd-search ytd-playlist-renderer{
    display: inline-grid;
    width:40%;
    min-width:450px;
    justify-items: start;
}
ytd-search yt-lockup-view-model{
    display: inline-flex!important;
    width:40%;
    min-width:450px;
    justify-items: start;
}
ytd-search .yt-lockup-view-model-wiz{
    display: inline-grid;
}
ytd-search ytd-channel-renderer{
    display: inline-flex;
    width:40%!important;
    min-width:450px;
    flex-direction: row!important;
}
ytd-search #content-section.ytd-channel-renderer{
    flex-direction: column;
    width:100%;
}
ytd-search #info-section.ytd-channel-renderer{
    margin-right:16px;
}
ytd-browse[page-subtype="subscriptions"] #contents.ytd-rich-grid-renderer{
    padding-top: 0px;
}

yt-showing-results-for-renderer,
yt-did-you-mean-renderer,
yt-including-results-for-renderer{
    display: block;
}
ytd-search ytd-video-renderer #video-title,
ytd-browse[page-subtype="subscriptions"] #video-title{
    font-size: 1.4rem!important;
    line-height: 2rem!important;
    font-weight: 500!important;
}
ytd-search #video-title.ytd-playlist-renderer,
ytd-search .yt-lockup-metadata-view-model-wiz__title{
    font-size: 1.6rem!important;
    line-height: 2.2rem!important;
}
ytd-browse[page-subtype="subscriptions"] .ytd-video-meta-block{
    font-size: 1.2rem!important;
    line-height: 1.8rem!important;
}
/*////////////// SHORTSTAB //////////////*/
yt-tab-group-shape:has(yt-tab-shape[tab-title="Shorts"]):not(:has(yt-tab-shape:nth-of-type(1)[aria-selected="true"]),:has(yt-tab-shape:nth-of-type(2)[aria-selected="true"])) .yt-tab-group-shape-wiz__slider{
    position:relative!important;
    right:24px!important;
}
/*////////////// VIDEOS PER ROW //////////////*/
ytd-browse[page-subtype="subscriptions"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 4"] {
    --ytd-rich-grid-items-per-row: 5!important
}
ytd-browse[page-subtype="subscriptions"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 3"] {
    --ytd-rich-grid-items-per-row: 5!important
}
ytd-browse[page-subtype="subscriptions"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 2"] {
    --ytd-rich-grid-items-per-row: 4!important
}
ytd-browse[page-subtype="subscriptions"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 1"] {
    --ytd-rich-grid-items-per-row: 3!important
}
ytd-browse[page-subtype="subscriptions"] ytd-rich-item-renderer{
    margin-left: calc(var(--ytd-rich-grid-item-margin) / 2)!important;
    --ytd-rich-grid-row-margin: 16px!important;
    min-width:125px!important
}
ytd-browse[page-subtype="channels"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 4"] {
    --ytd-rich-grid-items-per-row: 5!important
}
ytd-browse[page-subtype="channels"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 3"] {
    --ytd-rich-grid-items-per-row: 4!important
}
ytd-browse[page-subtype="channels"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 2"] {
    --ytd-rich-grid-items-per-row: 3!important
}
ytd-browse[page-subtype="channels"] .ytd-two-column-browse-results-renderer[style*=" --ytd-rich-grid-items-per-row: 1"] {
    --ytd-rich-grid-items-per-row: 2!important
}
ytd-browse[page-subtype="channels"] ytd-rich-item-renderer{
    margin-left: calc(var(--ytd-rich-grid-item-margin) / 2)!important;
    --ytd-rich-grid-row-margin: 16px!important
}
/*////////////// HIDE TEXT ON PLAYER ACTION BUTTONS //////////////*/
button-view-model:has([aria-label="Share"],[aria-label="Save to playlist"],[aria-label="Report"]) .yt-spec-button-shape-next__button-text-content,
button[aria-label="Create"] .yt-spec-button-shape-next__button-text-content{
    display:none
}

button-view-model:has([aria-label="Share"],[aria-label="Save to playlist"],[aria-label="Report"]) .yt-spec-button-shape-next__icon,
button[aria-label="Create"] .yt-spec-button-shape-next__icon{
    margin-right: -9px!important;
    margin-left: -9px!important;
}
/*////////////// MOBILE //////////////*/

/*////////////// LAYOUT //////////////*/

@media(orientation: portrait){
ytm-search ytm-media-item,
div[tab-identifier="FEsubscriptions"] ytm-media-item {
    display: flex!important;
    flex-direction: row-reverse;
}
ytm-search a.media-item-thumbnail-container,
div[tab-identifier="FEsubscriptions"] a.media-item-thumbnail-container{
    width: 29%;
    display: flex;
    flex-direction: column-reverse;
}
ytm-search .details,
div[tab-identifier="FEsubscriptions"] .details {
    width: 71%;
}
.video-with-context-renderer-ghost-card
{
    display: flex!important;
    flex-direction: row-reverse;
    max-height:80px;
}
.video-with-context-renderer-ghost-card__thumbnail
{
    width:30%;
    scale:100% 25%;
    position:relative;
    bottom:65px;
}
ytm-search ytm-video-with-context-renderer,
div[tab-identifier="FEsubscriptions"] ytm-item-section-renderer,
.video-with-context-renderer-ghost-card {
   margin-right:4px;
   margin-bottom:0!important;
}
/*////////////// THUMBNAIL //////////////*/
ytm-search ytm-video-with-context-renderer .video-thumbnail-container-large,
div[tab-identifier="FEsubscriptions"] ytm-item-section-renderer .video-thumbnail-container-large,
.video-with-context-renderer-ghost-card .video-with-context-renderer-ghost-card__thumbnail {
    border-radius: 6px;
}
}

/*////////////// PIVOTBAR //////////////*/
ytm-pivot-bar-item-renderer:has(>.pivot-subs,>.w2w){
    background-color: #1375b7!important;
}
ytm-pivot-bar-item-renderer:has(>.pivot-you,>.library){
    background-color: #1375b7!important;
    filter: hue-rotate(45deg);
}
ytm-pivot-bar-item-renderer:has(>.pivot-subs[aria-selected="false"]){
    filter: brightness(0.8);
}
ytm-pivot-bar-item-renderer:has(>.pivot-you[aria-selected="false"]){
    filter: hue-rotate(45deg) brightness(0.8);
}


}

`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  const styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();

