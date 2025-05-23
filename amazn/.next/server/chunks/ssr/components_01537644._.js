module.exports = {

"[project]/components/AnimatedPageWrapper.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/AnimatedPageWrapper.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
const __TURBOPACK__default__export__ = AnimatedPageWrapper;
}}),
"[project]/components/CallToAction.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/CallToAction.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)"); // Default icon example
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
    const buttonIcon = iconPosition === 'right' ? icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
        fileName: "[project]/components/CallToAction.jsx",
        lineNumber: 29,
        columnNumber: 15
    }, this) // Default to FiArrowRight if no icon is passed for right position
     : icon; // For left position, only show if icon is explicitly passed
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            buttonIcon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            buttonIcon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
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
const __TURBOPACK__default__export__ = CallToAction;
}}),

};

//# sourceMappingURL=components_01537644._.js.map