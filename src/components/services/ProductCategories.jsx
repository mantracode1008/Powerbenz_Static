import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ferrous Scrap images
import ferrousHmsImg    from '../../assets/services/ferrous_hms_scrap.png';
import castIronImg      from '../../assets/services/cast_iron_scrap.png';
import stainlessSteelImg from '../../assets/services/stainless_steel_scrap.png';
import metalScrapImg    from '../../assets/services/metal_scrap.png';
import scrapBuyingImg   from '../../assets/services/scrap_buying.png';

// Non-Ferrous Scrap images
import copperImg    from '../../assets/services/nonferrous_copper_scrap.png';
import copperOldImg from '../../assets/services/copper_scrap.png';
import logisticsImg from '../../assets/services/logistics_support.png';
import pricingImg   from '../../assets/services/pricing_finance.png';
import qualityImg   from '../../assets/services/quality_inspection.png';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ferrousProducts = [
    {
        id: 'hms',
        code: 'HMS-1&2',
        title: 'Heavy Melting Scrap',
        shortTitle: 'HMS 1&2',
        badge: 'Premium Grade',
        image: ferrousHmsImg,
        tagline: 'The backbone of global steel production',
        description:
            'Heavy Melting Scrap (HMS 1 & HMS 2) is the most traded category of ferrous scrap worldwide. Powerbenz supplies high-grade HMS directly sourced from industrial dismantling, demolition projects, and steel-intensive manufacturing. Our HMS lots are rigorously sorted, shredded, and baled to meet international export standards — ensuring consistent quality across every shipment.',
        specs: [
            { label: 'Thickness',     value: '≥ 6mm (HMS1) / 3–6mm (HMS2)' },
            { label: 'Origin',        value: 'Industrial & Demolition' },
            { label: 'Form',          value: 'Loose / Baled / Shredded' },
            { label: 'Applications',  value: 'Electric Arc Furnaces, BOF Steelmaking' },
        ],
    },
    {
        id: 'cast-iron',
        code: 'CI-SC',
        title: 'Cast Iron Scrap',
        shortTitle: 'Cast Iron',
        badge: 'High Density',
        image: castIronImg,
        tagline: 'Dense, reliable, and always in demand',
        description:
            'Cast iron scrap sourced by Powerbenz includes engine blocks, industrial machinery parts, pipes, and heavy casting offcuts from manufacturing. Known for its high carbon content and density, cast iron scrap is a critical input for foundries and steel mills requiring consistent melt chemistry. We ensure zero contamination sorting and competitive volume availability.',
        specs: [
            { label: 'Carbon Content', value: '2.5% – 4%' },
            { label: 'Form',           value: 'Loose Pieces / Crushed' },
            { label: 'Source',         value: 'Auto Parts, Foundry Rejects, Pipes' },
            { label: 'Applications',   value: 'Foundries, Pig Iron Production' },
        ],
    },
    {
        id: 'stainless',
        code: 'SS-SC',
        title: 'Stainless Steel Scrap',
        shortTitle: 'Stainless Steel',
        badge: 'High Value',
        image: stainlessSteelImg,
        tagline: 'Corrosion-resistant, high-purity recycling',
        description:
            'Powerbenz handles a wide range of stainless steel scrap grades — 201, 304, 316, and 430 — sourced from pharmaceutical manufacturing, food processing, and architectural projects. Stainless steel scrap commands premium value due to its nickel, chromium, and molybdenum content. Our materials are sorted by grade and tested for alloy composition before dispatch.',
        specs: [
            { label: 'Grades Available', value: '201, 304, 316, 316L, 430' },
            { label: 'Form',             value: 'Turnings / Solids / Mixed' },
            { label: 'Purity',           value: 'Alloy-tested, low impurity' },
            { label: 'Applications',     value: 'Stainless Remelting, Specialty Alloys' },
        ],
    },
    {
        id: 'shredded',
        code: 'SH-SC',
        title: 'Shredded Scrap',
        shortTitle: 'Shredded',
        badge: 'Ready-to-Melt',
        image: metalScrapImg,
        tagline: 'Uniformly processed, immediately furnace-ready',
        description:
            'Our shredded scrap is machine-processed from automobiles, white goods, and light fabrication waste. The shredding process removes non-metallic elements and separates ferrous from non-ferrous material, producing a clean, dense metallic product. Ideal for electric arc furnace (EAF) operations requiring consistent bulk density and melt efficiency.',
        specs: [
            { label: 'Bulk Density',  value: '0.8 – 1.1 T/m³' },
            { label: 'Source',        value: 'Auto Shredding, Appliance Wrecking' },
            { label: 'Purity',        value: '≥ 96% Metallic Iron' },
            { label: 'Applications',  value: 'EAF Steelmaking, Rolling Mills' },
        ],
    },
    {
        id: 'ms-turnings',
        code: 'MS-TR',
        title: 'MS Turnings & Borings',
        shortTitle: 'MS Turnings',
        badge: 'Machining Waste',
        image: scrapBuyingImg,
        tagline: 'Precision machining waste, recovered efficiently',
        description:
            'Mild steel (MS) turnings, borings, and swarf from CNC workshops, automobile manufacturing, and precision engineering are safely collected, degreased, and consolidated. Though light in density, these materials carry significant recoverable iron content and are available in both loose and briquetted form for ease of melting.',
        specs: [
            { label: 'Form',          value: 'Loose Turnings / Briquettes' },
            { label: 'Oil Content',   value: 'Degreased (Low Residual)' },
            { label: 'Source',        value: 'CNC Workshops, Engineering Units' },
            { label: 'Applications',  value: 'EAF Melting, Sponge Iron Plants' },
        ],
    },
];

const nonFerrousProducts = [
    {
        id: 'copper',
        code: 'CU-SC',
        title: 'Copper Scrap',
        shortTitle: 'Copper',
        badge: 'Top Commodity',
        image: copperImg,
        tagline: "The world's most recycled non-ferrous metal",
        description:
            "Powerbenz is a trusted supplier of high-grade copper scrap across all international categories — Birch/Cliff #1, Candy #2, Millberry, and mixed copper. Our copper is sourced from electrical infrastructure, industrial cable stripping, plumbing, and manufacturing waste. Each lot undergoes purity assessment and weight verification ensuring buyers receive consistently reliable material.",
        specs: [
            { label: 'Grades',        value: 'Birch/Cliff #1, Candy #2, Millberry' },
            { label: 'Form',          value: 'Wire / Pipe / Busbar / Mixed' },
            { label: 'Purity',        value: '95% – 99.9% Cu' },
            { label: 'Applications',  value: 'Copper Refining, Wire Rod, Casting' },
        ],
    },
    {
        id: 'copper-wire',
        code: 'CW-SC',
        title: 'Copper Wire Scrap',
        shortTitle: 'Copper Wire',
        badge: 'High Purity',
        image: copperOldImg,
        tagline: 'Stripped copper wire for maximum melt yield',
        description:
            'Our copper wire scrap includes clean stripped wire, insulated copper cable (ICW), and unalloyed copper windings. Powerbenz manages both small lots from electronics dismantling and large volumes from power grid upgrades and infrastructure projects. Wire recovery percentages are clearly communicated for every grade, providing full transparency to smelters and refiners.',
        specs: [
            { label: 'Types',          value: 'ICW (Insulated), Stripped, Windings' },
            { label: 'Recovery Rate',  value: '55% – 99% Cu Equivalent' },
            { label: 'Source',         value: 'Power Lines, Motors, Electronics' },
            { label: 'Applications',   value: 'Copper Smelting, Refinery Feed' },
        ],
    },
    {
        id: 'aluminum',
        code: 'AL-SC',
        title: 'Aluminium Scrap',
        shortTitle: 'Aluminium',
        badge: 'Lightweight Value',
        image: logisticsImg,
        tagline: 'Versatile, lightweight, globally sought-after',
        description:
            'From 6061 T6 extrusions to UBC (used beverage cans) and aluminium die-cast parts, Powerbenz provides a comprehensive range of aluminium scrap. Our materials are sourced from automotive manufacturing, aerospace offcuts, construction demolition, and consumer electronics dismantling. Segregation by alloy series ensures premium pricing and processing efficiency for buyers.',
        specs: [
            { label: 'Grades',        value: '1xxx, 2xxx, 6xxx, UBC' },
            { label: 'Form',          value: 'Extrusions / Sheets / Castings / UBC' },
            { label: 'Fe Content',    value: '< 0.5% (Clean Grade)' },
            { label: 'Applications',  value: 'Secondary Aluminium Smelting, Die-Casting' },
        ],
    },
    {
        id: 'brass',
        code: 'BR-SC',
        title: 'Brass Scrap',
        shortTitle: 'Brass',
        badge: 'Premium Alloy',
        image: qualityImg,
        tagline: 'Rich copper-zinc alloy with excellent recovery',
        description:
            'Brass scrap traded by Powerbenz includes honey brass, yellow brass, red brass, and mixed brass from plumbing, valve manufacturing, and precision components. The copper-to-zinc ratio is measured and disclosed for every lot. Our network spans foundries, plumbing wholesalers, and precision engineering units, giving us access to diverse and consistently available brass scrap streams.',
        specs: [
            { label: 'Types',         value: 'Honey, Yellow, Red, Mixed Brass' },
            { label: 'Cu:Zn Ratio',   value: 'Disclosed per lot' },
            { label: 'Form',          value: 'Solids / Turnings / Mixed' },
            { label: 'Applications',  value: 'Brass Ingot Casting, Foundry' },
        ],
    },
    {
        id: 'lead',
        code: 'PB-SC',
        title: 'Lead Scrap',
        shortTitle: 'Lead',
        badge: 'Battery Grade',
        image: pricingImg,
        tagline: 'Battery recovery and industrial lead recycling',
        description:
            'Powerbenz sources lead scrap from spent battery plates, cable sheathing, and industrial lead components. Our lead materials are handled in compliance with environmental and hazardous materials regulations. Lead battery scrap (drained and neutralized) is a primary feedstock for secondary lead smelters, and we offer both small lot and bulk volume supply from verified industrial generators.',
        specs: [
            { label: 'Types',         value: 'Battery Plates, Cable Lead, Soft Lead' },
            { label: 'Purity',        value: '95% – 99.9% Pb' },
            { label: 'Form',          value: 'Drained Batteries / Blocks / Scrap' },
            { label: 'Applications',  value: 'Secondary Lead Smelting, Battery Production' },
        ],
    },
];

const categories = [
    {
        key: 'ferrous',
        label: 'Ferrous Scrap',
        icon: '⚙️',
        accentColor: '#E8590C',
        accentGlow: 'rgba(232,89,12,0.25)',
        tagline: 'Iron & Steel Alloys',
        description: 'HMS, Cast Iron, Stainless & Structural Steel grades sourced globally with verified quality.',
        products: ferrousProducts,
    },
    {
        key: 'nonferrous',
        label: 'Non-Ferrous Scrap',
        icon: '⚡',
        accentColor: '#F5A623',
        accentGlow: 'rgba(245,166,35,0.25)',
        tagline: 'Copper, Aluminium & Specialty Metals',
        description: 'Premium Copper, Aluminium, Brass and Lead scrap with full alloy-grade transparency.',
        products: nonFerrousProducts,
    },
];

// ─── SPEC BADGE ───────────────────────────────────────────────────────────────

const SpecBadge = ({ label, value, accent }) => (
    <div className="pc2-spec" style={{ '--ac': accent }}>
        <span className="pc2-spec__label">{label}</span>
        <span className="pc2-spec__value">{value}</span>
    </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const ProductCategories = () => {
    const [activeCat,     setActiveCat]     = useState('ferrous');
    const [activeProduct, setActiveProduct] = useState(ferrousProducts[0].id);
    const pillsRef = useRef(null);

    const currentCat     = categories.find(c => c.key === activeCat);
    const currentProduct = currentCat.products.find(p => p.id === activeProduct) || currentCat.products[0];
    const accent         = currentCat.accentColor;

    const handleCatChange = (key) => {
        setActiveCat(key);
        setActiveProduct(categories.find(c => c.key === key).products[0].id);
    };

    return (
        <section className="pc2">
            <style>{`
                /* ── ROOT ─────────────────────────────────────────── */
                .pc2 {
                    background: #020D16;
                    padding: 96px 0 112px;
                    position: relative;
                    overflow: hidden;
                    font-family: inherit;
                }
                .pc2::before {
                    content: '';
                    position: absolute; inset: 0;
                    background:
                        radial-gradient(circle at 15% 40%, rgba(232,89,12,0.06) 0%, transparent 55%),
                        radial-gradient(circle at 85% 15%, rgba(245,166,35,0.05) 0%, transparent 45%);
                    pointer-events: none;
                }
                .pc2-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
                @media (max-width: 768px) { .pc2-inner { padding: 0 20px; } }

                /* ── HEADER ───────────────────────────────────────── */
                .pc2-head {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 24px;
                    margin-bottom: 52px;
                }
                .pc2-eyebrow {
                    display: inline-flex; align-items: center; gap: 9px;
                    background: rgba(232,89,12,0.1);
                    border: 1px solid rgba(232,89,12,0.22);
                    border-radius: 100px;
                    padding: 5px 18px;
                    margin-bottom: 18px;
                }
                .pc2-eyebrow__dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #E8590C;
                    animation: pc2pulse 2s ease-in-out infinite;
                }
                @keyframes pc2pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.75)} }
                .pc2-eyebrow__text {
                    font-size: 10px; font-weight: 800;
                    letter-spacing: .38em; text-transform: uppercase; color: #E8590C;
                }
                .pc2-h2 {
                    font-size: clamp(32px,4.5vw,62px);
                    font-weight: 900; color: #fff;
                    letter-spacing: -.03em; line-height: 1; margin: 0 0 14px;
                }
                .pc2-h2 span {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,.22);
                    font-style: italic;
                }
                .pc2-sub {
                    font-size: 15px; color: rgba(255,255,255,.38);
                    max-width: 520px; font-weight: 500; line-height: 1.7; margin: 0;
                }

                /* ── CATEGORY SWITCHER ────────────────────────────── */
                .pc2-cats {
                    display: flex; gap: 10px; flex-shrink: 0; align-self: flex-start;
                    margin-top: 4px;
                }
                .pc2-cat-btn {
                    display: flex; align-items: center; gap: 9px;
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 14px;
                    padding: 12px 22px;
                    cursor: pointer;
                    transition: all .3s ease;
                    outline: none;
                    position: relative;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .pc2-cat-btn:hover { background: rgba(255,255,255,.06); transform: translateY(-2px); }
                .pc2-cat-btn--active {
                    border-color: var(--cat-ac);
                    background: color-mix(in srgb, var(--cat-ac) 10%, transparent);
                    box-shadow: 0 8px 28px -6px var(--cat-glow);
                    transform: translateY(-2px);
                }
                .pc2-cat-btn__bar {
                    position: absolute; bottom: 0; left: 0;
                    height: 2px; width: 0; background: var(--cat-ac);
                    transition: width .35s cubic-bezier(.4,0,.2,1);
                }
                .pc2-cat-btn--active .pc2-cat-btn__bar { width: 100%; }
                .pc2-cat-btn__icon { font-size: 18px; line-height: 1; }
                .pc2-cat-btn__text {
                    font-size: 13px; font-weight: 800;
                    color: rgba(255,255,255,.75);
                    letter-spacing: -.01em;
                }
                .pc2-cat-btn--active .pc2-cat-btn__text { color: #fff; }
                .pc2-cat-btn__count {
                    font-size: 10px; font-weight: 700;
                    background: rgba(255,255,255,.1);
                    color: rgba(255,255,255,.5);
                    padding: 2px 7px; border-radius: 100px;
                    letter-spacing: .04em;
                }
                .pc2-cat-btn--active .pc2-cat-btn__count {
                    background: color-mix(in srgb, var(--cat-ac) 22%, transparent);
                    color: var(--cat-ac);
                }

                /* ── PRODUCT PILL STRIP ───────────────────────────── */
                .pc2-pills-wrap {
                    margin-bottom: 32px;
                    position: relative;
                }
                .pc2-pills {
                    display: flex; gap: 10px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding-bottom: 4px;
                }
                .pc2-pills::-webkit-scrollbar { display: none; }
                .pc2-pill {
                    flex-shrink: 0;
                    display: flex; align-items: center; gap: 10px;
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.07);
                    border-radius: 14px;
                    padding: 0;
                    cursor: pointer; outline: none;
                    transition: all .28s ease;
                    overflow: hidden;
                    text-align: left;
                    position: relative;
                }
                .pc2-pill:hover {
                    border-color: rgba(255,255,255,.15);
                    background: rgba(255,255,255,.05);
                    transform: translateY(-2px);
                }
                .pc2-pill--active {
                    border-color: var(--ac);
                    background: color-mix(in srgb, var(--ac) 10%, transparent);
                    box-shadow: 0 6px 24px -6px var(--ac-glow);
                    transform: translateY(-3px);
                }
                .pc2-pill__img {
                    width: 64px; height: 64px; object-fit: cover;
                    flex-shrink: 0;
                    border-radius: 0;
                    transition: transform .4s ease;
                    display: block;
                }
                .pc2-pill:hover .pc2-pill__img,
                .pc2-pill--active .pc2-pill__img { transform: scale(1.08); }
                .pc2-pill__body {
                    padding: 12px 18px 12px 0;
                    display: flex; flex-direction: column; gap: 2px;
                }
                .pc2-pill__code {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: .16em; text-transform: uppercase;
                    color: var(--ac); opacity: .8;
                }
                .pc2-pill--active .pc2-pill__code { opacity: 1; }
                .pc2-pill__name {
                    font-size: 13px; font-weight: 800;
                    color: rgba(255,255,255,.7);
                    white-space: nowrap;
                    letter-spacing: -.01em;
                }
                .pc2-pill--active .pc2-pill__name { color: #fff; }
                .pc2-pill__active-bar {
                    position: absolute; bottom: 0; left: 0;
                    height: 2.5px; width: 0;
                    background: var(--ac);
                    transition: width .35s cubic-bezier(.4,0,.2,1);
                    border-radius: 2px;
                }
                .pc2-pill--active .pc2-pill__active-bar { width: 100%; }

                /* ── DETAIL PANEL ─────────────────────────────────── */
                .pc2-panel {
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,.07);
                    background: rgba(255,255,255,.02);
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                @media (max-width: 860px) {
                    .pc2-panel { grid-template-columns: 1fr; }
                }

                /* Image side */
                .pc2-panel__img-side {
                    position: relative;
                    min-height: 400px;
                    overflow: hidden;
                }
                .pc2-panel__img {
                    position: absolute; inset: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform .7s ease;
                }
                .pc2-panel__img-side:hover .pc2-panel__img { transform: scale(1.04); }
                .pc2-panel__img-fade {
                    position: absolute; inset: 0;
                    background:
                        linear-gradient(to right, transparent 35%, rgba(2,13,22,.98) 100%),
                        linear-gradient(to top, rgba(2,13,22,.5) 0%, transparent 50%);
                }
                .pc2-panel__img-watermark {
                    position: absolute; bottom: 24px; left: 24px;
                    font-size: 52px; font-weight: 900;
                    color: rgba(255,255,255,.06);
                    letter-spacing: -.05em; line-height: 1;
                    pointer-events: none;
                    text-transform: uppercase;
                    user-select: none;
                }
                .pc2-panel__img-badge {
                    position: absolute; top: 24px; left: 24px;
                    font-size: 10px; font-weight: 800;
                    letter-spacing: .14em; text-transform: uppercase;
                    color: var(--ac);
                    background: rgba(2,13,22,.7);
                    border: 1px solid var(--ac);
                    padding: 4px 12px; border-radius: 100px;
                    backdrop-filter: blur(6px);
                }

                /* Info side */
                .pc2-panel__info {
                    padding: 44px 44px;
                    display: flex; flex-direction: column; gap: 14px;
                    justify-content: center;
                }
                @media (max-width: 768px) { .pc2-panel__info { padding: 32px 24px; } }

                .pc2-panel__badge {
                    display: inline-flex;
                    font-size: 10px; font-weight: 800;
                    letter-spacing: .12em; text-transform: uppercase;
                    padding: 5px 14px; border-radius: 100px;
                    align-self: flex-start;
                }
                .pc2-panel__title {
                    font-size: clamp(22px,2.8vw,36px);
                    font-weight: 900; color: #fff;
                    letter-spacing: -.03em; line-height: 1.1; margin: 0;
                }
                .pc2-panel__tagline {
                    font-size: 14px; font-weight: 500;
                    color: rgba(255,255,255,.45);
                    font-style: italic; margin: 0;
                    line-height: 1.6;
                }
                .pc2-panel__divider {
                    height: 3px; width: 56px;
                    border-radius: 2px;
                    flex-shrink: 0;
                }
                .pc2-panel__desc {
                    font-size: 14px; color: rgba(255,255,255,.6);
                    line-height: 1.85; margin: 0;
                }

                /* Specs */
                .pc2-specs__title {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: .28em; text-transform: uppercase;
                    color: rgba(255,255,255,.25);
                    margin: 0 0 12px;
                }
                .pc2-specs__grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
                @media (max-width: 480px) { .pc2-specs__grid { grid-template-columns: 1fr; } }

                .pc2-spec {
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.06);
                    border-radius: 12px;
                    padding: 12px 15px;
                    display: flex; flex-direction: column; gap: 4px;
                    transition: border-color .2s, background .2s;
                }
                .pc2-spec:hover {
                    border-color: var(--ac);
                    background: color-mix(in srgb, var(--ac) 6%, transparent);
                }
                .pc2-spec__label {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: .2em; text-transform: uppercase; color: var(--ac);
                }
                .pc2-spec__value {
                    font-size: 13px; font-weight: 600;
                    color: rgba(255,255,255,.78); line-height: 1.4;
                }

                /* Nav arrows for pills */
                .pc2-pills-wrap { display: flex; align-items: center; gap: 8px; }
                .pc2-arrow {
                    flex-shrink: 0;
                    width: 36px; height: 36px;
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,.09);
                    background: rgba(255,255,255,.03);
                    color: rgba(255,255,255,.5);
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; outline: none;
                    transition: all .2s;
                    font-size: 16px; line-height: 1;
                }
                .pc2-arrow:hover {
                    border-color: rgba(255,255,255,.2);
                    background: rgba(255,255,255,.07);
                    color:#fff;
                }

                /* Pill strip fills remaining space */
                .pc2-pills-scroll { flex: 1; overflow: hidden; }
                .pc2-pills-inner {
                    display: flex; gap: 10px;
                    overflow-x: auto; -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding-bottom: 4px;
                }
                .pc2-pills-inner::-webkit-scrollbar { display: none; }
            `}</style>

            {/* ── HEADER ─────────────────────────────────────────── */}
            <div className="pc2-inner">
                <div className="pc2-head">
                    {/* Left: title block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="pc2-eyebrow">
                            <span className="pc2-eyebrow__dot" />
                            <span className="pc2-eyebrow__text">Our Product Categories</span>
                        </div>
                        <h2 className="pc2-h2">
                            Scrap That Moves <span>Markets</span>
                        </h2>
                        <p className="pc2-sub">
                            Two major categories. Five products each. Fully verified, globally traded metal scrap — delivered with Powerbenz precision.
                        </p>
                    </motion.div>

                    {/* Right: category switcher */}
                    <motion.div
                        className="pc2-cats"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                className={`pc2-cat-btn ${activeCat === cat.key ? 'pc2-cat-btn--active' : ''}`}
                                style={{ '--cat-ac': cat.accentColor, '--cat-glow': cat.accentGlow }}
                                onClick={() => handleCatChange(cat.key)}
                            >
                                <span className="pc2-cat-btn__icon">{cat.icon}</span>
                                <span className="pc2-cat-btn__text">{cat.label}</span>
                                <span className="pc2-cat-btn__count">{cat.products.length}</span>
                                <div className="pc2-cat-btn__bar" />
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* ── PRODUCT PILL STRIP ─────────────────────────── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCat + '-pills'}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pc2-pills-wrap" ref={pillsRef}>
                            {/* Left arrow */}
                            <button
                                className="pc2-arrow"
                                onClick={() => {
                                    const el = pillsRef.current?.querySelector('.pc2-pills-inner');
                                    if (el) el.scrollBy({ left: -220, behavior: 'smooth' });
                                }}
                                aria-label="Scroll left"
                            >‹</button>

                            <div className="pc2-pills-scroll">
                                <div className="pc2-pills-inner">
                                    {currentCat.products.map((product, idx) => (
                                        <motion.button
                                            key={product.id}
                                            className={`pc2-pill ${activeProduct === product.id ? 'pc2-pill--active' : ''}`}
                                            style={{ '--ac': accent, '--ac-glow': currentCat.accentGlow }}
                                            onClick={() => setActiveProduct(product.id)}
                                            initial={{ opacity: 0, scale: 0.92 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <img src={product.image} alt={product.shortTitle} className="pc2-pill__img" />
                                            <div className="pc2-pill__body">
                                                <span className="pc2-pill__code">{product.code}</span>
                                                <span className="pc2-pill__name">{product.shortTitle}</span>
                                            </div>
                                            <div className="pc2-pill__active-bar" />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Right arrow */}
                            <button
                                className="pc2-arrow"
                                onClick={() => {
                                    const el = pillsRef.current?.querySelector('.pc2-pills-inner');
                                    if (el) el.scrollBy({ left: 220, behavior: 'smooth' });
                                }}
                                aria-label="Scroll right"
                            >›</button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* ── FULL-WIDTH DETAIL PANEL ──────────────────────── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProduct.id}
                        className="pc2-panel"
                        style={{ '--ac': accent, '--ac-glow': currentCat.accentGlow }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.38, ease: 'easeOut' }}
                    >
                        {/* Image side */}
                        <div className="pc2-panel__img-side">
                            <img src={currentProduct.image} alt={currentProduct.title} className="pc2-panel__img" />
                            <div className="pc2-panel__img-fade" />
                            <div className="pc2-panel__img-watermark">{currentProduct.code}</div>
                            <div className="pc2-panel__img-badge">{currentProduct.code}</div>
                        </div>

                        {/* Info side */}
                        <div className="pc2-panel__info">
                            <span
                                className="pc2-panel__badge"
                                style={{
                                    background: accent + '1F',
                                    color: accent,
                                    border: `1px solid ${accent}40`,
                                }}
                            >
                                {currentProduct.badge}
                            </span>

                            <h3 className="pc2-panel__title">{currentProduct.title}</h3>
                            <p className="pc2-panel__tagline">{currentProduct.tagline}</p>
                            <div className="pc2-panel__divider" style={{ background: accent }} />
                            <p className="pc2-panel__desc">{currentProduct.description}</p>

                            <div>
                                <p className="pc2-specs__title">Technical Specifications</p>
                                <div className="pc2-specs__grid">
                                    {currentProduct.specs.map((s, i) => (
                                        <SpecBadge key={i} label={s.label} value={s.value} accent={accent} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProductCategories;
