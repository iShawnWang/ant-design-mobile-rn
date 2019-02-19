webpackJsonp([24],{1185:function(n,a,s){n.exports={basic:s(1288)}},1288:function(n,a){n.exports={content:[["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/list/demo/basic.tsx"},"Demo Source Code"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/list/demo/basic.md",id:"components-list-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// tslint:disable:no-empty</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Image<span class="token punctuation">,</span> ScrollView<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Item <span class="token operator">=</span> List<span class="token punctuation">.</span>Item<span class="token punctuation">;</span>\n<span class="token keyword">const</span> Brief <span class="token operator">=</span> Item<span class="token punctuation">.</span>Brief<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicListExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f5f5f9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">automaticallyAdjustContentInsets</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsHorizontalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsVerticalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'basic\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            \u6807\u9898\u6587\u5b57\u70b9\u51fb\u65e0\u53cd\u9988\uff0c\u6587\u5b57\u8d85\u957f\u5219\u9690\u85cf\uff0c\u6587\u5b57\u8d85\u957f\u5219\u9690\u85cf\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>\n            \u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">disabled</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7bad\u5934\u5411\u53f3<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            \u6807\u9898\u6587\u5b57\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7bad\u5934\u5411\u4e0b<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            \u6807\u9898\u6587\u5b57\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7bad\u5934\u5411\u4e0a<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            \u6807\u9898\u6587\u5b57\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6ca1\u6709\u7bad\u5934<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>empty<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            \u6807\u9898\u6587\u5b57\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n                \u5185\u5bb9\u5185\u5bb9\n                <span class="token operator">&lt;</span>Brief style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'right\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">}</span>\n            multipleLine\n          <span class="token operator">></span>\n            \u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n            \u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">wrap</span>\n            <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c\u6587\u5b57\u8d85\u957f\u6298\u884c<span class="token punctuation">"</span></span>\n            <span class="token attr-name">multipleLine</span>\n            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            \u9876\u90e8\u5bf9\u9f50\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9\u8f85\u52a9\u6587\u5b57\u5185\u5bb9\u8f85\u52a9\u6587\u5b57\u5185\u5bb9\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n                \u5185\u5bb9\u5185\u5bb9\n                <span class="token operator">&lt;</span>Brief style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'right\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">}</span>\n            multipleLine\n            align<span class="token operator">=</span><span class="token string">"bottom"</span>\n          <span class="token operator">></span>\n            \u5e95\u90e8\u5bf9\u9f50\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u5e26\u7f29\u7565\u56fe\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            thumb\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            thumb\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token operator">&lt;</span>Image\n                source<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                  uri<span class="token punctuation">:</span>\n                    <span class="token string">\'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">29</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">29</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token punctuation">}</span>\n            arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n          <span class="token operator">></span>\n            extra\u4e3aImage\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'}]}}});