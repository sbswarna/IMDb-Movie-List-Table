const TableHeader = props => {
  return (
    <>
      <thead>
        <tr>
          {props.columns.map((col) => {
            return (
              <>
                <th>{col.label}</th>
              </>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
