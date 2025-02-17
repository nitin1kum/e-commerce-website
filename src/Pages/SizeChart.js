import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

const SizeChart = () => {
  return (
    <div>
        <BreadCrumb name={'Size chart'}/>
        <div className='bg-white shadow-lg rounded-lg m-6 p-4 size-chart'>
            <table className='w-full Size-chart text-sm text-gray-600'>
                <tr >
                    <th>Size</th>
                    <th>Chest</th>
                    <th>Neck</th>
                    <th>Sleev</th>
                </tr>
                <tr>
                    <td className=' italic'>Small</td>
                    <td>36-38"</td>
                    <td>14-14.5"</td>
                    <td>32.5"</td>
                </tr>
                <tr>
                    <td className=' italic'>Medium</td>
                    <td>39-41"</td>
                    <td>15-15.5"</td>
                    <td>33.5</td>
                </tr>
                <tr>
                    <td className=' italic'>Large</td>
                    <td>42-44"</td>
                    <td>16-16.5"</td>
                    <td>34.5</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default SizeChart