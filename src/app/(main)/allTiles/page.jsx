import BannerT from '@/componet/alltiles/BannerT'
import Card from '@/componet/alltiles/Card'
import { getFechData } from '@/lib/data'
import React from 'react'

const page = async () => {
  const data = await getFechData()
  
  return (
    <div>
      <BannerT></BannerT>
      <div>
        {data.map(item => <Card key={item.id} item = {item}>{item.title}</Card>)}
      </div>
    </div>
  )
}

export default page
