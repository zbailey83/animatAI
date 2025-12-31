import { ComponentSchema } from './types';
import { ROICalculatorPreview } from '@/components/library/ROICalculatorPreview';
import { KineticTypography } from '@/components/library/KineticTypography';

export const registry: ComponentSchema[] = [
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
    }
];
