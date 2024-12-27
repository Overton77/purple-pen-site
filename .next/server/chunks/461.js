exports.id=461,exports.ids=[461],exports.modules={81782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"007876e6689ec9b977eb77db47b5bd1d55eaebc642":()=>R,"008e224785ccd9d710909dbf555e1fbf0ff24512c4":()=>D,"602f60eebfc34932736aab3e7dcee913e50ffbc94a":()=>$,"60cbc6939baa5befe35ca03b2d3915cba385814bb4":()=>O,"60effb755e91bde0ef21d447a931a04dcee8ab696a":()=>E});var a=r(80317);r(89929);let n={cart:"cart"},o=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),s=e=>!!o(e)&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let r=Object.getPrototypeOf(t);return null!==r&&e(r)}(e));var l=r(63522),i=r(96514);r(86305);let c=`
  fragment image on Image {
    url
    altText
    width
    height
  }
`,d=`
  fragment seo on SEO {
    description
    title
  }
`,u=`
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
  ${c}
  ${d}
`,m=`
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
  ${u}
`,p=`
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${m}
`,h=`
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${m}
`,f=`
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${m}
`,x=`
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${m}
`,b=`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${m}
`,v=process.env.SHOPIFY_STORE_DOMAIN?((e,t)=>e.startsWith(t)?e:`${t}${e}`)(process.env.SHOPIFY_STORE_DOMAIN,"https://"):"",y=`${v}/api/2023-01/graphql.json`,g=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;async function w({cache:e="force-cache",headers:t,query:r,tags:a,variables:n}){try{let o=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":g,...t},body:JSON.stringify({...r&&{query:r},...n&&{variables:n}}),cache:e,...a&&{next:{tags:a}}}),s=await o.json();if(s.errors)throw s.errors[0];return{status:o.status,body:s}}catch(e){if(s(e))throw{cause:e.cause?.toString()||"unknown",status:e.status||500,message:e.message,query:r};throw{error:e,query:r}}}let j=e=>e.edges.map(e=>e?.node),C=e=>(e.cost?.totalTaxAmount||(e.cost.totalTaxAmount={amount:"0.0",currencyCode:e.cost.totalAmount.currencyCode}),{...e,lines:j(e.lines)}),k=(e,t)=>j(e).map(e=>{let r=e.url.match(/.*\/(.*)\..*/)?.[1];return{...e,altText:e.altText||`${t} - ${r}`}});async function N(){return C((await w({query:h,cache:"no-store"})).body.data.cartCreate.cart)}async function A(e,t){return C((await w({query:p,variables:{cartId:e,lines:t},cache:"no-store"})).body.data.cartLinesAdd.cart)}async function S(e,t){return C((await w({query:x,variables:{cartId:e,lineIds:t},cache:"no-store"})).body.data.cartLinesRemove.cart)}async function P(e,t){return C((await w({query:f,variables:{cartId:e,lines:t},cache:"no-store"})).body.data.cartLinesUpdate.cart)}async function I(e){if(!e)return;let t=await w({query:b,variables:{cartId:e},tags:[n.cart]});if(t.body.data.cart)return C(t.body.data.cart)}var T=r(29319);async function $(e,t){let r=(await i.UL()).get("cartId")?.value;if(!r||!t)return"Error adding item to cart";try{await A(r,[{merchandiseId:t,quantity:1}]),(0,l.revalidateTag)(n.cart)}catch(e){return"Error adding item to cart"}}async function E(e,t){let r=(await i.UL()).get("cartId")?.value;if(!r)return"Missing cart ID";try{let e=await I(r);if(!e)return"Error fetching cart";let a=e.lines.find(e=>e.merchandise.id===t);if(!a||!a.id)return"Item not found in cart";await S(r,[a.id]),(0,l.revalidateTag)(n.cart)}catch(e){return"Error removing item from cart"}}async function O(e,t){let r=(await i.UL()).get("cartId")?.value;if(!r)return"Missing cart ID";let{merchandiseId:a,quantity:o}=t;try{let e=await I(r);if(!e)return"Error fetching cart";let t=e.lines.find(e=>e.merchandise.id===a);t&&t.id?0===o?await S(r,[t.id]):await P(r,[{id:t.id,merchandiseId:a,quantity:o}]):o>0&&await A(r,[{merchandiseId:a,quantity:o}]),(0,l.revalidateTag)(n.cart)}catch(e){return console.error(e),"Error updating item quantity"}}async function D(){let e=(await i.UL()).get("cartId")?.value,t=await I(e);(0,T.redirect)(t.checkoutUrl)}async function R(){let e=await N();(await (0,i.UL)()).set("cartId",e.id)}(0,r(49649).D)([$,E,O,D,R]),(0,a.A)($,"602f60eebfc34932736aab3e7dcee913e50ffbc94a",null),(0,a.A)(E,"60effb755e91bde0ef21d447a931a04dcee8ab696a",null),(0,a.A)(O,"60cbc6939baa5befe35ca03b2d3915cba385814bb4",null),(0,a.A)(D,"008e224785ccd9d710909dbf555e1fbf0ff24512c4",null),(0,a.A)(R,"007876e6689ec9b977eb77db47b5bd1d55eaebc642",null)},80488:(e,t,r)=>{Promise.resolve().then(r.bind(r,6955))},67336:(e,t,r)=>{Promise.resolve().then(r.bind(r,61307))},23780:(e,t,r)=>{Promise.resolve().then(r.bind(r,89849)),Promise.resolve().then(r.bind(r,8510)),Promise.resolve().then(r.bind(r,74508)),Promise.resolve().then(r.bind(r,19596)),Promise.resolve().then(r.bind(r,48914)),Promise.resolve().then(r.bind(r,16751)),Promise.resolve().then(r.t.bind(r,39220,23)),Promise.resolve().then(r.bind(r,42513))},5220:(e,t,r)=>{Promise.resolve().then(r.bind(r,28241)),Promise.resolve().then(r.bind(r,60260)),Promise.resolve().then(r.bind(r,89892)),Promise.resolve().then(r.bind(r,2548)),Promise.resolve().then(r.bind(r,22258)),Promise.resolve().then(r.bind(r,97275)),Promise.resolve().then(r.t.bind(r,78588,23)),Promise.resolve().then(r.bind(r,21805))},2636:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,28962,23)),Promise.resolve().then(r.t.bind(r,16532,23)),Promise.resolve().then(r.t.bind(r,52680,23)),Promise.resolve().then(r.t.bind(r,32139,23)),Promise.resolve().then(r.t.bind(r,85862,23)),Promise.resolve().then(r.t.bind(r,69173,23)),Promise.resolve().then(r.t.bind(r,46730,23))},8716:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,83602,23)),Promise.resolve().then(r.t.bind(r,96716,23)),Promise.resolve().then(r.t.bind(r,45168,23)),Promise.resolve().then(r.t.bind(r,51035,23)),Promise.resolve().then(r.t.bind(r,56278,23)),Promise.resolve().then(r.t.bind(r,73341,23)),Promise.resolve().then(r.t.bind(r,57290,23))},61307:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(71879);function n({reset:e}){return(0,a.jsxs)("div",{className:"mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Oh no!"}),(0,a.jsx)("p",{className:"my-2",children:"There was an issue with our storefront. This could be a temporary issue, please try your action again."}),(0,a.jsx)("button",{className:"mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90",onClick:()=>e(),children:"Try Again"})]})}},28241:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>c,_:()=>d});var a=r(71879),n=r(23794);let o=(0,n.createContext)(void 0);function s(e,t){return(Number(t)*e).toString()}function l(e){let t=e.reduce((e,t)=>e+t.quantity,0),r=e.reduce((e,t)=>e+Number(t.cost.totalAmount.amount),0),a=e[0]?.cost.totalAmount.currencyCode??"USD";return{totalQuantity:t,cost:{subtotalAmount:{amount:r.toString(),currencyCode:a},totalAmount:{amount:r.toString(),currencyCode:a},totalTaxAmount:{amount:"0",currencyCode:a}}}}function i(e,t){let r=e||{id:void 0,checkoutUrl:"",totalQuantity:0,lines:[],cost:{subtotalAmount:{amount:"0",currencyCode:"USD"},totalAmount:{amount:"0",currencyCode:"USD"},totalTaxAmount:{amount:"0",currencyCode:"USD"}}};switch(t.type){case"UPDATE_ITEM":{let{merchandiseId:e,updateType:a}=t.payload,n=r.lines.map(t=>t.merchandise.id===e?function(e,t){if("delete"===t)return null;let r="plus"===t?e.quantity+1:e.quantity-1;if(0===r)return null;let a=s(r,(Number(e.cost.totalAmount.amount)/e.quantity).toString());return{...e,quantity:r,cost:{...e.cost,totalAmount:{...e.cost.totalAmount,amount:a}}}}(t,a):t).filter(Boolean);if(0===n.length)return{...r,lines:[],totalQuantity:0,cost:{...r.cost,totalAmount:{...r.cost.totalAmount,amount:"0"}}};return{...r,...l(n),lines:n}}case"ADD_ITEM":{let{variant:e,product:a}=t.payload,n=r.lines.find(t=>t.merchandise.id===e.id),o=function(e,t,r){let a=e?e.quantity+1:1,n=s(a,t.price.amount);return{id:e?.id,quantity:a,cost:{totalAmount:{amount:n,currencyCode:t.price.currencyCode}},merchandise:{id:t.id,title:t.title,selectedOptions:t.selectedOptions,product:{id:r.id,handle:r.handle,title:r.title,featuredImage:r.featuredImage}}}}(n,e,a),i=n?r.lines.map(t=>t.merchandise.id===e.id?o:t):[...r.lines,o];return{...r,...l(i),lines:i}}default:return r}}function c({children:e,cartPromise:t}){let r=(0,n.use)(t),[s,l]=(0,n.useOptimistic)(r,i),c=(e,t)=>{l({type:"UPDATE_ITEM",payload:{merchandiseId:e,updateType:t}})},d=(e,t)=>{l({type:"ADD_ITEM",payload:{variant:e,product:t}})},u=(0,n.useMemo)(()=>({cart:s,updateCartItem:c,addCartItem:d}),[s]);return(0,a.jsx)(o.Provider,{value:u,children:e})}function d(){let e=(0,n.useContext)(o);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},60260:(e,t,r)=>{"use strict";r.d(t,{default:()=>T});var a=r(71879),n=r(38341),o=r(52846),s=r(53440),l=r(42095);let i="mx-[1px] inline-block h-1 w-1 animate-blink rounded-md",c=({className:e})=>(0,a.jsxs)("span",{className:"mx-2 inline-flex items-center",children:[(0,a.jsx)("span",{className:(0,l.A)(i,e)}),(0,a.jsx)("span",{className:(0,l.A)(i,"animation-delay-[200ms]",e)}),(0,a.jsx)("span",{className:(0,l.A)(i,"animation-delay-[400ms]",e)})]});var d=r(73363);let u="Default Title";var m=r(4002),p=r(27410),h=r(71707),f=r(23794),x=r(80071),b=r(80675);b.callServer,b.findSourceMapURL;let v=(0,b.createServerReference)("008e224785ccd9d710909dbf555e1fbf0ff24512c4",b.callServer,void 0,b.findSourceMapURL,"redirectToCheckout");var y=r(28241),g=r(44515);function w({className:e}){return(0,a.jsx)("div",{className:"relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",children:(0,a.jsx)(g.A,{className:(0,l.A)("h-6 transition-all ease-in-out hover:scale-110",e)})})}let j=(0,b.createServerReference)("60effb755e91bde0ef21d447a931a04dcee8ab696a",b.callServer,void 0,b.findSourceMapURL,"removeItem");function C({item:e,optimisticUpdate:t}){let[r,n]=(0,f.useActionState)(j,null),o=e.merchandise.id,s=n.bind(null,o);return(0,a.jsxs)("form",{action:async()=>{t(o,"delete"),await s()},children:[(0,a.jsx)("button",{type:"submit","aria-label":"Remove cart item",className:"flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500",children:(0,a.jsx)(g.A,{className:"mx-[1px] h-4 w-4 text-white dark:text-black"})}),(0,a.jsx)("p",{"aria-live":"polite",className:"sr-only",role:"status",children:r})]})}var k=r(99274),N=r(78770);let A=(0,b.createServerReference)("60cbc6939baa5befe35ca03b2d3915cba385814bb4",b.callServer,void 0,b.findSourceMapURL,"updateItemQuantity");function S({type:e}){return(0,a.jsx)("button",{type:"submit","aria-label":"plus"===e?"Increase item quantity":"Reduce item quantity",className:(0,l.A)("ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",{"ml-auto":"minus"===e}),children:"plus"===e?(0,a.jsx)(k.A,{className:"h-4 w-4 dark:text-neutral-500"}):(0,a.jsx)(N.A,{className:"h-4 w-4 dark:text-neutral-500"})})}function P({item:e,type:t,optimisticUpdate:r}){let[n,o]=(0,f.useActionState)(A,null),s={merchandiseId:e.merchandise.id,quantity:"plus"===t?e.quantity+1:e.quantity-1},l=o.bind(null,s);return(0,a.jsxs)("form",{action:async()=>{r(s.merchandiseId,t),await l()},children:[(0,a.jsx)(S,{type:t}),(0,a.jsx)("p",{"aria-live":"polite",className:"sr-only",role:"status",children:n})]})}function I({className:e,quantity:t}){return(0,a.jsxs)("div",{className:"relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",children:[(0,a.jsx)(s.A,{className:(0,l.A)("h-4 transition-all ease-in-out hover:scale-110",e)}),t?(0,a.jsx)("div",{className:"absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white",children:t}):null]})}function T(){let{cart:e,updateCartItem:t}=(0,y._)(),[r,l]=(0,f.useState)(!1);(0,f.useRef)(e?.totalQuantity);let i=()=>l(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{"aria-label":"Open cart",onClick:()=>l(!0),children:(0,a.jsx)(I,{quantity:e?.totalQuantity})}),(0,a.jsx)(n.e,{show:r,children:(0,a.jsxs)(o.lG,{onClose:i,className:"relative z-50",children:[(0,a.jsx)(n.e.Child,{as:f.Fragment,enter:"transition-all ease-in-out duration-300",enterFrom:"opacity-0 backdrop-blur-none",enterTo:"opacity-100 backdrop-blur-[.5px]",leave:"transition-all ease-in-out duration-200",leaveFrom:"opacity-100 backdrop-blur-[.5px]",leaveTo:"opacity-0 backdrop-blur-none",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"})}),(0,a.jsx)(n.e.Child,{as:f.Fragment,enter:"transition-all ease-in-out duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out duration-200",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,a.jsxs)(o.lG.Panel,{className:"fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-lg font-semibold",children:"My Cart"}),(0,a.jsx)("button",{"aria-label":"Close cart",onClick:i,children:(0,a.jsx)(w,{})})]}),e&&0!==e.lines.length?(0,a.jsxs)("div",{className:"flex h-full flex-col justify-between overflow-hidden p-1",children:[(0,a.jsx)("ul",{className:"flex-grow overflow-auto py-4",children:e.lines.sort((e,t)=>e.merchandise.product.title.localeCompare(t.merchandise.product.title)).map((e,r)=>{let n={};e.merchandise.selectedOptions.forEach(({name:e,value:t})=>{t!==u&&(n[e.toLowerCase()]=t)});let o=(0,m.cO)(`/product/${e.merchandise.product.handle}`,new URLSearchParams(n));return(0,a.jsx)("li",{className:"flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700",children:(0,a.jsxs)("div",{className:"relative flex w-full flex-row justify-between px-1 py-4",children:[(0,a.jsx)("div",{className:"absolute z-40 -ml-1 -mt-2",children:(0,a.jsx)(C,{item:e,optimisticUpdate:t})}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("div",{className:"relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800",children:(0,a.jsx)(p.default,{className:"h-full w-full object-cover",width:64,height:64,alt:e.merchandise.product.featuredImage.altText||e.merchandise.product.title,src:e.merchandise.product.featuredImage.url})}),(0,a.jsx)(h.default,{href:o,onClick:i,className:"z-30 ml-2 flex flex-row space-x-4",children:(0,a.jsxs)("div",{className:"flex flex-1 flex-col text-base",children:[(0,a.jsx)("span",{className:"leading-tight",children:e.merchandise.product.title}),e.merchandise.title!==u?(0,a.jsx)("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:e.merchandise.title}):null]})})]}),(0,a.jsxs)("div",{className:"flex h-16 flex-col justify-between",children:[(0,a.jsx)(d.A,{className:"flex justify-end space-y-2 text-right text-sm",amount:e.cost.totalAmount.amount,currencyCode:e.cost.totalAmount.currencyCode}),(0,a.jsxs)("div",{className:"ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700",children:[(0,a.jsx)(P,{item:e,type:"minus",optimisticUpdate:t}),(0,a.jsx)("p",{className:"w-6 text-center",children:(0,a.jsx)("span",{className:"w-full text-sm",children:e.quantity})}),(0,a.jsx)(P,{item:e,type:"plus",optimisticUpdate:t})]})]})]})},r)})}),(0,a.jsxs)("div",{className:"py-4 text-sm text-neutral-500 dark:text-neutral-400",children:[(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700",children:[(0,a.jsx)("p",{children:"Taxes"}),(0,a.jsx)(d.A,{className:"text-right text-base text-black dark:text-white",amount:e.cost.totalTaxAmount.amount,currencyCode:e.cost.totalTaxAmount.currencyCode})]}),(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",children:[(0,a.jsx)("p",{children:"Shipping"}),(0,a.jsx)("p",{className:"text-right",children:"Calculated at checkout"})]}),(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",children:[(0,a.jsx)("p",{children:"Total"}),(0,a.jsx)(d.A,{className:"text-right text-base text-black dark:text-white",amount:e.cost.totalAmount.amount,currencyCode:e.cost.totalAmount.currencyCode})]})]}),(0,a.jsx)("form",{action:v,children:(0,a.jsx)($,{})})]}):(0,a.jsxs)("div",{className:"mt-20 flex w-full flex-col items-center justify-center overflow-hidden",children:[(0,a.jsx)(s.A,{className:"h-16"}),(0,a.jsx)("p",{className:"mt-6 text-center text-2xl font-bold",children:"Your cart is empty."})]})]})})]})})]})}function $(){let{pending:e}=(0,x.useFormStatus)();return(0,a.jsx)("button",{className:"block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100",type:"submit",disabled:e,children:e?(0,a.jsx)(c,{className:"bg-white"}):"Proceed to Checkout"})}},89892:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(71879),n=r(38341),o=r(52846),s=r(71707),l=r(60229),i=r(23794),c=r(10169),d=r(44515),u=r(2548);function m({menu:e}){(0,l.usePathname)(),(0,l.useSearchParams)();let[t,r]=(0,i.useState)(!1),m=()=>r(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{onClick:()=>r(!0),"aria-label":"Open mobile menu",className:"flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white",children:(0,a.jsx)(c.A,{className:"h-4"})}),(0,a.jsx)(n.e,{show:t,children:(0,a.jsxs)(o.lG,{onClose:m,className:"relative z-50",children:[(0,a.jsx)(n.e.Child,{as:i.Fragment,enter:"transition-all ease-in-out duration-300",enterFrom:"opacity-0 backdrop-blur-none",enterTo:"opacity-100 backdrop-blur-[.5px]",leave:"transition-all ease-in-out duration-200",leaveFrom:"opacity-100 backdrop-blur-[.5px]",leaveTo:"opacity-0 backdrop-blur-none",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"})}),(0,a.jsx)(n.e.Child,{as:i.Fragment,enter:"transition-all ease-in-out duration-300",enterFrom:"translate-x-[-100%]",enterTo:"translate-x-0",leave:"transition-all ease-in-out duration-200",leaveFrom:"translate-x-0",leaveTo:"translate-x-[-100%]",children:(0,a.jsx)(o.lG.Panel,{className:"fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black",children:(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("button",{className:"mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",onClick:m,"aria-label":"Close mobile menu",children:(0,a.jsx)(d.A,{className:"h-6"})}),(0,a.jsx)("div",{className:"mb-4 w-full",children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(u.SearchSkeleton,{}),children:(0,a.jsx)(u.default,{})})}),e.length?(0,a.jsx)("ul",{className:"flex w-full flex-col",children:e.map(e=>(0,a.jsx)("li",{className:"py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white",children:(0,a.jsx)(s.default,{href:e.path,prefetch:!0,onClick:m,children:e.title})},e.title))}):null]})})})]})})]})}},2548:(e,t,r)=>{"use strict";r.d(t,{SearchSkeleton:()=>i,default:()=>l});var a=r(71879),n=r(73217),o=r(2705),s=r(60229);function l(){let e=(0,s.useSearchParams)();return(0,a.jsxs)(o.default,{action:"/search",className:"w-max-[550px] relative w-full lg:w-80 xl:w-full",children:[(0,a.jsx)("input",{type:"text",name:"q",placeholder:"Search for products...",autoComplete:"off",defaultValue:e?.get("q")||"",className:"text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"},e?.get("q")),(0,a.jsx)("div",{className:"absolute right-0 top-0 mr-3 flex h-full items-center",children:(0,a.jsx)(n.A,{className:"h-4"})})]})}function i(){return(0,a.jsxs)("form",{className:"w-max-[550px] relative w-full lg:w-80 xl:w-full",children:[(0,a.jsx)("input",{placeholder:"Search for products...",className:"w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"}),(0,a.jsx)("div",{className:"absolute right-0 top-0 mr-3 flex h-full items-center",children:(0,a.jsx)(n.A,{className:"h-4"})})]})}},73363:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(71879),n=r(42095);let o=({amount:e,className:t,currencyCode:r="USD",currencyCodeClassName:o})=>(0,a.jsxs)("p",{suppressHydrationWarning:!0,className:t,children:[`${new Intl.NumberFormat(void 0,{style:"currency",currency:r,currencyDisplay:"narrowSymbol"}).format(parseFloat(e))}`,(0,a.jsx)("span",{className:(0,n.A)("ml-1 inline",o),children:`${r}`})]})},22258:(e,t,r)=>{"use strict";function a(){return null}r.d(t,{WelcomeToast:()=>a}),r(71879),r(23794),r(21805)},4002:(e,t,r)=>{"use strict";r.d(t,{cO:()=>s,cn:()=>o});var a=r(42095),n=r(79430);function o(...e){return(0,n.QP)((0,a.$)(e))}let s=(e,t)=>{let r=t.toString(),a=`${r.length?"?":""}${r}`;return`${e}${a}`}},6955:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(50273).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Pinda\\\\OneDrive\\\\Desktop\\\\purple-pen-site\\\\commerce\\\\app\\\\error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\app\\error.tsx","default")},85442:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P,metadata:()=>S});var a=r(87551),n=r(89849),o=r(8510),s=r(98859),l=r(35964),i=r(3019),c=r(81722),d=r(74508),u=r(19596);let{SITE_NAME:m}=process.env;async function p(){let e=await (0,l.yy)("next-js-frontend-header-menu");return(0,a.jsxs)("nav",{className:"relative flex items-center justify-between p-4 lg:px-6",children:[(0,a.jsx)("div",{className:"block flex-none md:hidden",children:(0,a.jsx)(c.Suspense,{fallback:null,children:(0,a.jsx)(d.default,{menu:e})})}),(0,a.jsxs)("div",{className:"flex w-full items-center",children:[(0,a.jsxs)("div",{className:"flex w-full md:w-1/3",children:[(0,a.jsxs)(i.default,{href:"/",prefetch:!0,className:"mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6",children:[(0,a.jsx)(s.A,{}),(0,a.jsx)("div",{className:"ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block",children:m})]}),e.length?(0,a.jsx)("ul",{className:"hidden gap-6 text-sm md:flex md:items-center",children:e.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:e.path,prefetch:!0,className:"text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300",children:e.title})},e.title))}):null]}),(0,a.jsx)("div",{className:"hidden justify-center md:flex md:w-1/3",children:(0,a.jsx)(c.Suspense,{fallback:(0,a.jsx)(u.SearchSkeleton,{}),children:(0,a.jsx)(u.default,{})})}),(0,a.jsx)("div",{className:"flex justify-end md:w-1/3",children:(0,a.jsx)(o.default,{})})]})]})}var h=r(48914),f=r(80135),x=r.n(f),b=r(16751),v=r(50994),y=r(42365),g=r(42513);r(77165);let{TWITTER_CREATOR:w,TWITTER_SITE:j,SITE_NAME:C}=process.env,k=process.env.NEXT_PUBLIC_VERCEL_URL?`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`:"http://localhost:3000",N=w?(0,v.Sj)(w,"@"):void 0,A=j?(0,v.Sj)(j,"https://"):void 0,S={metadataBase:new URL(k),title:{default:C,template:`%s | ${C}`},robots:{follow:!0,index:!0},...N&&A&&{twitter:{card:"summary_large_image",creator:N,site:A}}};async function P({children:e}){let t=(await y.UL()).get("cartId")?.value,r=(0,l.Xl)(t);return(0,a.jsx)("html",{lang:"en",className:x().variable,children:(0,a.jsx)("body",{className:"bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white",children:(0,a.jsx)(b.ThemeProvider,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,a.jsxs)(n.CartProvider,{cartPromise:r,children:[(0,a.jsx)(p,{}),(0,a.jsxs)("main",{children:[e,(0,a.jsx)(g.Toaster,{closeButton:!0}),(0,a.jsx)(h.WelcomeToast,{})]})]})})})})}},89849:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>n});var a=r(50273);let n=(0,a.registerClientReference)(function(){throw Error("Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\cart\\cart-context.tsx","CartProvider");(0,a.registerClientReference)(function(){throw Error("Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\cart\\cart-context.tsx","useCart")},8510:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(50273).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Pinda\\\\OneDrive\\\\Desktop\\\\purple-pen-site\\\\commerce\\\\components\\\\cart\\\\modal.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\cart\\modal.tsx","default")},11946:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(87551),n=r(67371);function o(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":`${process.env.SITE_NAME} logo`,viewBox:"0 0 32 28",...e,className:(0,n.A)("h-4 w-4 fill-black dark:fill-white",e.className),children:[(0,a.jsx)("path",{d:"M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"}),(0,a.jsx)("path",{d:"M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"})]})}},74508:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(50273).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Pinda\\\\OneDrive\\\\Desktop\\\\purple-pen-site\\\\commerce\\\\components\\\\layout\\\\navbar\\\\mobile-menu.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\layout\\navbar\\mobile-menu.tsx","default")},19596:(e,t,r)=>{"use strict";r.d(t,{SearchSkeleton:()=>o,default:()=>n});var a=r(50273);let n=(0,a.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Pinda\\\\OneDrive\\\\Desktop\\\\purple-pen-site\\\\commerce\\\\components\\\\layout\\\\navbar\\\\search.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\layout\\navbar\\search.tsx","default"),o=(0,a.registerClientReference)(function(){throw Error("Attempted to call SearchSkeleton() from the server but SearchSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\layout\\navbar\\search.tsx","SearchSkeleton")},98859:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(87551),n=r(67371),o=r(11946);function s({size:e}){return(0,a.jsx)("div",{className:(0,n.A)("flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black",{"h-[40px] w-[40px] rounded-xl":!e,"h-[30px] w-[30px] rounded-lg":"sm"===e}),children:(0,a.jsx)(o.A,{className:(0,n.A)({"h-[16px] w-[16px]":!e,"h-[10px] w-[10px]":"sm"===e})})})}},48914:(e,t,r)=>{"use strict";r.d(t,{WelcomeToast:()=>a});let a=(0,r(50273).registerClientReference)(function(){throw Error("Attempted to call WelcomeToast() from the server but WelcomeToast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Pinda\\OneDrive\\Desktop\\purple-pen-site\\commerce\\components\\welcome-toast.tsx","WelcomeToast")},30110:(e,t,r)=>{"use strict";r.d(t,{AG:()=>a,eJ:()=>s,gp:()=>o,p9:()=>n,yo:()=>l});let a={title:"Relevance",slug:null,sortKey:"RELEVANCE",reverse:!1},n=[a,{title:"Trending",slug:"trending-desc",sortKey:"BEST_SELLING",reverse:!1},{title:"Latest arrivals",slug:"latest-desc",sortKey:"CREATED_AT",reverse:!0},{title:"Price: Low to high",slug:"price-asc",sortKey:"PRICE",reverse:!1},{title:"Price: High to low",slug:"price-desc",sortKey:"PRICE",reverse:!0}],o={collections:"collections",products:"products",cart:"cart"},s="nextjs-frontend-hidden",l="/api/2023-01/graphql.json"},35964:(e,t,r)=>{"use strict";r.d(t,{Xl:()=>_,X_:()=>U,ld:()=>L,qw:()=>F,yy:()=>M,WE:()=>H,X5:()=>K,oo:()=>Y,GN:()=>B,d$:()=>V,Yi:()=>W});var a=r(30110);let n=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),o=e=>!!n(e)&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let r=Object.getPrototypeOf(t);return null!==r&&e(r)}(e));var s=r(50994),l=r(88829),i=r(42365),c=r(93104);let d=`
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
`,m=`
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
`,p=`
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
  ${m}
`,h=`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${p}
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
`,x=`
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${f}
`,b=`
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
`,v=`
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
  ${m}
`,y=`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`,g=`
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
  ${g}
`,j=`
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${g}
`,C=`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${m}
`,k=`
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${m}
`,N=`
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${m}
`,A=process.env.SHOPIFY_STORE_DOMAIN?(0,s.Sj)(process.env.SHOPIFY_STORE_DOMAIN,"https://"):"",S=`${A}${a.yo}`,P=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;async function I({cache:e="force-cache",headers:t,query:r,tags:a,variables:n}){try{let o=await fetch(S,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":P,...t},body:JSON.stringify({...r&&{query:r},...n&&{variables:n}}),cache:e,...a&&{next:{tags:a}}}),s=await o.json();if(s.errors)throw s.errors[0];return{status:o.status,body:s}}catch(e){if(o(e))throw{cause:e.cause?.toString()||"unknown",status:e.status||500,message:e.message,query:r};throw{error:e,query:r}}}let T=e=>e.edges.map(e=>e?.node),$=e=>(e.cost?.totalTaxAmount||(e.cost.totalTaxAmount={amount:"0.0",currencyCode:e.cost.totalAmount.currencyCode}),{...e,lines:T(e.lines)}),E=e=>{if(e)return{...e,path:`/search/${e.handle}`}},O=e=>{let t=[];for(let r of e)if(r){let e=E(r);e&&t.push(e)}return t},D=(e,t)=>T(e).map(e=>{let r=e.url.match(/.*\/(.*)\..*/)?.[1];return{...e,altText:e.altText||`${t} - ${r}`}}),R=(e,t=!0)=>{if(!e||t&&e.tags.includes(a.eJ))return;let{images:r,variants:n,...o}=e;return{...o,images:D(r,e.title),variants:T(n)}},q=e=>{let t=[];for(let r of e)if(r){let e=R(r);e&&t.push(e)}return t};async function _(e){if(!e)return;let t=await I({query:h,variables:{cartId:e},tags:[a.gp.cart]});if(t.body.data.cart)return $(t.body.data.cart)}async function U(e){return E((await I({query:x,tags:[a.gp.collections],variables:{handle:e}})).body.data.collection)}async function L({collection:e,reverse:t,sortKey:r}){let n=await I({query:v,tags:[a.gp.collections,a.gp.products],variables:{handle:e,reverse:t,sortKey:"CREATED_AT"===r?"CREATED":r}});return n.body.data.collection?q(T(n.body.data.collection.products)):(console.log(`No collection found for \`${e}\``),[])}async function F(){let e=await I({query:b,tags:[a.gp.collections]}),t=T(e.body?.data?.collections);return[{handle:"",title:"All",description:"All products",seo:{title:"All",description:"All products"},path:"/search",updatedAt:new Date().toISOString()},...O(t).filter(e=>!e.handle.startsWith("hidden"))]}async function M(e){let t=await I({query:y,tags:[a.gp.collections],variables:{handle:e}});return t.body?.data?.menu?.items.map(e=>({title:e.title,path:e.url.replace(A,"").replace("/collections","/search").replace("/pages","")}))||[]}async function H(e){return(await I({query:w,cache:"no-store",variables:{handle:e}})).body.data.pageByHandle}async function K(){return T((await I({query:j,cache:"no-store"})).body.data.pages)}async function Y(e){return R((await I({query:C,tags:[a.gp.products],variables:{handle:e}})).body.data.product,!1)}async function B(e){return q((await I({query:N,tags:[a.gp.products],variables:{productId:e}})).body.data.productRecommendations)}async function V({query:e,reverse:t,sortKey:r}){return q(T((await I({query:k,tags:[a.gp.products],variables:{query:e,reverse:t,sortKey:r}})).body.data.products))}async function W(e){let t=(await (0,i.b3)()).get("x-shopify-topic")||"unknown",r=e.nextUrl.searchParams.get("secret"),n=["collections/create","collections/delete","collections/update"].includes(t),o=["products/create","products/delete","products/update"].includes(t);return r&&r===process.env.SHOPIFY_REVALIDATION_SECRET?n||o?(n&&(0,l.revalidateTag)(a.gp.collections),o&&(0,l.revalidateTag)(a.gp.products),c.NextResponse.json({status:200,revalidated:!0,now:Date.now()})):c.NextResponse.json({status:200}):(console.error("Invalid revalidation secret."),c.NextResponse.json({status:401}))}},50994:(e,t,r)=>{"use strict";r.d(t,{JM:()=>n,Sj:()=>a});let a=(e,t)=>e.startsWith(t)?e:`${t}${e}`,n=()=>{let e=[];if(["SHOPIFY_STORE_DOMAIN","SHOPIFY_STOREFRONT_ACCESS_TOKEN"].forEach(t=>{process.env[t]||e.push(t)}),e.length)throw Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables

${e.join("\n")}
`);if(process.env.SHOPIFY_STORE_DOMAIN?.includes("[")||process.env.SHOPIFY_STORE_DOMAIN?.includes("]"))throw Error("Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.")}},77165:()=>{}};