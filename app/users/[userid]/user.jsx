import Image from "next/image";

 const User =({user})=>{
 let  img = user?.user.imageUrl 

  console.log("image url",user )
  return(
    <section className='m-4 py-4'>
      <div className="center">
    <div className="relative h-40 w-40 rounded-full">
      <Image src={img}  alt={user?.user.name} style={{objectFit:'cover'}} fill/>



    </div>
    <p>name : {user?.user.name}</p>
      </div>
    </section>
  )
}

export default User