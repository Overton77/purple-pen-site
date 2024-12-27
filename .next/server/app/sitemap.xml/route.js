"use strict";(()=>{var e={};e.id=475,e.ids=[475],e.modules={10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},47540:(e,t,r)=>{r.r(t),r.d(t,{patchFetch:()=>w,routeModule:()=>v,serverHooks:()=>_,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>$});var o={};r.r(o),r.d(o,{default:()=>g,dynamic:()=>p});var n={};r.r(n),r.d(n,{GET:()=>y,dynamic:()=>p});var a=r(62129),i=r(1198),s=r(19717),l=r(93104),c=r(35964),d=r(50994);let u=process.env.NEXT_PUBLIC_VERCEL_URL?`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`:"http://localhost:3000",p="force-dynamic";async function g(){(0,d.JM)();let e=[""].map(e=>({url:`${u}${e}`,lastModified:new Date().toISOString()})),t=(0,c.qw)().then(e=>e.map(e=>({url:`${u}${e.path}`,lastModified:e.updatedAt}))),r=(0,c.d$)({}).then(e=>e.map(e=>({url:`${u}/product/${e.handle}`,lastModified:e.updatedAt}))),o=(0,c.X5)().then(e=>e.map(e=>({url:`${u}/${e.handle}`,lastModified:e.updatedAt}))),n=[];try{n=(await Promise.all([t,r,o])).flat()}catch(e){throw JSON.stringify(e,null,2)}return[...e,...n]}var m=r(17689);let f={...o}.default;if("function"!=typeof f)throw Error('Default export is missing in "C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\app\\sitemap.ts"');async function y(e,t){let{__metadata_id__:r,...o}=await t.params||{},n=!!r&&r.endsWith(".xml");if(r&&!n)return new l.NextResponse("Not Found",{status:404});let a=r&&n?r.slice(0,-4):void 0,i=await f({id:a}),s=(0,m.resolveRouteData)(i,"sitemap");return new l.NextResponse(s,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let v=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?filePath=C%3A%5CUsers%5CPinda%5COneDrive%5CDesktop%5Cpurple-pen-site%5Ccommerce%5Capp%5Csitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"",userland:n}),{workAsyncStorage:h,workUnitAsyncStorage:$,serverHooks:_}=v;function w(){return(0,s.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:$})}},30110:(e,t,r)=>{r.d(t,{AG:()=>o,eJ:()=>i,gp:()=>a,p9:()=>n,yo:()=>s});let o={title:"Relevance",slug:null,sortKey:"RELEVANCE",reverse:!1},n=[o,{title:"Trending",slug:"trending-desc",sortKey:"BEST_SELLING",reverse:!1},{title:"Latest arrivals",slug:"latest-desc",sortKey:"CREATED_AT",reverse:!0},{title:"Price: Low to high",slug:"price-asc",sortKey:"PRICE",reverse:!1},{title:"Price: High to low",slug:"price-desc",sortKey:"PRICE",reverse:!0}],a={collections:"collections",products:"products",cart:"cart"},i="nextjs-frontend-hidden",s="/api/2023-01/graphql.json"},35964:(e,t,r)=>{r.d(t,{Xl:()=>M,X_:()=>k,ld:()=>F,qw:()=>K,yy:()=>H,WE:()=>L,X5:()=>U,oo:()=>Y,GN:()=>B,d$:()=>X,Yi:()=>J});var o=r(30110);let n=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),a=e=>!!n(e)&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let r=Object.getPrototypeOf(t);return null!==r&&e(r)}(e));var i=r(50994),s=r(88829),l=r(42365),c=r(93104);let d=`
  fragment image on Image {
    url
    altText
    width
    height
  }
`,u=`
  fragment seo on SEO {
    description
    title
  }
`,p=`
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${d}
  ${u}
`,g=`
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${p}
`,m=`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${g}
`,f=`
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${u}
`,y=`
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${f}
`,v=`
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${f}
`,h=`
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${p}
`,$=`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`,_=`
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${u}
`,w=`
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${_}
`,b=`
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${_}
`,A=`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${p}
`,S=`
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${p}
`,x=`
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${p}
`,O=process.env.SHOPIFY_STORE_DOMAIN?(0,i.Sj)(process.env.SHOPIFY_STORE_DOMAIN,"https://"):"",C=`${O}${o.yo}`,E=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;async function P({cache:e="force-cache",headers:t,query:r,tags:o,variables:n}){try{let a=await fetch(C,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":E,...t},body:JSON.stringify({...r&&{query:r},...n&&{variables:n}}),cache:e,...o&&{next:{tags:o}}}),i=await a.json();if(i.errors)throw i.errors[0];return{status:a.status,body:i}}catch(e){if(a(e))throw{cause:e.cause?.toString()||"unknown",status:e.status||500,message:e.message,query:r};throw{error:e,query:r}}}let R=e=>e.edges.map(e=>e?.node),T=e=>(e.cost?.totalTaxAmount||(e.cost.totalTaxAmount={amount:"0.0",currencyCode:e.cost.totalAmount.currencyCode}),{...e,lines:R(e.lines)}),q=e=>{if(e)return{...e,path:`/search/${e.handle}`}},I=e=>{let t=[];for(let r of e)if(r){let e=q(r);e&&t.push(e)}return t},D=(e,t)=>R(e).map(e=>{let r=e.url.match(/.*\/(.*)\..*/)?.[1];return{...e,altText:e.altText||`${t} - ${r}`}}),j=(e,t=!0)=>{if(!e||t&&e.tags.includes(o.eJ))return;let{images:r,variants:n,...a}=e;return{...a,images:D(r,e.title),variants:R(n)}},N=e=>{let t=[];for(let r of e)if(r){let e=j(r);e&&t.push(e)}return t};async function M(e){if(!e)return;let t=await P({query:m,variables:{cartId:e},tags:[o.gp.cart]});if(t.body.data.cart)return T(t.body.data.cart)}async function k(e){return q((await P({query:y,tags:[o.gp.collections],variables:{handle:e}})).body.data.collection)}async function F({collection:e,reverse:t,sortKey:r}){let n=await P({query:h,tags:[o.gp.collections,o.gp.products],variables:{handle:e,reverse:t,sortKey:"CREATED_AT"===r?"CREATED":r}});return n.body.data.collection?N(R(n.body.data.collection.products)):(console.log(`No collection found for \`${e}\``),[])}async function K(){let e=await P({query:v,tags:[o.gp.collections]}),t=R(e.body?.data?.collections);return[{handle:"",title:"All",description:"All products",seo:{title:"All",description:"All products"},path:"/search",updatedAt:new Date().toISOString()},...I(t).filter(e=>!e.handle.startsWith("hidden"))]}async function H(e){let t=await P({query:$,tags:[o.gp.collections],variables:{handle:e}});return t.body?.data?.menu?.items.map(e=>({title:e.title,path:e.url.replace(O,"").replace("/collections","/search").replace("/pages","")}))||[]}async function L(e){return(await P({query:w,cache:"no-store",variables:{handle:e}})).body.data.pageByHandle}async function U(){return R((await P({query:b,cache:"no-store"})).body.data.pages)}async function Y(e){return j((await P({query:A,tags:[o.gp.products],variables:{handle:e}})).body.data.product,!1)}async function B(e){return N((await P({query:x,tags:[o.gp.products],variables:{productId:e}})).body.data.productRecommendations)}async function X({query:e,reverse:t,sortKey:r}){return N(R((await P({query:S,tags:[o.gp.products],variables:{query:e,reverse:t,sortKey:r}})).body.data.products))}async function J(e){let t=(await (0,l.b3)()).get("x-shopify-topic")||"unknown",r=e.nextUrl.searchParams.get("secret"),n=["collections/create","collections/delete","collections/update"].includes(t),a=["products/create","products/delete","products/update"].includes(t);return r&&r===process.env.SHOPIFY_REVALIDATION_SECRET?n||a?(n&&(0,s.revalidateTag)(o.gp.collections),a&&(0,s.revalidateTag)(o.gp.products),c.NextResponse.json({status:200,revalidated:!0,now:Date.now()})):c.NextResponse.json({status:200}):(console.error("Invalid revalidation secret."),c.NextResponse.json({status:401}))}},50994:(e,t,r)=>{r.d(t,{JM:()=>n,Sj:()=>o});let o=(e,t)=>e.startsWith(t)?e:`${t}${e}`,n=()=>{let e=[];if(["SHOPIFY_STORE_DOMAIN","SHOPIFY_STOREFRONT_ACCESS_TOKEN"].forEach(t=>{process.env[t]||e.push(t)}),e.length)throw Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables

${e.join("\n")}
`);if(process.env.SHOPIFY_STORE_DOMAIN?.includes("[")||process.env.SHOPIFY_STORE_DOMAIN?.includes("]"))throw Error("Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.")}},17689:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveManifest:function(){return i},resolveRobots:function(){return n},resolveRouteData:function(){return s},resolveSitemap:function(){return a}});let o=r(41191);function n(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,o.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,o.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,o.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,o.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function a(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),r=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),o=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),n="";for(let l of(n+='<?xml version="1.0" encoding="UTF-8"?>\n',n+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',r&&(n+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),o&&(n+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?n+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':n+=">\n",e)){var a,i,s;n+="<url>\n",n+=`<loc>${l.url}</loc>
`;let e=null==(a=l.alternates)?void 0:a.languages;if(e&&Object.keys(e).length)for(let t in e)n+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(i=l.images)?void 0:i.length)for(let e of l.images)n+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)n+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;n+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(n+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(n+=`<priority>${l.priority}</priority>
`),n+="</url>\n"}return n+"</urlset>\n"}function i(e){return JSON.stringify(e)}function s(e,t){return"robots"===t?n(e):"sitemap"===t?a(e):"manifest"===t?i(e):""}},41191:(e,t)=>{function r(e){return Array.isArray(e)?e:[e]}function o(e){if(null!=e)return r(e)}function n(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getOrigin:function(){return n},resolveArray:function(){return r},resolveAsArrayOrUndefined:function(){return o}})},62129:(e,t,r)=>{e.exports=r(44870)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[674,297],()=>r(47540));module.exports=o})();