const Movie = require("../models/movie.model")

/**
 * Controller function to create a new movie
 * @param {*} req {name, description ,.....}
 * @param {*} res 
 * @returns movie created
 */

const createMovie = async(req,res)=>{
    try {
        const movie = await Movie.create(req.body)
        return res.status(200).send({
            success:true,
            error:{},
            data:movie,
            message: "Successfully created a movie object"
        })
    } catch (error) {
        console.log("Error occured ")
        return res.status(500).send({
            success:false,
            error:error,
            data:{},
            message:"Something went wrong"
        })
    }
}

module.exports = {createMovie}