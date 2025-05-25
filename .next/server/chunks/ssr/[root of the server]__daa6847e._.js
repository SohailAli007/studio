module.exports = {

"[project]/src/components/auth/floating-dishes-background.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const DISH_EMOJIS = [
    '🍕',
    '🍔',
    '🍟',
    '🍩',
    '🍰',
    '🍦',
    '🍜',
    '🍣',
    '🌮',
    '🥗',
    '🍝',
    '🍲',
    '🎂',
    '🥐',
    '🥞'
];
const NUM_DISHES = 20;
const FloatingDishesBackground = ()=>{
    const [dishes, setDishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const generateDish = (id)=>{
            return {
                id,
                emoji: DISH_EMOJIS[Math.floor(Math.random() * DISH_EMOJIS.length)],
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 40 + 35,
                speedX: (Math.random() - 0.5) * 0.1,
                speedY: (Math.random() - 0.5) * 0.1,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 0.3 + 0.5
            };
        };
        const initialDishes = Array.from({
            length: NUM_DISHES
        }, (_, i)=>generateDish(i));
        setDishes(initialDishes);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animationFrameId;
        const animate = ()=>{
            setDishes((prevDishes)=>prevDishes.map((dish)=>{
                    let newX = dish.x + dish.speedX;
                    let newY = dish.y + dish.speedY;
                    let newSpeedX = dish.speedX;
                    let newSpeedY = dish.speedY;
                    if (newX < -5 || newX > 105) newSpeedX *= -1; // Reverse direction when out of viewport width + buffer
                    if (newY < -5 || newY > 105) newSpeedY *= -1; // Reverse direction when out of viewport height + buffer
                    newX = Math.max(-5, Math.min(105, newX + newSpeedX));
                    newY = Math.max(-5, Math.min(105, newY + newSpeedY));
                    return {
                        ...dish,
                        x: newX,
                        y: newY,
                        speedX: newSpeedX,
                        speedY: newSpeedY,
                        rotation: (dish.rotation + dish.rotationSpeed) % 360
                    };
                }));
            animationFrameId = requestAnimationFrame(animate);
        };
        if (dishes.length > 0) {
            animationFrameId = requestAnimationFrame(animate);
        }
        return ()=>{
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [
        dishes.length
    ]); // Re-run if dishes are initialized
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 overflow-hidden bg-gradient-to-br from-background via-[hsl(200,30%,92%)] to-[hsl(200,30%,89%)]"),
        "aria-hidden": "true",
        children: dishes.map((dish)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    left: `${dish.x}vw`,
                    top: `${dish.y}vh`,
                    fontSize: `${dish.size}px`,
                    transform: `translate(-50%, -50%) rotate(${dish.rotation}deg)`,
                    transition: 'left 0.1s linear, top 0.1s linear'
                },
                children: dish.emoji
            }, dish.id, false, {
                fileName: "[project]/src/components/auth/floating-dishes-background.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/auth/floating-dishes-background.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FloatingDishesBackground;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__daa6847e._.js.map