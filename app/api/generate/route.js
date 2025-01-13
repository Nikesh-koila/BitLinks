import clientPromise from "@/lib/mongodb";

export async function POST(request){
    const body=await request.json();
    const client=await clientPromise;

    const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
    if(!urlPattern.test(body.url)){
      return Response.json({success:false,error:true,"invalidUrl":true,message:"Enter a valid URL"});
    }

  const db=client.db('BitLinks');
  const collection=db.collection('url');

  const doc=await collection.findOne({"shortUrl":body.shortUrl})
  if(doc){
    return Response.json({success:false,error:true,message:"short URL text already exists"});
  }
  await collection.insertOne({
    "url":body.url,
    "shortUrl":body.shortUrl,
  })
    
return  Response.json({success:true,error:false,message:"Short URL generated successfully"})
}