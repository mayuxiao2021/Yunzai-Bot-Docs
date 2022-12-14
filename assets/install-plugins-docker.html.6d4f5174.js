import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.2933fcca.js";const e={},p=t(`<h2 id="\u5355-js-\u6587\u4EF6\u63D2\u4EF6\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5355-js-\u6587\u4EF6\u63D2\u4EF6\u7684\u5B89\u88C5" aria-hidden="true">#</a> \u5355 js \u6587\u4EF6\u63D2\u4EF6\u7684\u5B89\u88C5</h2><ol><li><p><strong>\u6620\u5C04\u76EE\u5F55\u5E76\u521B\u5EFA\u672C\u5730\u6587\u4EF6\u5939</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u82E5\u60A8\u4F7F\u7528\u8F85\u52A9\u90E8\u7F72\u811A\u672C\u5B8C\u6210\u4E86 docker \u914D\u7F6E\uFF0C\u8BF7\u5FFD\u7565\u672C\u6761\u3002</p></div><p>\u5728 <code>docker-compose.yaml</code> \u6587\u4EF6\u4E2D\u6620\u5C04\u63D2\u4EF6\u76EE\u5F55 <code>./yunzai/lib/example:/app/Yunzai-Bot/lib/example</code>\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

    <span class="token key atrule">services</span><span class="token punctuation">:</span>
      <span class="token key atrule">yunzai-bot</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> sirly/yunzai<span class="token punctuation">-</span>bot<span class="token punctuation">:</span>latest
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> yunzai<span class="token punctuation">-</span>bot
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ./yunzai/config.js<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/config/config.js <span class="token comment"># \u914D\u7F6E\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/logs<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/logs <span class="token comment"># \u65E5\u5FD7\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/data<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/data <span class="token comment"># \u6570\u636E\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/global_img<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/resources/global_img         <span class="token comment"># \u5168\u5C40\u8868\u60C5\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/global_record<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/resources/global_record   <span class="token comment"># \u5168\u5C40\u8BED\u97F3\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/lib/example<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/lib/example                 <span class="token comment"># \u81EA\u5B9A\u4E49js\u63D2\u4EF6\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/plugins<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/plugins                         <span class="token comment"># \u63D2\u4EF6\u76EE\u5F55</span>
      <span class="token comment"># \u7701\u7565\u540E\u7EED\u914D\u7F6E...</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u672C\u5730\u6587\u4EF6\u5939 <code>./yunzai/lib/example</code>\u3002</p></li><li><p><strong>\u5B89\u88C5\u63D2\u4EF6</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5EFA\u8BAE\u60A8\u5728\u8BE5\u8FC7\u7A0B\u4E2D\u7528\u53E6\u4E00\u4E2A\u547D\u4EE4\u884C\u7A97\u53E3\uFF0C\u8FD0\u884C <code>docker-compose logs -f --tail=50</code> \u6253\u5F00\u65E5\u5FD7\u6EDA\u52A8\uFF0C\u901A\u8FC7\u65E5\u5FD7\u89C2\u5BDF\u63D2\u4EF6\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF0C\u5E76\u6D4B\u8BD5\u662F\u5426\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\u3002</p></div><p>\u5C06 js \u63D2\u4EF6\u7F6E\u4E8E\u672C\u5730\u76EE\u5F55 <code>./yunzai/lib/example</code> \u4E2D\uFF0C\u5373\u53EF\u5B8C\u6210\u5B89\u88C5\uFF0C\u65E0\u9700\u91CD\u542F\u5BB9\u5668\uFF0C\u6B64\u65F6\u5BB9\u5668\u65E5\u5FD7\u80FD\u591F\u770B\u5230\u63D0\u793A <code>\u63D2\u4EF6 XXX \u66F4\u65B0\u6210\u529F</code>\u3002</p></li></ol><h2 id="\u5927\u578B\u6269\u5C55\u63D2\u4EF6\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5927\u578B\u6269\u5C55\u63D2\u4EF6\u7684\u5B89\u88C5" aria-hidden="true">#</a> \u5927\u578B\u6269\u5C55\u63D2\u4EF6\u7684\u5B89\u88C5</h2><ol><li><p><strong>\u6620\u5C04\u76EE\u5F55\u5E76\u521B\u5EFA\u672C\u5730\u6587\u4EF6\u5939</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u82E5\u60A8\u4F7F\u7528\u8F85\u52A9\u90E8\u7F72\u811A\u672C\u5B8C\u6210\u4E86 docker \u914D\u7F6E\uFF0C\u8BF7\u5FFD\u7565\u672C\u6761\u3002</p></div><p>\u5728 <code>docker-compose.yaml</code> \u6587\u4EF6\u4E2D\u6620\u5C04\u63D2\u4EF6\u76EE\u5F55 <code>./yunzai/plugins:/app/Yunzai-Bot/plugins</code>\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

    <span class="token key atrule">services</span><span class="token punctuation">:</span>
      <span class="token key atrule">yunzai-bot</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> sirly/yunzai<span class="token punctuation">-</span>bot<span class="token punctuation">:</span>latest
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> yunzai<span class="token punctuation">-</span>bot
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ./yunzai/config.js<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/config/config.js <span class="token comment"># \u914D\u7F6E\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/logs<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/logs <span class="token comment"># \u65E5\u5FD7\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/data<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/data <span class="token comment"># \u6570\u636E\u6587\u4EF6</span>
          <span class="token punctuation">-</span> ./yunzai/global_img<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/resources/global_img         <span class="token comment"># \u5168\u5C40\u8868\u60C5\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/global_record<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/resources/global_record   <span class="token comment"># \u5168\u5C40\u8BED\u97F3\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/lib/example<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/lib/example                 <span class="token comment"># \u81EA\u5B9A\u4E49js\u63D2\u4EF6\u76EE\u5F55</span>
          <span class="token punctuation">-</span> ./yunzai/plugins<span class="token punctuation">:</span>/app/Yunzai<span class="token punctuation">-</span>Bot/plugins                         <span class="token comment"># \u63D2\u4EF6\u76EE\u5F55</span>
      <span class="token comment"># \u7701\u7565\u540E\u7EED\u914D\u7F6E...</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u672C\u5730\u6587\u4EF6\u5939 <code>./yunzai/plugins</code>\u3002</p></li><li><p><strong>\u5B89\u88C5\u63D2\u4EF6</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F7F\u7528\u8F85\u52A9\u90E8\u7F72\u811A\u672C\uFF0C\u53EF\u9009\u62E9\u81EA\u52A8\u5B89\u88C5 Miao-Plugin \u548C python-plugin\uFF0C\u82E5\u5B89\u88C5\u4E86 python-plugin \u4F1A\u81EA\u52A8\u52A0\u8F7D xiaoyao-cvs-plugin\u3002</p></div><p>\u8FDB\u5165\u672C\u5730\u63D2\u4EF6\u76EE\u5F55 <code>./yunzai/plugins</code>\uFF0C\u4F7F\u7528 <code>git clone \u63D2\u4EF6\u4ED3\u5E93\u5730\u5740</code> \u4E0B\u8F7D\u63D2\u4EF6\uFF0C\u5E76<strong>\u91CD\u542F\u5BB9\u5668</strong>\u5B8C\u6210\u5B89\u88C5\u3002</p><p>\u8BE6\u7EC6\u5B89\u88C5\u65B9\u6CD5\u548C\u6CE8\u610F\u4E8B\u9879\u8BF7\u53C2\u9605\u5BF9\u5E94\u63D2\u4EF6\u7684\u8BF4\u660E\u6587\u6863\uFF0C\u53EA\u9700\u5C06\u8BF4\u660E\u6587\u6863\u4E2D\u63D0\u5230\u7684 <code>plugins</code> \u76EE\u5F55\u6362\u6210\u4E3B\u673A\u7684 <code>plugins</code> \u76EE\u5F55\u5BF9\u5E94\u8DEF\u5F84\u5373\u53EF\u3002</p></li></ol>`,4),i=[p];function o(c,l){return s(),a("div",null,i)}var d=n(e,[["render",o],["__file","install-plugins-docker.html.vue"]]);export{d as default};