
import axios from "axios";


const API_BASE_URL = "https://fakestoreapi.com"; // Replace with your actual API URL

const apiService = {
    async  get(endpoint, params = {}) {
        try {
          const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
            params, 
          });
      
          return { status: true, result: response.data };
        } catch (error) {
          console.error("Error in GET request:", error);
          const errorMessage =
          error.response?.status === 401
            ?  error.response?.data : "Some error occurred"
          return {
            status: false,
            result: errorMessage
          };
        }
      },
      


  async post(endpoint, data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
        headers: { "Content-Type": "application/json" }
      })
  console.log("the post api response is",response)
      return { status: true, result: response.data }

    }
     catch (error) {
  
      const errorMessage =
        error.response?.status === 401
          ?  error.response?.data : "Some error occurred"
  
      console.log("Error message to be returned:", errorMessage); 
  
      return {
        status: false,
        result: errorMessage,
      };
    }
  },
  

  async delete(endpoint, params = {}) {
        try {
        const response = await axios.delete(`${API_BASE_URL}/${endpoint}`,{params,});
    
        return { status: true, result: response.data };
      } catch (error) {
        console.error("Error in delete request:", error);
        const errorMessage =
        error.response?.status === 401
          ?  error.response?.data : "Some error occurred"
        return {
          status: false,
          result: errorMessage
        };
      }
  },



  async update(endpoint, data) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data, {
        headers: { "Content-Type": "application/json" }
      });
      
      console.log("The update API response is", response);
      
      return { status: true, result: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.status === 401
          ? error.response?.data
          : "Some error occurred";
  
      console.log("Error message to be returned:", errorMessage);
  
      return {
        status: false,
        result: errorMessage,
      };
    }
  }
  



};

export default apiService;
