import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = props => {
  return (
    <>
      <table className="table">
        <TableHeader columns={props.columns} />
        <TableBody data={props.data} columns={props.columns}/>
      </table>
    </>
  );
};

export default Table;
