// src/components/table/TableRow.tsx

type ColumnConfig = {
  key: string;
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
};

type TableRowProps = {
  data: Record<string, any>;
  columns?: ColumnConfig[]; 
};

const defaultColumns: ColumnConfig[] = [
  { key: 'id' },
  { key: 'name' },
  { key: 'partner' },
  { key: 'broker' },
  { 
    key: 'country',
    render: (value) => value.map((item: { label: string }) => item.label).join(', ')
  },
  { 
    key: 'lang',
    render: (value) => value.map((item: { label: string }) => item.label).join(', ')
  },
  { key: 'cap' },
  {
    key: 'lead_sender_limited',
    render: (value, row) => {
      if (value === true) {
        const days = row['lead_sender_limited_days'];
        return Array.isArray(days) && days.length > 0 
          ? `True (${days.join(', ')})` 
          : 'True';
      }
      return 'False';
    }
  },
  { key: 'status' },
  { key: 'edit' },
];

const TableRow = ({ 
  data, 
  columns = defaultColumns 
}: TableRowProps) => {
  return (
    <tr className={""}>
      {columns.map((column) => (
        <td key={column.key} className="px-2 py-1">
          {column.render 
            ? column.render(data[column.key], data) 
            : (data[column.key] ?? '-')}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;