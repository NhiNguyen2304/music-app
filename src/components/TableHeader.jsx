import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = ({ sortColumn, sortDirection, handleSort }) => {
  const columns = [
    { name: "Title", column: "title" },
    { name: "Singer", column: "subtitle" },
    { name: "Cover", column: "image.coverart" },
  ];

  return (
    <thead className="bg-black">
      <tr>
        {columns.map((col) => (
          <th
            key={col.column}
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
            onClick={() => handleSort(col.column)}
          >
            {col.name}
            {sortColumn === col.column && (
              <span className="ml-2">
                {sortDirection === "asc" ? (
                  <i className="">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </i>
                ) : (
                  <i className="">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </i>
                )}
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
