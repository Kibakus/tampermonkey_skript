// ==UserScript==
// @name         Shiki Donwload Rutraker
// @version      1.0.0
// @author       Kibakus
// @match        *://shikimori.one/*
// @match        *://shikimori.org/*
// @downloadURL  https://github.com/Kibakus/tampermonkey_skript/raw/main/Shiki%20Donwload%20Rutraker.user.js
// @updateURL    https://github.com/Kibakus/tampermonkey_skript/raw/main/Shiki%20Donwload%20Rutraker.user.js
// ==/UserScript==

var func = function() {
  var n = document.querySelector("#animes_show > section > div:nth-child(1) > header > h1");
  var r = document.querySelector("div.c-poster");
  var d = document.createElement("a");
  d.className = "b-link_button dark", d.text = "Download Rutraker", d.href = "https://rutracker.org/forum/tracker.php?nm=" + n.textContent, r.appendChild(d);
};

$(document).ready(func);
$(document).on('page:load', func);
$(document).on('turbolinks:load', func);
$(document).on('postloader:success', func);
