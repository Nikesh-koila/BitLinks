import React from 'react'
import { redirect } from 'next/navigation'
import clientPromise from '@/lib/mongodb'

const Url = async({params}) => {
    const shortUrl=(await params).shortUrl
    const client=await clientPromise;
    const db=client.db('BitLinks');
const doc=await db.collection('url').findOne({"shortUrl":shortUrl})
if(doc){
   redirect(doc.url)
}
else{
    redirect(process.env.NEXT_PUBLIC_HOSTURL)
}
}

export default Url
