// import axios from "axios"

// export  async function addMessagee(values){
// const {data,error}= await axios.post("http://localhost:3000/api/v1/messages",values,{
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${localStorage.getItem("token")} `
     
//     },
//   })
// if ( error){
//     return error
// } else {
//     return data
// }
// }
import axios from "axios"

export async function addMessagee(values) {
    try {
      const formData = new FormData();
      // Add fields to FormData
      formData.append('title', values.title);
      formData.append('body', values.body);
      // If 'attachments' is a file, append it to FormData
      if (values.attachments instanceof File) {
        formData.append('attachments', values.attachments);
      }
  
      const response = await axios.post("http://localhost:3000/api/v1/messages", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
  
      return response.data; // Return data on success
    } catch (error) {
      console.error('Error:', error);
      return { error: error.message }; // Return error message
    }
  }