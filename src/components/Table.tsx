import React from 'react';
/**
 * example table
 * @returns
 */
const Table = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2 px-4 dark:bg-zinc-900 bg-cinder-500 text-cinder-100 rounded-tl-md">
            campo1
          </th>
          <th className="py-2 px-4 dark:bg-zinc-900 bg-cinder-500 text-cinder-100">
            campo2
          </th>
          <th className="py-2 px-4 dark:bg-zinc-900 bg-cinder-500 text-cinder-100 rounded-tr-md">
            campo3
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4">Juan Pérez</td>
          <td className="py-2 px-4">25</td>
          <td className="py-2 px-4">juan@example.com</td>
        </tr>
        <tr>
          <td className="py-2 px-4">María López</td>
          <td className="py-2 px-4">30</td>
          <td className="py-2 px-4">maria@example.com</td>
        </tr>
        <tr>
          <td className="py-2 px-4">Pedro Gómez</td>
          <td className="py-2 px-4">28</td>
          <td className="py-2 px-4">pedro@example.com</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
