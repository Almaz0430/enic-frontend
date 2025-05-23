import React from 'react';

interface NewsFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  onPageChange: (page: number) => void;
  totalPages: number;
  currentPage: number;
}

interface FilterOptions {
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  searchQuery?: string;
}

export const NewsFilter: React.FC<NewsFilterProps> = ({
  onFilterChange,
  onPageChange,
  totalPages,
  currentPage
}) => {
  const [filters, setFilters] = React.useState<FilterOptions>({});

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="news-filter">
      <div className="filter-controls">
        <select
          onChange={(e) => handleFilterChange('category', e.target.value)}
          value={filters.category || ''}
        >
          <option value="">Все категории</option>
          <option value="news">Новости</option>
          <option value="events">События</option>
          <option value="announcements">Анонсы</option>
        </select>

        <input
          type="date"
          onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
          value={filters.dateFrom || ''}
        />

        <input
          type="date"
          onChange={(e) => handleFilterChange('dateTo', e.target.value)}
          value={filters.dateTo || ''}
        />

        <input
          type="text"
          placeholder="Поиск..."
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          value={filters.searchQuery || ''}
        />
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}; 