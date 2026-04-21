import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── Images ────────────────────────────────────────────────────────────────────
import ferrousHmsImg     from '../assets/services/ferrous_hms_scrap.png';
import castIronImg       from '../assets/services/cast_iron_scrap.png';
import stainlessSteelImg from '../assets/services/stainless_steel_scrap.png';
import metalScrapImg     from '../assets/services/metal_scrap.png';
import scrapBuyingImg    from '../assets/services/scrap_buying.png';
import copperImg         from '../assets/services/nonferrous_copper_scrap.png';
import copperOldImg      from '../assets/services/copper_scrap.png';
import logisticsImg      from '../assets/services/logistics_support.png';
import pricingImg        from '../assets/services/pricing_finance.png';
import qualityImg        from '../assets/services/quality_inspection.png';
import zincImg           from '../assets/services/zinc_scrap.png';
import alCastingImg      from '../assets/services/aluminium_casting.png';

// ── Data ──────────────────────────────────────────────────────────────────────
const CATEGORIES = [
    {
        key: 'ferrous',
        label: 'Ferrous Scrap',
        sub: 'Iron & Steel Alloys',
        accent: '#E8590C',
        glow: 'rgba(232,89,12,0.3)',
        count: 5,
        products: [
            {
                id: 'hms', code: 'HMS-1&2', title: 'Heavy Melting Scrap', shortTitle: 'HMS 1&2',
                badge: 'Most Traded', image: ferrousHmsImg,
                tagline: 'The backbone of global steel production',
                description: 'Heavy Melting Scrap (HMS 1 & HMS 2) is the most traded category of ferrous scrap worldwide. Powerbenz supplies high-grade HMS directly sourced from industrial dismantling, demolition projects, and steel-intensive manufacturing. Our HMS lots are rigorously sorted, shredded, and baled to meet international export standards — ensuring consistent quality across every shipment.',
                specs: [
                    { label: 'Thickness',    value: '≥ 6mm (HMS1) / 3–6mm (HMS2)' },
                    { label: 'Origin',       value: 'Industrial & Demolition' },
                    { label: 'Form',         value: 'Loose / Baled / Shredded' },
                    { label: 'Applications', value: 'Electric Arc Furnaces, BOF Steelmaking' },
                ],
            },
            {
                id: 'cast-iron', code: 'CI-SC', title: 'Cast Iron Scrap', shortTitle: 'Cast Iron',
                badge: 'High Density', image: castIronImg,
                tagline: 'Dense, reliable, and always in demand',
                description: 'Cast iron scrap sourced by Powerbenz includes engine blocks, industrial machinery parts, pipes, and heavy casting offcuts from manufacturing. Known for its high carbon content and density, cast iron scrap is a critical input for foundries and steel mills requiring consistent melt chemistry.',
                specs: [
                    { label: 'Carbon Content', value: '2.5% – 4%' },
                    { label: 'Form',           value: 'Loose Pieces / Crushed' },
                    { label: 'Source',         value: 'Auto Parts, Foundry Rejects, Pipes' },
                    { label: 'Applications',   value: 'Foundries, Pig Iron Production' },
                ],
            },
            {
                id: 'stainless', code: 'SS-SC', title: 'Stainless Steel Scrap', shortTitle: 'Stainless Steel',
                badge: 'High Value', image: stainlessSteelImg,
                tagline: 'Corrosion-resistant, high-purity recycling',
                description: 'Powerbenz handles a wide range of stainless steel scrap grades — 201, 304, 316, and 430 — sourced from pharmaceutical manufacturing, food processing, and architectural projects. Stainless steel scrap commands premium value due to its nickel, chromium, and molybdenum content.',
                specs: [
                    { label: 'Grades',      value: '201, 304, 316, 316L, 430' },
                    { label: 'Form',        value: 'Turnings / Solids / Mixed' },
                    { label: 'Purity',      value: 'Alloy-tested, low impurity' },
                    { label: 'Applications', value: 'Stainless Remelting, Specialty Alloys' },
                ],
            },
            {
                id: 'shredded', code: 'SH-SC', title: 'Shredded Scrap', shortTitle: 'Shredded',
                badge: 'Ready-to-Melt', image: metalScrapImg,
                tagline: 'Uniformly processed, immediately furnace-ready',
                description: 'Our shredded scrap is machine-processed from automobiles, white goods, and light fabrication waste. The shredding process removes non-metallic elements and separates ferrous from non-ferrous material, producing a clean, dense metallic product.',
                specs: [
                    { label: 'Bulk Density', value: '0.8 – 1.1 T/m³' },
                    { label: 'Source',       value: 'Auto Shredding, Appliance Wrecking' },
                    { label: 'Purity',       value: '≥ 96% Metallic Iron' },
                    { label: 'Applications', value: 'EAF Steelmaking, Rolling Mills' },
                ],
            },
            {
                id: 'ms-turnings', code: 'MS-TR', title: 'MS Turnings & Borings', shortTitle: 'MS Turnings',
                badge: 'Machining Grade', image: scrapBuyingImg,
                tagline: 'Precision machining waste, recovered efficiently',
                description: 'Mild steel turnings, borings, and swarf from CNC workshops, automobile manufacturing, and precision engineering are safely collected, degreased, and consolidated. Available in both loose and briquetted form for ease of melting.',
                specs: [
                    { label: 'Form',        value: 'Loose Turnings / Briquettes' },
                    { label: 'Oil Content', value: 'Degreased (Low Residual)' },
                    { label: 'Source',      value: 'CNC Workshops, Engineering Units' },
                    { label: 'Applications', value: 'EAF Melting, Sponge Iron Plants' },
                ],
            },
        ],
    },
    {
        key: 'nonferrous',
        label: 'Non-Ferrous Scrap',
        sub: 'Copper, Aluminium & Specialty',
        accent: '#F5A623',
        glow: 'rgba(245,166,35,0.3)',
        count: 7,
        products: [
            {
                id: 'copper', code: 'CU-SC', title: 'Copper Scrap', shortTitle: 'Copper',
                badge: 'Top Commodity', image: copperImg,
                tagline: "The world's most recycled non-ferrous metal",
                description: "Powerbenz is a trusted supplier of high-grade copper scrap across all international categories — Birch/Cliff #1, Candy #2, Millberry, and mixed copper. Sourced from electrical infrastructure, industrial cable stripping, plumbing, and manufacturing waste.",
                specs: [
                    { label: 'Grades',       value: 'Birch/Cliff #1, Candy #2, Millberry' },
                    { label: 'Form',         value: 'Wire / Pipe / Busbar / Mixed' },
                    { label: 'Purity',       value: '95% – 99.9% Cu' },
                    { label: 'Applications', value: 'Copper Refining, Wire Rod, Casting' },
                ],
            },
            {
                id: 'copper-wire', code: 'CW-SC', title: 'Copper Wire Scrap', shortTitle: 'Copper Wire',
                badge: 'High Purity', image: copperOldImg,
                tagline: 'Stripped copper wire for maximum melt yield',
                description: 'Our copper wire scrap includes clean stripped wire, insulated copper cable (ICW), and unalloyed copper windings. Manages both small lots from electronics dismantling and large volumes from power grid upgrades.',
                specs: [
                    { label: 'Types',         value: 'ICW (Insulated), Stripped, Windings' },
                    { label: 'Recovery Rate', value: '55% – 99% Cu Equivalent' },
                    { label: 'Source',        value: 'Power Lines, Motors, Electronics' },
                    { label: 'Applications',  value: 'Copper Smelting, Refinery Feed' },
                ],
            },
            {
                id: 'aluminum', code: 'AL-SC', title: 'Aluminium Scrap', shortTitle: 'Aluminium',
                badge: 'Lightweight Value', image: logisticsImg,
                tagline: 'Versatile, lightweight, globally sought-after',
                description: 'From 6061 T6 extrusions to UBC (used beverage cans) and aluminium die-cast parts. Sourced from automotive manufacturing, aerospace offcuts, construction demolition, and consumer electronics dismantling.',
                specs: [
                    { label: 'Grades',      value: '1xxx, 2xxx, 6xxx, UBC' },
                    { label: 'Form',        value: 'Extrusions / Sheets / Castings / UBC' },
                    { label: 'Fe Content',  value: '< 0.5% (Clean Grade)' },
                    { label: 'Applications', value: 'Secondary Aluminium Smelting, Die-Casting' },
                ],
            },
            {
                id: 'brass', code: 'BR-SC', title: 'Brass Scrap', shortTitle: 'Brass',
                badge: 'Premium Alloy', image: qualityImg,
                tagline: 'Rich copper-zinc alloy with excellent recovery',
                description: 'Brass scrap includes honey brass, yellow brass, red brass, and mixed brass from plumbing, valve manufacturing, and precision components. The copper-to-zinc ratio is measured and disclosed for every lot.',
                specs: [
                    { label: 'Types',       value: 'Honey, Yellow, Red, Mixed Brass' },
                    { label: 'Cu:Zn Ratio', value: 'Disclosed per lot' },
                    { label: 'Form',        value: 'Solids / Turnings / Mixed' },
                    { label: 'Applications', value: 'Brass Ingot Casting, Foundry' },
                ],
            },
            {
                id: 'lead', code: 'PB-SC', title: 'Lead Scrap', shortTitle: 'Lead',
                badge: 'Battery Grade', image: pricingImg,
                tagline: 'Battery recovery and industrial lead recycling',
                description: 'Powerbenz sources lead scrap from spent battery plates, cable sheathing, and industrial lead components. Handled in compliance with environmental regulations and available in both small lot and bulk volume.',
                specs: [
                    { label: 'Types',       value: 'Battery Plates, Cable Lead, Soft Lead' },
                    { label: 'Purity',      value: '95% – 99.9% Pb' },
                    { label: 'Form',        value: 'Drained Batteries / Blocks / Scrap' },
                    { label: 'Applications', value: 'Secondary Lead Smelting, Battery Production' },
                ],
            },
            {
                id: 'zinc', code: 'ZN-SC', title: 'Zinc Scrap', shortTitle: 'Zinc',
                badge: 'Industrial Grade', image: zincImg,
                tagline: 'Versatile industrial metal with strong global demand',
                description: 'Powerbenz supplies zinc scrap from galvanizing processes, die-casting rejects, and industrial manufacturing waste. Zinc is critical for galvanizing steel and for die-casting alloys. Each lot is assessed for zinc content and contamination levels before dispatch to international smelters.',
                specs: [
                    { label: 'Types',       value: 'Galvanizing Ash, Die-Cast, Mixed Zinc' },
                    { label: 'Purity',      value: '90% – 99.5% Zn' },
                    { label: 'Form',        value: 'Blocks / Dross / Mixed Solids' },
                    { label: 'Applications', value: 'Zinc Smelting, Galvanizing, Alloys' },
                ],
            },
            {
                id: 'al-casting', code: 'AL-CT', title: 'Aluminium Casting', shortTitle: 'Al Casting',
                badge: 'Die-Cast Grade', image: alCastingImg,
                tagline: 'Premium die-cast aluminium for secondary smelting',
                description: 'Aluminium casting scrap includes engine blocks, cylinder heads, gear housings, and die-cast automotive components. Powerbenz segregates casting alloys by series (A380, A360, ADC12) to ensure maximum recovery efficiency for secondary aluminium smelters and foundries.',
                specs: [
                    { label: 'Alloys',      value: 'A380, A360, ADC12, LM24' },
                    { label: 'Form',        value: 'Engine Blocks / Gear Parts / Mixed' },
                    { label: 'Si Content',  value: '7% – 12% (as-cast)' },
                    { label: 'Applications', value: 'Secondary Al Smelting, Foundry Feed' },
                ],
            },
        ],
    },
];

// ── Ambient particle field ────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur: Math.random() * 12 + 8,
    delay: Math.random() * 6,
}));

// ── Main Page ─────────────────────────────────────────────────────────────────
const Products = () => {
    const [activeCat, setActiveCat]         = useState('ferrous');
    const [activeProduct, setActiveProduct] = useState(CATEGORIES[0].products[0].id);
    const [heroVisible, setHeroVisible]     = useState(false);
    const heroRef = useRef(null);

    const cat     = CATEGORIES.find(c => c.key === activeCat);
    const product = cat.products.find(p => p.id === activeProduct) || cat.products[0];

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const switchCat = (key) => {
        setActiveCat(key);
        setActiveProduct(CATEGORIES.find(c => c.key === key).products[0].id);
    };

    return (
        <div className="products-page">
            <style>{`
                /* ══ RESET & vgtyh ROOT ══════════════════════════════════════════════ */
                .products-page {
                    min-height: 100vh;
                    background: #06101A;
                    font-family: inherit;
                    color: #fff;
                    overflow-x: hidden;
                }

                /* ══ PARTICLES ════════════════════════════════════════════════ */
                .pp-particles {
                    position: fixed; inset: 0;
                    pointer-events: none; z-index: 0;
                    overflow: hidden;
                }
                .pp-particle {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(232,89,12,0.45);
                    filter: blur(0.5px);
                    animation: pp-float linear infinite;
                }
                @keyframes pp-float {
                    0%   { transform: translateY(0px) scale(1);   opacity: 0; }
                    10%  { opacity: 1; }
                    90%  { opacity: 0.6; }
                    100% { transform: translateY(-120vh) scale(0.5); opacity: 0; }
                }

                /* ══ HERO ══════════════════════════════════════════════════════ */
                .pp-hero {
                    position: relative; z-index: 1;
                    padding: 140px 0 0;
                    overflow: hidden;
                }
                .pp-hero__bg {
                    position: absolute; inset: 0;
                    background:
                        radial-gradient(ellipse 80% 60% at 60% 0%, rgba(232,89,12,0.08) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 40% at 10% 80%, rgba(1,22,39,0.9) 0%, transparent 70%);
                }
                .pp-hero__grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
                }
                .pp-hero__inner {
                    position: relative; z-index: 2;
                    max-width: 1400px; margin: 0 auto;
                    padding: 0 48px;
                }
                @media (max-width: 768px) { .pp-hero__inner { padding: 0 20px; } }

                .pp-hero__label {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: rgba(232,89,12,0.08);
                    border: 1px solid rgba(232,89,12,0.25);
                    border-radius: 100px;
                    padding: 6px 20px;
                    margin-bottom: 28px;
                }
                .pp-hero__label-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #E8590C;
                    animation: pp-pulse 2s ease-in-out infinite;
                }
                @keyframes pp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
                .pp-hero__label-text {
                    font-size: 10px; font-weight: 800;
                    letter-spacing: 0.38em; text-transform: uppercase;
                    color: #E8590C;
                }
                .pp-hero__title {
                    font-size: clamp(44px, 7vw, 88px);
                    font-weight: 900; line-height: 0.92;
                    letter-spacing: -0.04em;
                    color: #fff;
                    margin: 0 0 24px;
                }
                .pp-hero__title em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
                }
                .pp-hero__title span { color: #E8590C; }
                .pp-hero__sub {
                    font-size: 16px; font-weight: 400;
                    color: rgba(255,255,255,0.38);
                    max-width: 500px; line-height: 1.7; margin: 0;
                }

                /* Stats bar */
                .pp-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    margin-top: 52px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .pp-stat {
                    padding: 22px 32px;
                    border-right: 1px solid rgba(255,255,255,0.06);
                    display: flex; flex-direction: column; gap: 4px;
                    transition: background 0.3s;
                }
                .pp-stat:first-child { padding-left: 0; }
                .pp-stat:last-child { border-right: none; }
                .pp-stat:hover { background: rgba(255,255,255,0.02); }
                @media (max-width: 768px) {
                    .pp-stats { grid-template-columns: 1fr; border-bottom: none; gap: 0; margin-top: 36px; }
                    .pp-stat { padding: 16px 0; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
                }
                .pp-stat:last-child { border-right: none; }
                .pp-stat:hover { background: rgba(255,255,255,0.02); }
                .pp-stat__num {
                    font-size: 28px; font-weight: 900;
                    color: #E8590C; letter-spacing: -0.03em;
                    line-height: 1;
                }
                .pp-stat__label {
                    font-size: 10px; font-weight: 700;
                    letter-spacing: 0.22em; text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                }

                /* ══ MAIN CATALOG ══════════════════════════════════════════════ */
                .pp-catalog {
                    position: relative; z-index: 1;
                    max-width: 1400px; margin: 0 auto;
                    padding: 0 48px 80px;
                    display: grid;
                    grid-template-columns: 320px 1fr;
                    gap: 0;
                    min-height: 85vh;
                    align-items: start;
                }
                @media (max-width: 1100px) {
                    .pp-catalog { grid-template-columns: 1fr; padding: 0 20px 60px; }
                }

                /* ══ SIDEBAR ═══════════════════════════════════════════════════ */
                .pp-sidebar {
                    padding: 48px 0;
                    border-right: 1px solid rgba(255,255,255,0.06);
                    position: sticky; top: 90px;
                    align-self: start;
                }
                @media (max-width: 1100px) {
                    .pp-sidebar {
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.06);
                        padding: 32px 0;
                        position: static;
                    }
                }

                /* Category tabs */
                .pp-cat-tabs {
                    display: flex; gap: 8px;
                    margin-bottom: 36px;
                    padding-right: 24px;
                }
                .pp-cat-tab {
                    flex: 1;
                    padding: 12px 16px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.07);
                    background: rgba(255,255,255,0.02);
                    cursor: pointer; outline: none;
                    transition: all 0.3s ease;
                    display: flex; flex-direction: column; gap: 3px;
                    text-align: left;
                    position: relative; overflow: hidden;
                }
                .pp-cat-tab:hover { background: rgba(255,255,255,0.04); }
                .pp-cat-tab--active {
                    border-color: var(--ac);
                    background: color-mix(in srgb, var(--ac) 8%, transparent);
                    box-shadow: 0 0 24px -8px var(--glow);
                }
                .pp-cat-tab__glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top left, var(--glow), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s;
                }
                .pp-cat-tab--active .pp-cat-tab__glow { opacity: 1; }
                .pp-cat-tab__name {
                    font-size: 12px; font-weight: 800;
                    color: rgba(255,255,255,0.5);
                    text-transform: uppercase; letter-spacing: 0.08em;
                    position: relative; z-index: 1;
                }
                .pp-cat-tab--active .pp-cat-tab__name { color: #fff; }
                .pp-cat-tab__count {
                    font-size: 22px; font-weight: 900;
                    color: rgba(255,255,255,0.15);
                    letter-spacing: -0.03em;
                    position: relative; z-index: 1;
                    transition: color 0.3s;
                }
                .pp-cat-tab--active .pp-cat-tab__count { color: var(--ac); }

                /* Product list */
                .pp-list {
                    display: flex; flex-direction: column;
                    padding-right: 24px;
                    gap: 4px;
                }
                @media (max-width: 1100px) {
                    .pp-cat-tabs { padding-right: 0; }
                    .pp-list { padding-right: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                }
                @media (max-width: 768px) {
                    .pp-list { 
                        display: flex; flex-direction: row; 
                        overflow-x: auto; padding-bottom: 12px; 
                        scrollbar-width: none;
                    }
                    .pp-list::-webkit-scrollbar { display: none; }
                    .pp-list-item { flex: 0 0 calc(100vw - 64px); }
                }
                .pp-list-item {
                    display: flex; align-items: center; gap: 0;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.0);
                    cursor: pointer; outline: none;
                    transition: all 0.28s ease;
                    background: transparent;
                    position: relative;
                    text-align: left;
                }
                .pp-list-item:hover {
                    border-color: rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.02);
                }
                .pp-list-item--active {
                    border-color: var(--ac) !important;
                    background: color-mix(in srgb, var(--ac) 6%, transparent) !important;
                }
                .pp-list-item__img-wrap {
                    width: 70px; height: 70px;
                    flex-shrink: 0; overflow: hidden;
                    border-radius: 12px;
                    margin: 6px; position: relative;
                }
                .pp-list-item__img {
                    width: 100%; height: 100%; object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .pp-list-item:hover .pp-list-item__img,
                .pp-list-item--active .pp-list-item__img { transform: scale(1.1); }
                .pp-list-item__info {
                    flex: 1; padding: 12px 14px 12px 8px;
                    display: flex; flex-direction: column; gap: 2px;
                }
                .pp-list-item__code {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: 0.2em; text-transform: uppercase;
                    color: var(--ac); opacity: 0.7;
                }
                .pp-list-item--active .pp-list-item__code { opacity: 1; }
                .pp-list-item__title {
                    font-size: 13px; font-weight: 800;
                    color: rgba(255,255,255,0.55);
                    line-height: 1.2;
                    transition: color 0.25s;
                }
                .pp-list-item--active .pp-list-item__title,
                .pp-list-item:hover .pp-list-item__title { color: #fff; }
                .pp-list-item__badge {
                    font-size: 9px; font-weight: 700;
                    color: var(--ac);
                    opacity: 0;
                    transition: opacity 0.25s;
                    text-transform: uppercase; letter-spacing: 0.12em;
                }
                .pp-list-item--active .pp-list-item__badge { opacity: 0.8; }
                .pp-list-item__arrow {
                    width: 28px; height: 28px;
                    border-radius: 8px;
                    background: rgba(255,255,255,0.04);
                    flex-shrink: 0;
                    margin-right: 10px;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 12px; color: rgba(255,255,255,0.2);
                    transition: all 0.25s;
                }
                .pp-list-item--active .pp-list-item__arrow {
                    background: var(--ac);
                    color: #fff;
                }
                .pp-list-item__active-line {
                    position: absolute; left: 0; top: 0; bottom: 0;
                    width: 3px;
                    background: var(--ac);
                    border-radius: 0 2px 2px 0;
                    transform: scaleY(0);
                    transition: transform 0.25s;
                }
                .pp-list-item--active .pp-list-item__active-line { transform: scaleY(1); }

                /* ══ DETAIL PANEL ══════════════════════════════════════════════ */
                .pp-detail {
                    position: relative;
                    min-height: 800px;
                    display: flex; flex-direction: column;
                }
                .pp-detail__stage {
                    position: relative;
                    height: 520px;
                    overflow: hidden;
                    margin: 48px 0 0 32px;
                    border-radius: 28px;
                    border: 1px solid rgba(255,255,255,0.06);
                }
                @media (max-width: 1100px) {
                    .pp-detail__stage { margin: 24px 0 0; }
                }
                @media (max-width: 768px) {
                    .pp-detail__stage { height: 380px; border-radius: 20px; }
                }
                .pp-detail__img {
                    position: absolute; inset: 0;
                    width: 100%; height: 100%; object-fit: cover;
                    transition: transform 0.8s ease;
                }
                .pp-detail__overlay {
                    position: absolute; inset: 0;
                    background:
                        linear-gradient(to top, #06101A 0%, rgba(6,16,26,0.7) 40%, rgba(6,16,26,0.1) 70%, transparent 100%),
                        linear-gradient(to right, rgba(6,16,26,0.3) 0%, transparent 50%);
                }
                .pp-detail__watermark {
                    position: absolute; bottom: 24px; left: 36px;
                    font-size: 80px; font-weight: 900;
                    color: rgba(255,255,255,0.04);
                    letter-spacing: -0.06em; line-height: 1;
                    text-transform: uppercase; user-select: none;
                    pointer-events: none;
                }
                @media (max-width: 768px) {
                    .pp-detail__watermark { font-size: 48px; left: 20px; bottom: 82px; }
                }
                .pp-detail__floating-badge {
                    position: absolute; top: 28px; left: 28px;
                    display: flex; align-items: center; gap: 8px;
                    background: rgba(6,16,26,0.75);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--ac);
                    border-radius: 100px;
                    padding: 7px 16px;
                }
                @media (max-width: 768px) {
                    .pp-detail__floating-badge { top: 16px; left: 16px; padding: 5px 12px; }
                }
                .pp-detail__floating-dot {
                    width: 7px; height: 7px; border-radius: 50%;
                    background: var(--ac);
                    box-shadow: 0 0 8px var(--glow);
                    animation: pp-pulse 1.8s ease-in-out infinite;
                }
                .pp-detail__floating-text {
                    font-size: 10px; font-weight: 800;
                    letter-spacing: 0.18em; text-transform: uppercase;
                    color: var(--ac);
                }
                .pp-detail__corner-cta {
                    position: absolute; bottom: 28px; right: 28px;
                }
                @media (max-width: 768px) {
                    .pp-detail__corner-cta { bottom: 16px; right: 16px; left: 16px; }
                    .pp-detail__cta-btn { justify-content: center; width: 100%; }
                }
                .pp-detail__cta-btn {
                    display: flex; align-items: center; gap: 10px;
                    background: rgba(6,16,26,0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 14px;
                    padding: 12px 22px;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-decoration: none;
                }
                .pp-detail__cta-btn:hover {
                    background: var(--ac);
                    border-color: var(--ac);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px -8px var(--glow);
                }
                .pp-detail__cta-text {
                    font-size: 11px; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.18em;
                    color: #fff;
                }
                .pp-detail__cta-arrow {
                    font-size: 14px; color: rgba(255,255,255,0.5);
                    transition: transform 0.3s, color 0.3s;
                }
                .pp-detail__cta-btn:hover .pp-detail__cta-arrow {
                    transform: translateX(3px);
                    color: #fff;
                }

                /* Info block */
                .pp-detail__info {
                    margin: 0 0 0 32px;
                    padding: 36px 0 0;
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 32px;
                    align-items: start;
                }
                @media (max-width: 1100px) {
                    .pp-detail__info { margin: 0; grid-template-columns: 1fr; gap: 24px; padding-top: 24px; }
                }
                .pp-detail__title-block {}
                .pp-detail__badge-pill {
                    display: inline-flex; align-items: center;
                    gap: 6px;
                    font-size: 10px; font-weight: 800;
                    letter-spacing: 0.14em; text-transform: uppercase;
                    padding: 5px 14px; border-radius: 100px;
                    margin-bottom: 12px;
                }
                .pp-detail__title {
                    font-size: clamp(28px, 3.5vw, 46px);
                    font-weight: 900; color: #fff;
                    letter-spacing: -0.03em; line-height: 1;
                    margin: 0 0 8px;
                }
                .pp-detail__tagline {
                    font-size: 15px; font-weight: 400;
                    color: rgba(255,255,255,0.35);
                    font-style: italic; margin: 0 0 20px;
                }
                .pp-detail__divider {
                    height: 3px; width: 50px; border-radius: 2px;
                    margin-bottom: 20px;
                }
                .pp-detail__desc {
                    font-size: 14px; color: rgba(255,255,255,0.5);
                    line-height: 1.85; max-width: 580px; margin: 0;
                }

                /* Specs */
                .pp-detail__specs {
                    min-width: 280px;
                }
                @media (max-width: 1100px) {
                    .pp-detail__specs { min-width: unset; }
                }
                .pp-specs-title {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: 0.3em; text-transform: uppercase;
                    color: rgba(255,255,255,0.2);
                    margin: 0 0 14px;
                }
                .pp-specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
                @media (max-width: 1100px) {
                    .pp-specs-grid { grid-template-columns: repeat(4, 1fr); }
                }
                @media (max-width: 768px) {
                    .pp-specs-grid { grid-template-columns: 1fr 1fr; }
                }
                .pp-spec-card {
                    background: rgba(255,255,255,0.025);
                    border: 1px solid rgba(255,255,255,0.055);
                    border-radius: 14px;
                    padding: 14px 16px;
                    display: flex; flex-direction: column; gap: 5px;
                    transition: border-color 0.25s, background 0.25s;
                    cursor: default;
                }
                .pp-spec-card:hover {
                    border-color: var(--ac);
                    background: color-mix(in srgb, var(--ac) 6%, transparent);
                }
                .pp-spec-card__label {
                    font-size: 9px; font-weight: 800;
                    letter-spacing: 0.2em; text-transform: uppercase;
                    color: var(--ac);
                }
                .pp-spec-card__value {
                    font-size: 12px; font-weight: 600;
                    color: rgba(255,255,255,0.72);
                    line-height: 1.4;
                }

                /* ══ BOTTOM CTA STRIP ══════════════════════════════════════════ */
                .pp-cta-strip {
                    position: relative; z-index: 1;
                    background: linear-gradient(135deg, rgba(232,89,12,0.08) 0%, rgba(245,166,35,0.04) 100%);
                    border-top: 1px solid rgba(232,89,12,0.15);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    padding: 64px 0;
                    overflow: hidden;
                }
                .pp-cta-strip::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(232,89,12,0.06), transparent);
                }
                .pp-cta-strip__inner {
                    position: relative; z-index: 1;
                    max-width: 1400px; margin: 0 auto;
                    padding: 0 48px;
                    display: flex; align-items: center;
                    justify-content: space-between; gap: 32px;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .pp-cta-strip__inner { padding: 0 20px; flex-direction: column; text-align: center; }
                }
                .pp-cta-strip__text {
                    font-size: clamp(22px, 3vw, 36px);
                    font-weight: 900; color: #fff;
                    letter-spacing: -0.02em; line-height: 1.2;
                }
                .pp-cta-strip__text span { color: #E8590C; }
                .pp-cta-strip__sub {
                    font-size: 14px; color: rgba(255,255,255,0.35);
                    margin-top: 8px; font-weight: 400;
                }
                .pp-cta-btn {
                    display: inline-flex; align-items: center; gap: 12px;
                    background: #E8590C;
                    color: #fff;
                    border: none;
                    border-radius: 16px;
                    padding: 18px 36px;
                    font-size: 13px; font-weight: 800;
                    letter-spacing: 0.18em; text-transform: uppercase;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 12px 36px -10px rgba(232,89,12,0.5);
                    white-space: nowrap;
                }
                .pp-cta-btn:hover {
                    background: #ff6820;
                    transform: translateY(-3px);
                    box-shadow: 0 20px 48px -10px rgba(232,89,12,0.6);
                }
                .pp-cta-btn svg { transition: transform 0.3s; }
                .pp-cta-btn:hover svg { transform: translateX(4px); }
            `}</style>

            {/* ── Particles ──────────────────────────────────────────────────── */}
            <div className="pp-particles" aria-hidden="true">
                {PARTICLES.map(p => (
                    <div
                        key={p.id}
                        className="pp-particle"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y + 20}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDuration: `${p.dur}s`,
                            animationDelay: `${p.delay}s`,
                            background: p.id % 3 === 0
                                ? 'rgba(232,89,12,0.5)'
                                : p.id % 3 === 1
                                    ? 'rgba(255,255,255,0.15)'
                                    : 'rgba(245,166,35,0.4)',
                        }}
                    />
                ))}
            </div>

            {/* ── Hero ───────────────────────────────────────────────────────── */}
            <section className="pp-hero" ref={heroRef}>
                <div className="pp-hero__bg" />
                <div className="pp-hero__grid" />
                <div className="pp-hero__inner">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 40 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="pp-hero__label">
                            <span className="pp-hero__label-dot" />
                            <span className="pp-hero__label-text">Global Scrap Catalog</span>
                        </div>
                        <h1 className="pp-hero__title">
                            Metals That<br />
                            <span>Move</span> <em>Markets</em>
                        </h1>
                        <p className="pp-hero__sub">
                            Two major categories. Ten verified products. Globally traded metal scrap — delivered with Powerbenz precision and full traceability.
                        </p>
                    </motion.div>

                    <motion.div
                        className="pp-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: heroVisible ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        {[
                            { num: '10+', label: 'Product Grades' },
                            { num: '22+', label: 'Years Experience' },
                            { num: '99%', label: 'Quality Verified' },
                        ].map((s, i) => (
                            <div key={i} className="pp-stat">
                                <div className="pp-stat__num">{s.num}</div>
                                <div className="pp-stat__label">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Catalog ────────────────────────────────────────────────────── */}
            <div className="pp-catalog">
                {/* Sidebar */}
                <aside className="pp-sidebar">
                    <div
                        className="pp-cat-tabs"
                        style={{ '--ac': cat.accent, '--glow': cat.glow }}
                    >
                        {CATEGORIES.map(c => (
                            <button
                                key={c.key}
                                className={`pp-cat-tab ${activeCat === c.key ? 'pp-cat-tab--active' : ''}`}
                                style={{ '--ac': c.accent, '--glow': c.glow }}
                                onClick={() => switchCat(c.key)}
                            >
                                <div className="pp-cat-tab__glow" />
                                <div className="pp-cat-tab__name">{c.label}</div>
                                <div className="pp-cat-tab__count">{c.count}</div>
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCat + '-list'}
                            className="pp-list"
                            style={{ '--ac': cat.accent, '--glow': cat.glow }}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 12 }}
                            transition={{ duration: 0.28 }}
                        >
                            {cat.products.map((p, idx) => (
                                <motion.button
                                    key={p.id}
                                    className={`pp-list-item ${activeProduct === p.id ? 'pp-list-item--active' : ''}`}
                                    style={{ '--ac': cat.accent }}
                                    onClick={() => setActiveProduct(p.id)}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="pp-list-item__active-line" />
                                    <div className="pp-list-item__img-wrap">
                                        <img src={p.image} alt={p.shortTitle} className="pp-list-item__img" loading="lazy" />
                                    </div>
                                    <div className="pp-list-item__info">
                                        <span className="pp-list-item__code">{p.code}</span>
                                        <span className="pp-list-item__title">{p.title}</span>
                                        <span className="pp-list-item__badge">{p.badge}</span>
                                    </div>
                                    <div className="pp-list-item__arrow">›</div>
                                </motion.button>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </aside>

                {/* Detail Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={product.id}
                        className="pp-detail"
                        style={{ '--ac': cat.accent, '--glow': cat.glow }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Stage image */}
                        <div className="pp-detail__stage">
                            {/* Blurred placeholder behind main image */}
                            <img
                                src={product.image}
                                alt=""
                                aria-hidden="true"
                                style={{
                                    position: 'absolute', inset: 0,
                                    width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    filter: 'blur(24px) brightness(0.25)',
                                    transform: 'scale(1.1)',
                                    zIndex: 0,
                                }}
                            />
                            {/* Main image — always visible */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="pp-detail__img"
                                style={{ zIndex: 1 }}
                            />
                            <div className="pp-detail__overlay" style={{ zIndex: 2 }} />
                            <div className="pp-detail__watermark" style={{ zIndex: 3 }}>{product.code}</div>
                            <div className="pp-detail__floating-badge" style={{ zIndex: 4 }}>
                                <span className="pp-detail__floating-dot" />
                                <span className="pp-detail__floating-text">{product.badge}</span>
                            </div>
                            <div className="pp-detail__corner-cta" style={{ zIndex: 4 }}>
                                <Link to="/contact" className="pp-detail__cta-btn">
                                    <span className="pp-detail__cta-text">Request Quote</span>
                                    <span className="pp-detail__cta-arrow">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Info + Specs */}
                        <div className="pp-detail__info">
                            <div className="pp-detail__title-block">
                                <div
                                    className="pp-detail__badge-pill"
                                    style={{
                                        background: cat.accent + '18',
                                        color: cat.accent,
                                        border: `1px solid ${cat.accent}35`,
                                    }}
                                >
                                    <span style={{
                                        display: 'inline-block',
                                        width: 6, height: 6,
                                        borderRadius: '50%',
                                        background: cat.accent,
                                    }} />
                                    {product.badge}
                                </div>
                                <h2 className="pp-detail__title">{product.title}</h2>
                                <p className="pp-detail__tagline">{product.tagline}</p>
                                <div className="pp-detail__divider" style={{ background: cat.accent }} />
                                <p className="pp-detail__desc">{product.description}</p>
                            </div>

                            <div className="pp-detail__specs">
                                <p className="pp-specs-title">Technical Specifications</p>
                                <div className="pp-specs-grid">
                                    {product.specs.map((s, i) => (
                                        <motion.div
                                            key={i}
                                            className="pp-spec-card"
                                            initial={{ opacity: 0, scale: 0.92 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.07, duration: 0.28 }}
                                        >
                                            <span className="pp-spec-card__label">{s.label}</span>
                                            <span className="pp-spec-card__value">{s.value}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── CTA Strip ──────────────────────────────────────────────────── */}
            <section className="pp-cta-strip">
                <div className="pp-cta-strip__inner">
                    <div>
                        <div className="pp-cta-strip__text">
                            Ready to source<br /><span>verified scrap?</span>
                        </div>
                        <div className="pp-cta-strip__sub">
                            Talk to our team. Get a quote today.
                        </div>
                    </div>
                    <Link to="/contact" className="pp-cta-btn">
                        Get A Quote
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Products;
