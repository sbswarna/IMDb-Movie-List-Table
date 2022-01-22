const TableBody = ({ items, columns }) => {
  return (
    <>
      <tbody>
        {items.map(row => {
            return (
                <tr>
                {
                    columns.map(col => {
                        return col.content(row, col.path);
                    })
                }
                </tr>
            )
        })}
      </tbody>
    </>
  );
};

export default TableBody;
