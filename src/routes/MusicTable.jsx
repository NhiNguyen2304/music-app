import { useState } from "react";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import Pagination from "../components/TablePagination";
import { useGetTopCharts } from "../api/shazamApi";
import { Error, Loader } from "../components";

const MusicTable = () => {
  const { tracks, loading, error } = useGetTopCharts();
  const [sortColumn, setSortColumn] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  if (loading) return <Loader title="Loading Top charts..." />;

  if (error) return <Error />;

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortData = (data) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortData(tracks).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="flex flex-col">
      <h4 className="font-bold mb-4 text-white">Full Trending Charts</h4>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="rounded-lg overflow-hidden dark:border-black">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <TableHeader
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                handleSort={handleSort}
              />
              <tbody className="bg-black divide-y">
                {currentItems.map((item) => (
                  <TableRow key={item.id} item={item} />
                ))}
              </tbody>
            </table>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={tracks.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-auto max-w-4xl">
    //   <h1 className="text-3xl font-bold mb-4 text-white">Full Top Charts</h1>
    //   <table className="min-w-full divide-y rounded-lg">
    //     <TableHeader sortColumn={sortColumn} sortDirection={sortDirection} handleSort={handleSort} />
    //     <tbody className="bg-white divide-y">
    //       {currentItems.map((item) => (
    //         <TableRow key={item.id} item={item} />
    //       ))}
    //     </tbody>
    //   </table>
    //   <Pagination
    //     itemsPerPage={itemsPerPage}
    //     totalItems={tracks.length}
    //     paginate={paginate}
    //     currentPage={currentPage}
    //   />
    // </div>
  );
};

export default MusicTable;
