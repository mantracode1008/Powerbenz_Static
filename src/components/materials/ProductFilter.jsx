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
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">Filters</h3>

            {Object.entries(categories).map(([category, options]) => (
                <div key={category} className="mb-8 last:mb-0">
                    <h4 className="font-bold text-secondary uppercase text-sm mb-4 tracking-wider">
                        {category}
                    </h4>
                    <div className="space-y-3">
                        {options.map(option => (
                            <label key={option} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary focus:ring-offset-0"
                                    checked={filters[category]?.includes(option)}
                                    onChange={() => handleFilterChange(category, option)}
                                />
                                <span className="ml-3 text-gray-600 group-hover:text-primary transition-colors">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <button
                onClick={() => setFilters({ type: [], grade: [], form: [] })}
                className="w-full mt-6 py-2 text-sm font-bold text-primary border border-primary rounded hover:bg-orange-50 transition-colors"
            >
                Clear All Filters
            </button>
        </div>
    );
};

export default ProductFilter;
