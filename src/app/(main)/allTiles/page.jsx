"use client"
import BannerT from '@/componet/alltiles/BannerT'
import Card from '@/componet/alltiles/Card'
import { getFechData } from '@/lib/data'
import React, { useEffect, useState } from 'react'

const AllTiles = async () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(()=>{
    const fetchData = async () => {
      const res = await getFechData();
      setData(res)
    }
    fetchData()
  }, [])

  const filteredData = filter === "all" ? data :

  const datas = await getFechData()
  
  return (
    <div>
      <BannerT></BannerT>
      <div className='container mx-auto flex gap-10'>
        <div className='w-1/3'>
          <div>
            <h1>Tiles Type</h1>
            <hr />
            <ul>
              <li className='flex items-center gap-3'>
                <input type="checkbox" class="checkbox validator"  title="Required" /> 
                <h1 className='font-semibold'>livingroom</h1>
              </li>
              <li className='flex items-center gap-3'>
                <input type="checkbox" class="checkbox validator"  title="Required" /> 
                <h1 className='font-semibold'>bathroom</h1>
              </li>
              <li className='flex items-center gap-3'>
                <input type="checkbox" class="checkbox validator"  title="Required" /> 
                <h1 className='font-semibold'>kitchen</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {datas.map(item => <Card key={item.id} item = {item}>{item.title}</Card>)}
      </div>
      </div>
    </div>
  )
}

export default AllTiles
