const Filter = ({ items, selectedGenre, onClickFilter }) => {
    return (
        <div className="col-lg-2">
            <ul className="list-group">
                {items.map((item) => {
                    return (
                        <>
                            <li
                                onClick={() => onClickFilter(item)}
                                className={
                                    selectedGenre === item
                                        ? "list-group-item active"
                                        : "list-group-item"
                                }
                            >
                                {item}
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Filter;
