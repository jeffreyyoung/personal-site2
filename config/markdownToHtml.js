const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');
const _ = require('lodash');
const md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});


function markdownToHtml(markdown, {images}) {
  
  md.renderer.rules.image = function (tokens) {
      const token = tokens[0];
      const [,src] = _.find(token.attrs, (attr) => attr[0] === 'src');
      const alt = token.content;
      const lqip = images[src];
      return `<figure class="ma0">` +
          `<noscript>` +
            `<img src="${src}" />` +
          `</noscript>` +
          `<img class="lazyload" data-src="${src}" src="${lqip}" alt="${alt}"/>` +
        `</figure>`;
  };
  
  const meta = fm(markdown.trim());
  //const html = console.log(md.render(meta.body.trim()))
  console.log(meta);
  if (meta.attributes.image && images[meta.attributes.image]) {
    meta.attributes.imagePlaceholder = images[meta.attributes.image];
  }
  return {
    meta: meta.attributes,
    html: md.render(meta.body.trim())
  }
}








var markdown = `
---
title: yeeehaw!!! asdf
---

\`\`\`javascript
function poop(meow) {
  console.log(meow)
}
\`\`\`
Last December Adobe had a week long hackathon where any engineer could build anything they wanted as long as whatever they built related to Adobe in some way.

![Demoing the Project to the CEO](/images/instagram.jpg)
`
//markdownToHtml(markdown) 

module.exports = markdownToHtml;
