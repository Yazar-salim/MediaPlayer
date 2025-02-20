import commonAPI from "./commonAPI";

export const uploadVideo = async(requestData)=>{
  return await commonAPI("post","/videos",requestData)
}

export const showVideo = async()=>{
  return  await commonAPI("get","/videos"," ")
}

export const addHistory = async (videoDetails)=>{
  return await commonAPI("post","/history",videoDetails)
}

export const getAllHistory = async()=>{
  return await commonAPI("get","/history","")
}

export const deleteHistory =async(id)=>{
  return await commonAPI("delete",`/history/${id}`,{})
}

export const deleteVideo =async (id)=>{
  return await commonAPI("delete",`/videos/${id}`,{})
}

export const createCategory =async(categorydetails)=>{
  return await commonAPI("post",'/categories',categorydetails)
}

export const getCategory= async()=>{
  return await commonAPI("get",'/categories',"")
}


export const deleteCategories =async(id)=>{
  return await commonAPI("delete",`/categories/${id}`,{})
}

export const getSingleVideo = async(id)=>{
  return await commonAPI("get",`/videos/${id}`,"")
}