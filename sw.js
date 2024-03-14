/*
 * @Author: Blake blakeshi@vland.cc
 * @Date: 2024-03-14
 * @LastEditors: Blake blakeshi@vland.cc
 * @LastEditTime: 2024-03-14
 * @FilePath: \hexo_blog\themes\hollow\source\sw.js
 * @Description: 
 */
"use strict";
(function() {
  var cacheVersion = "-180503";
  var staticCacheName = "asset" + cacheVersion;
  var maxEntries = 100;
  self.importScripts("https://cdn.bytedance.com/npm/sw-toolbox@3.6.0/sw-toolbox.js");

  self.toolbox.options.debug = false;
  self.toolbox.options.networkTimeoutSeconds = 1;

  /* staticImageCache */
  self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    cache: {
      name: staticCacheName,
      maxEntries: maxEntries
    }
  });
})();
