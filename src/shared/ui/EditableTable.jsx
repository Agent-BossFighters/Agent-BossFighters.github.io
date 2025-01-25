import { useState, useReducer } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useRarities } from '../../hook/useRarities';

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_NEW_ROW':
      return { ...state, newRow: action.payload };
    case 'SET_IS_EDITING':
      return { ...state, isEditing: action.payload };
    default:
      return state;
  }
};

export function EditableTable({ 
  columns, 
  data: initialData, 
  type,
  onAdd,
  onDelete,
  onEdit 
}) {
  const { rarities, getRarityColor } = useRarities();
  const [state, dispatch] = useReducer(tableReducer, {
    data: initialData,
    isEditing: null,
    newRow: {}
  });

  const handleAddRow = async () => {
    if (onAdd) {
      const success = await onAdd(state.newRow);
      if (success) {
        dispatch({ type: 'SET_DATA', payload: [...state.data, state.newRow] });
        dispatch({ type: 'SET_NEW_ROW', payload: {} });
      }
    }
  };

  const handleDeleteRow = async (rowIndex) => {
    if (onDelete) {
      const success = await onDelete(state.data[rowIndex]);
      if (success) {
        const updatedData = state.data.filter((_, index) => index !== rowIndex);
        dispatch({ type: 'SET_DATA', payload: updatedData });
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left text-white">
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
            <th className="px-4 py-2 border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-2 border-b-2 border-gray-500 bg-black text-white text-sm ${
                    column.className || ''
                  }`}
                >
                  {column.accessor === "rarity" ? (
                    <span className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(row[column.accessor])}`}>
                      {row[column.accessor]}
                    </span>
                  ) : (
                    <span className="text-white">{row[column.accessor]}</span>
                  )}
                </td>
              ))}
              <td className="px-4 py-2 border-b-2 border-gray-500 bg-black">
                <div className="flex gap-2">
                  <button onClick={() => dispatch({ type: 'SET_IS_EDITING', payload: rowIndex })} className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteRow(rowIndex)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {/* Nouvelle ligne pour l'ajout - avec hauteur réduite */}
          <tr className="bg-gray-800/50">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-1">
                {column.accessor === "rarity" ? (
                  <select
                    value={state.newRow[column.accessor] || ""}
                    onChange={(e) => dispatch({
                      type: 'SET_NEW_ROW',
                      payload: { ...state.newRow, [column.accessor]: e.target.value }
                    })}
                    className="w-full bg-black border border-gray-700 rounded p-1 text-white text-sm"
                  >
                    <option value="" className="text-gray-500">Select rarity...</option>
                    {rarities.map((rarity) => (
                      <option key={rarity.id} value={rarity.name} className="text-white">
                        {rarity.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={state.newRow[column.accessor] || ""}
                    onChange={(e) => dispatch({
                      type: 'SET_NEW_ROW',
                      payload: { ...state.newRow, [column.accessor]: e.target.value }
                    })}
                    placeholder={`Enter ${column.label.toLowerCase()}...`}
                    className="w-full bg-black border border-gray-700 rounded p-1 text-white text-sm placeholder:text-gray-500 placeholder:text-xs"
                  />
                )}
              </td>
            ))}
            <td className="px-4 py-1">
              <button onClick={handleAddRow} className="text-green-500 hover:text-green-700">
                <FaPlus className="text-lg" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 