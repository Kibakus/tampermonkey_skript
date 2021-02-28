// ==UserScript==
// @name         Shiki Donwload Rutraker
// @namespace    http://shikimori.org/
// @version      1.0.0
// @author       Kibakus
// @match        *://shikimori.one/*
// @match        *://shikimori.org/*
// @grant        none
// ==/UserScript==

var n = document.querySelector("#animes_show > section > div:nth-child(1) > header > h1");
var r = document.querySelector("div.c-poster");
var d = document.createElement("a");
d.className = "b-link_button dark", d.text = "Download Rutraker", d.href = "https://rutracker.org/forum/tracker.php?nm=" + n.textContent, r.appendChild(d);