type TableHeaderProps = {
    headers: string[];
  };
  
  const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
    <tr className="bg-panel h-[50px] bg-[#ff42001a]">
      {headers.map((header) => (
        <th key={header} className="text-white text-left p-2">{header}</th>
      ))}
    </tr>
  );
  
export default TableHeader;
  