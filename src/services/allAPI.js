import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//api to upload video

export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//api to get all video

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//add watch history

export const addToHistory = async(videoDetials)=>{
    return await commonAPI("POST",`${serverURL}/history`,videoDetials)
}

//get data from history history

export const getALLHistory = async()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")
}

//api to delete a history

export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category

export const addToCategory = async(catBody)=>{
    return await commonAPI("POST",`${serverURL}/category`,catBody)
}

//api to get category

export const getALLCategory = async()=>{
    return await commonAPI("GET",`${serverURL}/category`,"")
}

//api to delete a Category

export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a video

export const getaVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update video to the category

export const updateCategory = async(id , body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}

//api to remove a video from the category

/* export const removeAVideoFromCat = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
} */