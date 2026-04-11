'use client';

import React, { useEffect, useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [query, setQuery] = useState(searchParams.get('query') || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const params = new URLSearchParams(window.location.search);
            if (query) {
                params.set('query', query);
            } else {
                params.delete('query');
            }
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [query, pathname, router]);

    return (
        <div className="library-search-wrapper">
            <div style={{ paddingLeft: "0.875rem", display: "flex", alignItems: "center" }}>
                <SearchIcon size={16} color="var(--dr-text-muted)" />
            </div>
            <input
                type="text"
                placeholder="Search books..."
                className="library-search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;