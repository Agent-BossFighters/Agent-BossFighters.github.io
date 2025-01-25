import { useRarities } from '../../hook/useRarities';

export function ReusableTable({ columns = [], data = [] }) {
  const { getRarityColor } = useRarities();

  return (
    <table className="table-auto w-full text-left text-white">
      {/* En-tête */}
      <thead className="bg-gray-800 text-sm">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`px-4 py-2 border-b border-gray-700 ${
                column.highlight ? "text-red-500" : column.lighting ? "text-green-600" : ""
              }`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      {/* Corps du tableau */}
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={`px-4 py-2 border-b-2 border-gray-500 bg-black text-sm ${
                  column.highlight ? "text-red-500" : column.lighting ? "text-green-600" : column.warning ? "text-yellow-400" : ""
                }`}
              >
                {/* Gestion du champ 'rarity' */}
                {column.accessor === "rarity" ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(
                      row[column.accessor]
                    )}`}
                  >
                    {row[column.accessor] || "Non défini"}
                  </span>
                ) : (
                  // Affichage générique des autres colonnes
                  <span className="text-md">{row[column.accessor] || "—"}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
} 