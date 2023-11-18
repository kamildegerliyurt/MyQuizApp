import axios from "axios";


export const getCategory = async() =>{
    try {
        
        const response = await axios.get(process.env.EXPO_PUBLIC_GET_CATEGORY)
        
        return response.data.trivia_categories

    } catch (error) {
        throw error
    }
}




export const getQuestions = async(categoryID) =>{
    try {

        const response = await axios.get(`https://opentdb.com/api.php?amount=20&category=${categoryID}`)



        return response.data.results

        
    } catch (error) {
        throw error
    }
}

