import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = ({items, columns, onSort, sortColumn}) => {
  return (
    <>
      <table className="table">
        <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
        <TableBody items={items} columns={columns}/>
      </table>
    </>
  );
};

export default Table;
