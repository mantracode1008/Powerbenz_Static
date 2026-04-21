import React from 'react';

const ProductFilter = ({ filters, setFilters }) => {
    const categories = {
        type: ['Copper', 'Aluminium', 'Iron & Steel', 'Other'],
        grade: ['Premium', 'Industrial', 'Mixed', 'Heavy', 'Recycled'],
        form: ['Scrap', 'Wire', 'Sheets', 'Extrusion', 'Bulk'],
    };

    const handleFilterChange = (category, value) => {
        setFilters(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4">Filters</h3>

            {Object.entries(categories).map(([category, options]) => (
                <div key={category} className="mb-8 last:mb-0">
                    <h4 className="font-black text-white/40 uppercase text-[10px] mb-4 tracking-[0.2em]">
                        {category}
                    </h4>
                    <div className="space-y-2">
                        {options.map(option => (
                            <label key={option} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-orange-500 rounded border-white/20 focus:ring-orange-500"
                                    checked={filters[category]?.includes(option)}
                                    onChange={() => handleFilterChange(category, option)}
                                />
                                <span className="ml-3 text-white/50 group-hover:text-white transition-colors text-sm font-medium">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <button
                onClick={() => setFilters({ type: [], grade: [], form: [] })}
                className="w-full mt-4 py-2.5 text-xs font-black text-primary border border-primary/40 rounded-xl hover:bg-primary/10 transition-colors uppercase tracking-widest"
            >
                Clear All
            </button>
        </div>
    );
};

export default ProductFilter;
