export function TypographyTable() {
  return (
    <div className="my-6 justify-center">
      <table className="w-15">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-4 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Measurements
            </th>
            <th className="border px-4 py-4 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Small
            </th>
            <th className="border px-4 py-4 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Medium
            </th>
            <th className="border px-4 py-4 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Large
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Round Waist Width
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              48
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              30
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              33
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Round Knee Width
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              16
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              16
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              17
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Outseam Length
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              40
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              41
            </td>
            <td className="border px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              41
            </td>
          </tr>
        </tbody>
      </table>
         
    </div>
  );
}
