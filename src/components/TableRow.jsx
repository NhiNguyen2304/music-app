const TableRow = ({ item }) => {
    return (
      <tr className="hover:bg-gray-500">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.title}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.subtitle}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
          <img alt="track_img" src={item.images?.coverart} className="w-full h-full rounded-lg" />
        </td>
      </tr>
    );
  };
  
  export default TableRow;
  