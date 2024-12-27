(()=>{var e={};e.id=931,e.ids=[931],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},25428:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>p,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{POST:()=>c});var a=r(62129),n=r(1198),s=r(19717),i=r(35964);async function c(e){return(0,i.Yi)(e)}let l=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/revalidate/route",pathname:"/api/revalidate",filename:"route",bundlePath:"app/api/revalidate/route"},resolvedPagePath:"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\app\\api\\revalidate\\route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:d,workUnitAsyncStorage:u,serverHooks:p}=l;function g(){return(0,s.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:u})}},10538:()=>{},50290:()=>{},30110:(e,t,r)=>{"use strict";r.d(t,{AG:()=>o,eJ:()=>s,gp:()=>n,p9:()=>a,yo:()=>i});let o={title:"Relevance",slug:null,sortKey:"RELEVANCE",reverse:!1},a=[o,{title:"Trending",slug:"trending-desc",sortKey:"BEST_SELLING",reverse:!1},{title:"Latest arrivals",slug:"latest-desc",sortKey:"CREATED_AT",reverse:!0},{title:"Price: Low to high",slug:"price-asc",sortKey:"PRICE",reverse:!1},{title:"Price: High to low",slug:"price-desc",sortKey:"PRICE",reverse:!0}],n={collections:"collections",products:"products",cart:"cart"},s="nextjs-frontend-hidden",i="/api/2023-01/graphql.json"},35964:(e,t,r)=>{"use strict";r.d(t,{Xl:()=>D,X_:()=>k,ld:()=>F,qw:()=>H,yy:()=>Y,WE:()=>M,X5:()=>L,oo:()=>B,GN:()=>U,d$:()=>V,Yi:()=>X});var o=r(30110);let a=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),n=e=>!!a(e)&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let r=Object.getPrototypeOf(t);return null!==r&&e(r)}(e));var s=r(50994),i=r(88829),c=r(42365),l=r(93104);let d=`
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
`,y=`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${g}
`,h=`
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
`,m=`
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${h}
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
  ${h}
`,f=`
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
`,S=`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`,$=`
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
`,O=`
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${$}
`,w=`
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${$}
`,A=`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${p}
`,P=`
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
`,b=`
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${p}
`,E=process.env.SHOPIFY_STORE_DOMAIN?(0,s.Sj)(process.env.SHOPIFY_STORE_DOMAIN,"https://"):"",T=`${E}${o.yo}`,I=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;async function q({cache:e="force-cache",headers:t,query:r,tags:o,variables:a}){try{let n=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":I,...t},body:JSON.stringify({...r&&{query:r},...a&&{variables:a}}),cache:e,...o&&{next:{tags:o}}}),s=await n.json();if(s.errors)throw s.errors[0];return{status:n.status,body:s}}catch(e){if(n(e))throw{cause:e.cause?.toString()||"unknown",status:e.status||500,message:e.message,query:r};throw{error:e,query:r}}}let C=e=>e.edges.map(e=>e?.node),R=e=>(e.cost?.totalTaxAmount||(e.cost.totalTaxAmount={amount:"0.0",currencyCode:e.cost.totalAmount.currencyCode}),{...e,lines:C(e.lines)}),x=e=>{if(e)return{...e,path:`/search/${e.handle}`}},_=e=>{let t=[];for(let r of e)if(r){let e=x(r);e&&t.push(e)}return t},j=(e,t)=>C(e).map(e=>{let r=e.url.match(/.*\/(.*)\..*/)?.[1];return{...e,altText:e.altText||`${t} - ${r}`}}),N=(e,t=!0)=>{if(!e||t&&e.tags.includes(o.eJ))return;let{images:r,variants:a,...n}=e;return{...n,images:j(r,e.title),variants:C(a)}},K=e=>{let t=[];for(let r of e)if(r){let e=N(r);e&&t.push(e)}return t};async function D(e){if(!e)return;let t=await q({query:y,variables:{cartId:e},tags:[o.gp.cart]});if(t.body.data.cart)return R(t.body.data.cart)}async function k(e){return x((await q({query:m,tags:[o.gp.collections],variables:{handle:e}})).body.data.collection)}async function F({collection:e,reverse:t,sortKey:r}){let a=await q({query:f,tags:[o.gp.collections,o.gp.products],variables:{handle:e,reverse:t,sortKey:"CREATED_AT"===r?"CREATED":r}});return a.body.data.collection?K(C(a.body.data.collection.products)):(console.log(`No collection found for \`${e}\``),[])}async function H(){let e=await q({query:v,tags:[o.gp.collections]}),t=C(e.body?.data?.collections);return[{handle:"",title:"All",description:"All products",seo:{title:"All",description:"All products"},path:"/search",updatedAt:new Date().toISOString()},..._(t).filter(e=>!e.handle.startsWith("hidden"))]}async function Y(e){let t=await q({query:S,tags:[o.gp.collections],variables:{handle:e}});return t.body?.data?.menu?.items.map(e=>({title:e.title,path:e.url.replace(E,"").replace("/collections","/search").replace("/pages","")}))||[]}async function M(e){return(await q({query:O,cache:"no-store",variables:{handle:e}})).body.data.pageByHandle}async function L(){return C((await q({query:w,cache:"no-store"})).body.data.pages)}async function B(e){return N((await q({query:A,tags:[o.gp.products],variables:{handle:e}})).body.data.product,!1)}async function U(e){return K((await q({query:b,tags:[o.gp.products],variables:{productId:e}})).body.data.productRecommendations)}async function V({query:e,reverse:t,sortKey:r}){return K(C((await q({query:P,tags:[o.gp.products],variables:{query:e,reverse:t,sortKey:r}})).body.data.products))}async function X(e){let t=(await (0,c.b3)()).get("x-shopify-topic")||"unknown",r=e.nextUrl.searchParams.get("secret"),a=["collections/create","collections/delete","collections/update"].includes(t),n=["products/create","products/delete","products/update"].includes(t);return r&&r===process.env.SHOPIFY_REVALIDATION_SECRET?a||n?(a&&(0,i.revalidateTag)(o.gp.collections),n&&(0,i.revalidateTag)(o.gp.products),l.NextResponse.json({status:200,revalidated:!0,now:Date.now()})):l.NextResponse.json({status:200}):(console.error("Invalid revalidation secret."),l.NextResponse.json({status:401}))}},50994:(e,t,r)=>{"use strict";r.d(t,{JM:()=>a,Sj:()=>o});let o=(e,t)=>e.startsWith(t)?e:`${t}${e}`,a=()=>{let e=[];if(["SHOPIFY_STORE_DOMAIN","SHOPIFY_STOREFRONT_ACCESS_TOKEN"].forEach(t=>{process.env[t]||e.push(t)}),e.length)throw Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables

${e.join("\n")}
`);if(process.env.SHOPIFY_STORE_DOMAIN?.includes("[")||process.env.SHOPIFY_STORE_DOMAIN?.includes("]"))throw Error("Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.")}},62129:(e,t,r)=>{"use strict";e.exports=r(44870)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[674,297],()=>r(25428));module.exports=o})();