import { ComponentSchema } from './types';
import { ROICalculatorPreview } from '@/components/library/ROICalculatorPreview';
import { KineticTypography } from '@/components/library/KineticTypography';

export const registry: ComponentSchema[] = [
    // --- Typography & Brand Identity ---
    {
        id: "typo-hero-001",
        title: "Kinetic Typography Hero",
        category: "Typography",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A hero section where text splits and animates with stagger effects on scroll.",
        features: [
            "Staggered entrance animations",
            "Letter-by-letter split text effect",
            "Parallax scroll integration"
        ],
        logicHooks: ["useScroll", "useTransform", "AnimatePresence"],
        previewComponent: <KineticTypography />
    },
    {
        id: "typo-velocity-002",
        title: "Velocity Text Warp",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Text that skews and scales based on the velocity of the scroll, creating a physical sense of speed.",
        features: [
            "Scroll velocity tracking",
            "Dynamic SkewX and ScaleY properties",
            "Inertia-based return to rest state"
        ],
        logicHooks: ["useGSAP", "ScrollTrigger", "Observer"]
    },
    {
        id: "typo-glitch-006",
        title: "Glitch-Effect Reveal",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Cyberpunk-style text reveal using clip-paths and rapid offset changes.",
        features: [
            "Clip-path polygon animation",
            "Randomized X/Y offsets (jitter)",
            "Chromatic aberration simulation"
        ],
        logicHooks: ["useGSAP", "gsap.timeline", "RoughEase"]
    },

    // --- Navigation & Layout ---
    {
        id: "nav-dock-012",
        title: "Magnetic Dock",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A macOS-inspired dock where icons scale up exponentially based on cursor proximity.",
        features: [
            "Mouse distance calculation",
            "Exponential scaling curve",
            "Smooth spring physics"
        ],
        logicHooks: ["useMotionValue", "useTransform", "useSpring"]
    },
    {
        id: "nav-drawer-019",
        title: "Elastic Drawer",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "A slide-out drawer with a 'snap-back' elastic effect when dragged or opened.",
        features: [
            "Drag gesture support",
            "High damping spring transition",
            "Backdrop blur integration"
        ],
        logicHooks: ["useDragControls", "AnimatePresence", "useCycle"]
    },

    // --- SaaS Pricing & Conversion ---
    {
        id: "roi-calc-029",
        title: "SaaS ROI Calculator",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Elite",
        intent: "An interactive calculator where dragging a slider updates a dynamic bar chart representing money saved over 12 months.",
        features: [
            "Smooth scrubbing of numbers using GSAP Snap and TextPlugin",
            "Interactive SVG bar chart that grows/shrinks with spring easing",
            "Magnetic handle on the slider for tactile feedback"
        ],
        logicHooks: ["useGSAP", "contextSafe", "Draggable"],
        previewComponent: <ROICalculatorPreview />
    },
    {
        id: "price-matrix-024",
        title: "Sticky Comparison Matrix",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "A complex pricing table where headers stick and features checkmarks draw themselves on scroll.",
        features: [
            "Sticky header positioning",
            "SVG DrawSVG animation for checkmarks",
            "Row highlighting on hover"
        ],
        logicHooks: ["ScrollTrigger", "DrawSVGPlugin", "useGSAP"]
    },

    // --- Immersive Scroll ---
    {
        id: "scroll-canvas-031",
        title: "Horizontal Canvas Scroll",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "A section that pins vertically while moving content horizontally, emulating a canvas pan.",
        features: [
            "Vertical pin with horizontal translation",
            "Scrub-based animation",
            "Dynamic container width calculation"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "gsap.to"]
    },
    {
        id: "scroll-parallax-033",
        title: "3D Parallax Hero",
        category: "Scroll",
        engine: "MOTION",
        difficulty: "Elite",
        intent: "A multi-layered hero section where elements move at different speeds and depths (Z-axis).",
        features: [
            "Mouse or Scroll driven parallax",
            "Perspective and RotateX transforms",
            "Layered depth-of-field blur"
        ],
        logicHooks: ["useScroll", "useTransform", "useSpring"]
    },

    // --- Micro-Interactions ---
    {
        id: "inter-magnet-041",
        title: "Magnetic Button",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "A button that physically tracks the mouse cursor within a certain range before snapping back.",
        features: [
            "Cursor proximity tracking",
            "Elastic element movement",
            "Hover state trails"
        ],
        logicHooks: ["useGSAP", "quickTo", "MouseEvents"]
    },
    {
        id: "inter-noise-047",
        title: "Noise Image Reveal",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "An image reveal effect that dissolves a static noise overlay using SVG filters.",
        features: [
            "SVG turbulence filter animation",
            "Opacity and scale transitions",
            "Performance optimized canvas fallback"
        ],
        logicHooks: ["useGSAP", "AttrPlugin", "ScrollTrigger"]
    }
];
