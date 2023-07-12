function Garbage() {

  return (
    <svg className="mx-auto hover:bg-grainy" viewBox="0 0 24 24" width="28" height="28">
    <path fill="#ffffff" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
  </svg>
  );
}

export default function Table({isDragging, text}) {
  
    return (
        <div className="">
            <table className="table-auto" >
            <thead>
                <tr className="hover:cursor-pointer">
                    <td className="text-xl">Property 1 <Garbage/></td>
                    <td className="text-xl">Property 2 <Garbage/></td>
                    <td className="text-xl">Property 3<Garbage/></td>
                </tr>
            </thead>
            <tbody >
                <tr>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Rent"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Rent"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Rent"/>
                  </td>
                  </tr>
                  <tr>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Tax"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Tax"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Tax"/>
                  </td>
                  </tr>
                  <tr>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="HOA"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="HOA"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="HOA"/>
                  </td>
                  </tr>
                  <tr>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Price"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Price"/>
                  </td>
                  <td className="px-4 py-2">
                      <input className="border rounded p-1" type="text" placeholder="Price"/>
                  </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}