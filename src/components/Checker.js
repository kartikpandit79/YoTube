import React from 'react'

const Checker = () => {
const DragStart=() =>{
    console.log();
}

    return (
        <div>
            <table className=' m-5 border border-1-black'>
                <tr className='border border-1-black'>
                    {/* <th onDragStart={} onDragOver={} onDragEnter={} onDragEnd={} >Company</th> */}
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr className='border border-1-black'>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr className='border border-1-black'>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    )
}

export default Checker