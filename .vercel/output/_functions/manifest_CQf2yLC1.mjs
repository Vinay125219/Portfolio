import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_BTqCRrde.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BRm4iTya.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/vinay/Documents/Portfolio/","cacheDir":"file:///home/vinay/Documents/Portfolio/node_modules/.astro/","outDir":"file:///home/vinay/Documents/Portfolio/dist/","srcDir":"file:///home/vinay/Documents/Portfolio/src/","publicDir":"file:///home/vinay/Documents/Portfolio/public/","buildClientDir":"file:///home/vinay/Documents/Portfolio/dist/client/","buildServerDir":"file:///home/vinay/Documents/Portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BhkwYPm9.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BhkwYPm9.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BhkwYPm9.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"skills/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BhkwYPm9.css"}],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BhkwYPm9.css"},{"type":"external","src":"/_astro/index.9E1VOBQz.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://vinaysagar.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/vinay/Documents/Portfolio/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/vinay/Documents/Portfolio/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/vinay/Documents/Portfolio/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/vinay/Documents/Portfolio/src/pages/skills.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/skills@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/vinay/Documents/Portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/vinay/Documents/Portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/skills@_@astro":"pages/skills.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CQf2yLC1.mjs","/home/vinay/Documents/Portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BQabzLGr.mjs","/home/vinay/Documents/Portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/vinay/Documents/Portfolio/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_eZpRNuKH.mjs","/home/vinay/Documents/Portfolio/src/islands/ContactForm":"_astro/ContactForm.DXre1WTx.js","/home/vinay/Documents/Portfolio/src/islands/ProjectFilters":"_astro/ProjectFilters.DN0hy8F0.js","/home/vinay/Documents/Portfolio/src/islands/ProjectSortModes":"_astro/ProjectSortModes.D752Sq3U.js","/home/vinay/Documents/Portfolio/src/islands/SkillsExplorer":"_astro/SkillsExplorer.DURVkKQN.js","@astrojs/react/client.js":"_astro/client.C5RI7xnT.js","/home/vinay/Documents/Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/home/vinay/Documents/Portfolio/src/components/HeroCards.astro?astro&type=script&index=0&lang.ts":"_astro/HeroCards.astro_astro_type_script_index_0_lang.YVrciMnN.js","/home/vinay/Documents/Portfolio/src/components/HeroPortrait.astro?astro&type=script&index=0&lang.ts":"_astro/HeroPortrait.astro_astro_type_script_index_0_lang.CCqjcNSK.js","/home/vinay/Documents/Portfolio/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.yhgkAtDl.js","/home/vinay/Documents/Portfolio/src/components/SignalStudio.astro?astro&type=script&index=0&lang.ts":"_astro/SignalStudio.astro_astro_type_script_index_0_lang.D8aHXMna.js","/home/vinay/Documents/Portfolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.B2ghyysU.js","/home/vinay/Documents/Portfolio/src/pages/projects/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.Dw3jeb_M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/vinay/Documents/Portfolio/src/components/HeroCards.astro?astro&type=script&index=0&lang.ts","function n(){document.querySelectorAll(\"[data-feature-card]\").forEach(e=>{e.dataset.bound||(e.dataset.bound=\"true\",e.addEventListener(\"pointermove\",t=>{if(t.pointerType!==\"mouse\"||window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches)return;const o=e.getBoundingClientRect();e.style.setProperty(\"--spot-x\",`${t.clientX-o.left}px`),e.style.setProperty(\"--spot-y\",`${t.clientY-o.top}px`)}),e.addEventListener(\"pointerleave\",()=>{e.style.removeProperty(\"--spot-x\"),e.style.removeProperty(\"--spot-y\")}))})}n();document.addEventListener(\"astro:page-load\",n);"],["/home/vinay/Documents/Portfolio/src/components/HeroPortrait.astro?astro&type=script&index=0&lang.ts","let o=()=>{};function s(){o();const e=document.querySelector(\"[data-portrait]\");if(!e)return;const t=new AbortController,i=window.matchMedia(\"(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)\"),n=()=>{e.style.removeProperty(\"--portrait-x\"),e.style.removeProperty(\"--portrait-y\")};e.addEventListener(\"pointermove\",a=>{if(!i.matches)return;const r=e.getBoundingClientRect(),d=(a.clientX-r.left)/r.width-.5,l=(a.clientY-r.top)/r.height-.5;e.style.setProperty(\"--portrait-x\",`${-l*6}deg`),e.style.setProperty(\"--portrait-y\",`${d*6}deg`)},{signal:t.signal}),e.addEventListener(\"pointerleave\",n,{signal:t.signal}),i.addEventListener(\"change\",n,{signal:t.signal}),o=()=>{t.abort(),n()}}s();document.addEventListener(\"astro:page-load\",s);document.addEventListener(\"astro:before-swap\",()=>o());"],["/home/vinay/Documents/Portfolio/src/components/Nav.astro?astro&type=script&index=0&lang.ts","function n(){const e=document.querySelector(\"[data-menu-toggle]\"),t=document.querySelector(\"[data-menu]\");!e||!t||e.dataset.bound===\"1\"||(e.dataset.bound=\"1\",e.addEventListener(\"click\",()=>{const a=t.classList.toggle(\"hidden\")===!1;e.setAttribute(\"aria-expanded\",String(a))}),t.querySelectorAll(\"a\").forEach(a=>a.addEventListener(\"click\",()=>{t.classList.add(\"hidden\"),e.setAttribute(\"aria-expanded\",\"false\")})))}n();document.addEventListener(\"astro:page-load\",n);"],["/home/vinay/Documents/Portfolio/src/components/SignalStudio.astro?astro&type=script&index=0&lang.ts","function r(){const t=document.querySelector(\"[data-studio]\");if(!t||t.dataset.bound)return;t.dataset.bound=\"true\";const i={signals:\"Complex signals. Clearer insights.\",interface:\"Thoughtful tools. Smoother workflows.\",network:\"Connected systems. Shared possibilities.\"};t.querySelectorAll(\"button[data-mode]\").forEach(e=>{e.addEventListener(\"click\",()=>{const a=e.dataset.mode??\"signals\";t.dataset.mode=a,t.querySelectorAll(\"button[data-mode]\").forEach(n=>n.setAttribute(\"aria-pressed\",String(n===e)));const s=t.querySelector(\"[data-studio-caption]\");s&&(s.textContent=i[a])})});const o=t.querySelector(\"[data-pause]\");o?.addEventListener(\"click\",()=>{const e=t.toggleAttribute(\"data-paused\");o.setAttribute(\"aria-pressed\",String(e)),o.setAttribute(\"aria-label\",e?\"Play animation\":\"Pause animation\");const a=o.querySelector(\"[data-pause-label]\");a&&(a.textContent=e?\"Play\":\"Pause\")})}r();document.addEventListener(\"astro:page-load\",r);"],["/home/vinay/Documents/Portfolio/src/pages/projects/[slug].astro?astro&type=script&index=0&lang.ts","function s(){const n=Array.from(document.querySelectorAll(\"[data-toc-link]\"));if(!n.length)return;const r=n.map(t=>document.getElementById(t.dataset.tocLink??\"\")).filter(t=>!!t),a=t=>{n.forEach(e=>{const o=e.dataset.tocLink===t;e.classList.toggle(\"bg-brand-50\",o),e.classList.toggle(\"text-brand-600\",o),e.classList.toggle(\"border-brand-500\",o),e.classList.toggle(\"border-transparent\",!o),e.classList.toggle(\"text-navy-500\",!o)})},i=new IntersectionObserver(t=>{const e=t.filter(o=>o.isIntersecting).sort((o,c)=>o.boundingClientRect.top-c.boundingClientRect.top)[0];e?.target.id&&a(e.target.id)},{rootMargin:\"-20% 0px -65% 0px\",threshold:0});r.forEach(t=>i.observe(t))}s();document.addEventListener(\"astro:page-load\",s);"]],"assets":["/_astro/inter-cyrillic-ext-wght-normal.BOeWTOD4.woff2","/_astro/inter-cyrillic-wght-normal.DqGufNeO.woff2","/_astro/inter-greek-ext-wght-normal.DlzME5K_.woff2","/_astro/inter-greek-wght-normal.CkhJZR-_.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/plus-jakarta-sans-vietnamese-wght-normal.qRpaaN48.woff2","/_astro/plus-jakarta-sans-latin-ext-wght-normal.DmpS2jIq.woff2","/_astro/plus-jakarta-sans-latin-wght-normal.eXO_dkmS.woff2","/_astro/caveat-cyrillic-ext-wght-normal.DiMfzA-V.woff2","/_astro/caveat-cyrillic-wght-normal.D5lnP6kL.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/caveat-latin-ext-wght-normal.Byk3UhVp.woff2","/_astro/caveat-latin-wght-normal.C1hSzPvX.woff2","/_astro/about.BhkwYPm9.css","/_astro/index.9E1VOBQz.css","/robots.txt","/_astro/BaseLayout.astro_astro_type_script_index_0_lang.B2ghyysU.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/_astro/ContactForm.DXre1WTx.js","/_astro/Ico.D8H4gwSi.js","/_astro/ProjectFilters.DN0hy8F0.js","/_astro/ProjectSortModes.D752Sq3U.js","/_astro/SkillsExplorer.DURVkKQN.js","/_astro/client.C5RI7xnT.js","/_astro/index.DLkBFFtG.js","/images/profile.png","/images/profile.webp","/resume/M_Vinay_Sagar_Resume.pdf","/images/projects/1553b-hero.jpg","/images/projects/1553b.jpg","/images/projects/dashboard.jpg","/images/projects/postflight.jpg","/images/projects/qml.jpg","/images/projects/securelink.jpg","/about/index.html","/contact/index.html","/projects/index.html","/skills/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"NwWE09BlaAv6zSnSe/gSR02McFl3a60pjWSVaNHWuB4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
