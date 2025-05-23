(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/AnimatedPageWrapper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/AnimatedPageWrapper.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client"; // This component uses Framer Motion, so it must be a client component.
;
;
// Define animation variants for page transitions
const pageVariants = {
    initial: {
        opacity: 0,
        x: "-20vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "20vw"
    }
};
// Define transition properties for consistency
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5 // Duration of the transition in seconds
};
// This component wraps the main content of each page to apply entry and exit animations.
// It will be used inside each `page.js` file.
const AnimatedPageWrapper = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: pageVariants,
        initial: "initial" // Initial animation state
        ,
        animate: "in" // Animation state when component is mounted/visible
        ,
        exit: "out" // Animation state when component is unmounted/exiting
        ,
        transition: pageTransition,
        style: {
            position: 'relative',
            width: '100%'
        },
        children: children
    }, "page-wrapper" // A static key here is fine as AnimatePresence key is on the page component itself
    , false, {
        fileName: "[project]/components/AnimatedPageWrapper.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_c = AnimatedPageWrapper;
const __TURBOPACK__default__export__ = AnimatedPageWrapper;
var _c;
__turbopack_context__.k.register(_c, "AnimatedPageWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CallToAction.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/CallToAction.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)"); // Default icon example
"use client"; // This component uses Framer Motion for hover/tap animations
;
;
;
;
// Reusable Call To Action button component
const CallToAction = ({ text = "Learn More", link = "#", type = 'primary', className = '', aosData = {}, icon, iconPosition = 'right', target = '_self', rel, onClick })=>{
    // Construct button classes from global styles and any custom classes
    const buttonClasses = `btn btn-${type} ${className}`;
    // Determine rel attribute, especially for external links
    const linkRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;
    // Prepare the icon if provided, or use a default
    const buttonIcon = iconPosition === 'right' ? icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
        fileName: "[project]/components/CallToAction.jsx",
        lineNumber: 29,
        columnNumber: 15
    }, this) // Default to FiArrowRight if no icon is passed for right position
     : icon; // For left position, only show if icon is explicitly passed
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            buttonIcon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    marginRight: '0.5em',
                    display: 'inline-flex',
                    alignItems: 'center'
                },
                children: buttonIcon
            }, void 0, false, {
                fileName: "[project]/components/CallToAction.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            text,
            buttonIcon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    marginLeft: '0.5em',
                    display: 'inline-flex',
                    alignItems: 'center'
                },
                children: buttonIcon
            }, void 0, false, {
                fileName: "[project]/components/CallToAction.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    // If an onClick handler is provided, render as a button
    if (onClick) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: buttonClasses,
            style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
            },
            whileHover: {
                scale: 1.05,
                y: -2,
                boxShadow: "var(--shadow-md)"
            },
            whileTap: {
                scale: 0.98,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            },
            onClick: onClick,
            ...aosData,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/CallToAction.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    // Otherwise, render as a Link (wrapped in motion.a for animation)
    return(// Using passHref with a motion.a child for Next.js Link
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            className: buttonClasses,
            style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
            },
            whileHover: {
                scale: 1.05,
                y: -2,
                boxShadow: "var(--shadow-lg)"
            },
            whileTap: {
                scale: 0.98,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            },
            target: target,
            rel: linkRel,
            ...aosData,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/CallToAction.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CallToAction.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this));
};
_c = CallToAction;
const __TURBOPACK__default__export__ = CallToAction;
var _c;
__turbopack_context__.k.register(_c, "CallToAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/ProductCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actionButton": "ProductCard-module__HOiECa__actionButton",
  "amazonButton": "ProductCard-module__HOiECa__amazonButton",
  "card": "ProductCard-module__HOiECa__card",
  "cardContent": "ProductCard-module__HOiECa__cardContent",
  "cardLinkWrapper": "ProductCard-module__HOiECa__cardLinkWrapper",
  "cardSkeleton": "ProductCard-module__HOiECa__cardSkeleton",
  "currentPrice": "ProductCard-module__HOiECa__currentPrice",
  "dealCard": "ProductCard-module__HOiECa__dealCard",
  "dealTag": "ProductCard-module__HOiECa__dealTag",
  "imageWrapper": "ProductCard-module__HOiECa__imageWrapper",
  "oldPrice": "ProductCard-module__HOiECa__oldPrice",
  "priceContainer": "ProductCard-module__HOiECa__priceContainer",
  "productCategory": "ProductCard-module__HOiECa__productCategory",
  "productImage": "ProductCard-module__HOiECa__productImage",
  "productName": "ProductCard-module__HOiECa__productName",
  "promoTag": "ProductCard-module__HOiECa__promoTag",
  "quickActions": "ProductCard-module__HOiECa__quickActions",
  "ratingContainer": "ProductCard-module__HOiECa__ratingContainer",
  "reviewCount": "ProductCard-module__HOiECa__reviewCount",
  "starEmpty": "ProductCard-module__HOiECa__starEmpty",
  "starFilled": "ProductCard-module__HOiECa__starFilled",
});
}}),
"[project]/components/ProductCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/ProductCard.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/ProductCard.module.css [app-client] (css module)"); // Create this CSS Module
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
"use client"; // Uses Framer Motion for hover effects
;
;
;
;
;
;
const ProductCard = ({ product, isDeal = false })=>{
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardSkeleton,
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 12,
            columnNumber: 12
        }, this); // Basic skeleton
    }
    const { slug = 'default-product', name = 'Product Name Placeholder', category = 'Category', price = '0.00', oldPrice, imageUrl = `https://placehold.co/600x400/${isDeal ? 'F1C40F' : '2ECC71'}/1A1A1A?text=${encodeURIComponent(name)}&font=Inter`, amazonLink = '#', rating = 4.5, reviewCount = 0 } = product;
    const cardVariants = {
        rest: {
            y: 0,
            boxShadow: "var(--shadow-md)"
        },
        hover: {
            y: -6,
            scale: 1.03,
            boxShadow: "var(--shadow-lg)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };
    const imageVariants = {
        rest: {
            scale: 1
        },
        hover: {
            scale: 1.08
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${isDeal ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dealCard : ''}`,
        variants: cardVariants,
        initial: "rest",
        whileHover: "hover",
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/products/${slug}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLinkWrapper,
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                        variants: imageVariants,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imageUrl,
                                alt: name,
                                width: 400,
                                height: 300,
                                style: {
                                    objectFit: 'cover'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage,
                                onError: (e)=>e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/1A1A1A?text=Error&font=Inter`
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            isDeal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dealTag,
                                children: "DEAL!"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 56,
                                columnNumber: 22
                            }, this),
                            !isDeal && product.onPromotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].promoTag,
                                children: "Offer"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 57,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickActions,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Add to wishlist",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHeart"], {}, void 0, false, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 59,
                                        columnNumber: 82
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductCard.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCategory,
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingContainer,
                                children: [
                                    [
                                        ...Array(5)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"], {
                                            className: i < Math.round(rating) ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starFilled : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starEmpty
                                        }, i, false, {
                                            fileName: "[project]/components/ProductCard.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)),
                                    reviewCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewCount,
                                        children: [
                                            "(",
                                            reviewCount,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 69,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentPrice,
                                        children: [
                                            "$",
                                            price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].oldPrice,
                                        children: [
                                            "$",
                                            oldPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 73,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                href: amazonLink,
                target: "_blank",
                rel: "noopener noreferrer sponsored",
                className: `btn ${isDeal ? 'btn-secondary' : 'btn-primary'} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amazonButton}`,
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                children: [
                    isDeal ? "Grab Deal" : "View on Amazon",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShoppingCart"], {
                        style: {
                            marginLeft: '0.5em'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 85,
                        columnNumber: 51
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/PromotionBanner.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "align-center": "PromotionBanner-module__8R3BGa__align-center",
  "align-left": "PromotionBanner-module__8R3BGa__align-left",
  "align-right": "PromotionBanner-module__8R3BGa__align-right",
  "bannerButton": "PromotionBanner-module__8R3BGa__bannerButton",
  "bannerContainer": "PromotionBanner-module__8R3BGa__bannerContainer",
  "bannerContent": "PromotionBanner-module__8R3BGa__bannerContent",
  "bannerImage": "PromotionBanner-module__8R3BGa__bannerImage",
  "bannerImageWrapper": "PromotionBanner-module__8R3BGa__bannerImageWrapper",
  "bannerOverlay": "PromotionBanner-module__8R3BGa__bannerOverlay",
  "bannerSubtitle": "PromotionBanner-module__8R3BGa__bannerSubtitle",
  "bannerTitle": "PromotionBanner-module__8R3BGa__bannerTitle",
  "btn": "PromotionBanner-module__8R3BGa__btn",
});
}}),
"[project]/components/PromotionBanner.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/PromotionBanner.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/PromotionBanner.module.css [app-client] (css module)"); // Create this CSS Module
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CallToAction$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CallToAction.jsx [app-client] (ecmascript)"); // Re-using our CTA component
"use client"; // Uses Framer Motion
;
;
;
;
;
;
const PromotionBanner = ({ title = 'Default Promotion Title!', subtitle = 'Check out this amazing limited-time offer.', buttonText = 'Shop Now', buttonLink = '/deals', imageUrl = `https://placehold.co/1200x400/F1C40F/1A1A1A?text=Promotion+Banner&font=Inter`, imageAlt = 'Promotional banner', aosData = "zoom-in-up", alignText = "center", overlayOpacity = 0.6, textColor = 'var(--neutral-white)', buttonType = 'secondary' })=>{
    const textAlignmentClass = __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`align-${alignText}`] || __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['align-center'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContainer,
        "data-aos": aosData,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerImageWrapper,
                children: [
                    imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imageUrl,
                        alt: imageAlt,
                        layout: "fill",
                        objectFit: "cover",
                        priority: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerImage,
                        onError: (e)=>e.currentTarget.src = `https://placehold.co/1200x400/CCCCCC/1A1A1A?text=Img+Error&font=Inter`
                    }, void 0, false, {
                        fileName: "[project]/components/PromotionBanner.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerOverlay,
                        style: {
                            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PromotionBanner.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromotionBanner.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContent} ${textAlignmentClass} container`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTitle,
                        style: {
                            color: textColor
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/PromotionBanner.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerSubtitle,
                        style: {
                            color: textColor
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3,
                            ease: "easeOut"
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/PromotionBanner.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    buttonText && buttonLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.4,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CallToAction$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: buttonText,
                            link: buttonLink,
                            type: buttonType,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PromotionBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerButton
                        }, void 0, false, {
                            fileName: "[project]/components/PromotionBanner.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromotionBanner.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromotionBanner.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromotionBanner.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = PromotionBanner;
const __TURBOPACK__default__export__ = PromotionBanner;
var _c;
__turbopack_context__.k.register(_c, "PromotionBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/CategoryHighlight.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "categoryCard": "CategoryHighlight-module__pG9lLW__categoryCard",
  "categoryImage": "CategoryHighlight-module__pG9lLW__categoryImage",
  "categoryLink": "CategoryHighlight-module__pG9lLW__categoryLink",
  "categoryName": "CategoryHighlight-module__pG9lLW__categoryName",
  "contentWrapper": "CategoryHighlight-module__pG9lLW__contentWrapper",
  "exploreAction": "CategoryHighlight-module__pG9lLW__exploreAction",
  "exploreIcon": "CategoryHighlight-module__pG9lLW__exploreIcon",
  "imageContainer": "CategoryHighlight-module__pG9lLW__imageContainer",
  "overlay": "CategoryHighlight-module__pG9lLW__overlay",
  "productCount": "CategoryHighlight-module__pG9lLW__productCount",
});
}}),
"[project]/components/CategoryHighlight.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/CategoryHighlight.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/CategoryHighlight.module.css [app-client] (css module)"); // Create this CSS Module
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
"use client"; // Uses Framer Motion
;
;
;
;
;
;
const CategoryHighlight = ({ category, aosData = "zoom-in" })=>{
    if (!category) return null;
    const { slug = 'default-category', name = 'Category Name', imageUrl = `https://placehold.co/400x500/2ECC71/FFFFFF?text=${encodeURIComponent(name)}&font=Inter`, productCount = 0 } = category;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryCard,
        "data-aos": aosData,
        whileHover: {
            y: -10,
            boxShadow: "var(--shadow-xl)"
        },
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/categories/${slug}`,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryLink,
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageUrl,
                            alt: name,
                            layout: "fill",
                            objectFit: "cover",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryImage,
                            onError: (e)=>e.currentTarget.src = `https://placehold.co/400x500/CCCCCC/1A1A1A?text=Error&font=Inter`
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryHighlight.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryHighlight.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryHighlight.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryName,
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryHighlight.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        productCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCount,
                            children: [
                                productCount,
                                " items"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CategoryHighlight.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].exploreAction,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/components/CategoryHighlight.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRightCircle"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$CategoryHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].exploreIcon
                                }, void 0, false, {
                                    fileName: "[project]/components/CategoryHighlight.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CategoryHighlight.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryHighlight.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoryHighlight.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CategoryHighlight.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = CategoryHighlight;
const __TURBOPACK__default__export__ = CategoryHighlight;
var _c;
__turbopack_context__.k.register(_c, "CategoryHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_22456498._.js.map