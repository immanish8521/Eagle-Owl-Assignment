import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useTable } from 'react-table'




function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="px-6 py-4 whitespace-nowrap">
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const RecipieList = () => {
const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
            accessor: 'name',
        
      },
       {
        Header: 'Last Updated',
            accessor: "last_updated['date']",
        
      },
      {
        Header: 'COGS%',
            accessor: 'cogs',
        
      },
      {
        Header:  "COST PRICE(')",
            accessor: 'cost_price',
        
      },
      {
        Header: 'SALE PRICE',
            accessor: 'current_sale_price',
        
      },
      {
        Header: 'GROSS MARGIN',
            accessor: 'gross_margin',
        
    },
       {
        Header: 'TAGS/ACTION',
            accessor: 'firstName',
        
      },
      
    ],
    []
  )

  const prepDataForTable = () => {
    let obj = {
      name: '',
      last_update: '',
      cogs: '',
      cost_price: '',
      current_sale_price: '',
      gross_margin: '',
      tags: ''

    }
    
    let dataArr = []


    recipieData?.results.forEach(item => {

      let objj = {
        name: item.name,
        last_update: '',
        cosgs: item.cogs,
        cost_price: item.cost_price,
        current_sale_price: item.current_sale_price,
        gross_margin: item.gross_margin,
        tags:''
      }
      dataArr.push(objj)
    })

    return dataArr;
  }

  const [recipieData, setRecipieData] = useState()
  
  const data = React.useMemo(() => prepDataForTable(), [])

  console.log(data)

    useEffect(() => {
        axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=2`).then(res => {
            setRecipieData(res.data)
        }).catch(err => console.log(err))
    }, [])
  
  if (!recipieData) {
    return null;
  }

  return (
    <div>
    <Table columns={columns} data={data} />
    </div>
  
    // <div className="flex flex-col">
    //   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    //       <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    //         <table className="min-w-full divide-y divide-gray-200">
    //           <thead className="bg-blue-300">
    //             <tr>

    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                   <input type="checkbox" className="ml-14 mr-2 form-checkbox"></input>
    //                   {/* <span class="ml-2">Name</span> */}
    //                 Name
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 Last Updated
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 COGS%
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 COST PRICE(')
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 SALE PRICE
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 GROSS MARGIN
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
    //                 TAGS/ACTION
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="bg-white divide-y divide-gray-200">
    //             <tr>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="flex-shrink-0 h-10 w-10">
    //                   </div>
    //                   <div className="ml-4">
    //                       <div className="text-sm font-medium text-gray-900">
    //                         <input type="checkbox" className="mr-2 form-checkbox"></input>
    //                       Ambur Biryani
    //                     </div>
                       
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="text-sm text-gray-900">Feb 12 2021</div>
                    
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                   20%
                   
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                 200.00
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                 1000.00
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                 80%
    //               </td>
                  
    //                <td className="px-6 py-4 whitespace-nowrap">
    //                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
    //                   Indian Ma...
    //                 </span>
    //                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
    //                   Indian Ma...
    //                 </span>
    //               </td>
    //             </tr>
    
    //             {/* More items... */}
    //           </tbody>
    //           </table>
              
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  )
}

export default RecipieList
