"use client"
import BannerT from '@/componet/alltiles/BannerT'
import Card from '@/componet/alltiles/Card'
import { getFechData } from '@/lib/data'
import React, { useEffect, useState } from 'react'

const AllTiles =  () => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    const fetchData = async () => {
      const res = await getFechData();
      setData(res)
    }
    fetchData()
  }, [])

  const handleCheckbox = (room) => {
    if(selected.includes(room)){
      setSelected(selected.filter(item => item !== room))
    } else {
      setSelected([...selected, room])
    }
  }
  const filteredData = data && data.filter(item => { 
    const searchFilter = selected.length === 0 || selected.includes(item.roomType)
    const mathSearch = item.title.toLowerCase().includes(search.toLowerCase())
    return searchFilter && mathSearch
  })
  return (
    <div>
      <BannerT></BannerT>
      <div className='container w-11/12 mx-auto flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-1/3'>
          <div className='border border-gray-200 px-10 lg:px-5 xl:px-10 flex flex-col gap-7 py-5 my-5'>
            <div className='flex gap-2 items-center justify-between'>
              <h1>Tiles Type</h1>
              <div>
                <input
              type="text"
              placeholder="Search tiles..."
              className='border w-full border-gray-300 px-4 py-2 '
              onChange={(e) => setSearch(e.target.value)}
            />
              </div>
            </div>
            <hr className='border-gray-200'/>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3'>
                <input 
                type="checkbox" 
                className="checkbox "  
                title="Required"
                checked={selected.includes("livingroom")} 
                onChange={()=> handleCheckbox("livingroom")}
                /> 
                <h1 className='font-semibold text-gray-600'>livingroom</h1>
              </li>
              <li className='flex items-center gap-3'>
                <input 
                type="checkbox" 
                className="checkbox "  
                title="Required" 
                checked={selected.includes("bathroom")}
                onChange={()=>handleCheckbox("bathroom")}
                /> 
                <h1 className='font-semibold text-gray-600'>bathroom</h1>
              </li>
              <li className='flex items-center gap-3'>
                <input 
                type="checkbox" 
                className="checkbox "  
                title="Required"
                checked={selected.includes("kitchen")} 
                onChange={()=> handleCheckbox("kitchen")}
                /> 
                <h1 className='font-semibold text-gray-600'>kitchen</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {filteredData.map(item => <Card key={item.id} item = {item}>{item.title}</Card>)}
      </div>
      </div>
    </div>
  )
}

export default AllTiles
