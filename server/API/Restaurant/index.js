import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

import {RestaurantModel} from "../../database/AllModels";

const Router = express.Router();

Router.get("/",async(req, res) => {
    try {
        const {city} = req.query;
        const restaurants=await RestaurantModel.find({ciity});
        return res.json({restaurants});
    } catch (error) {
        
    }
});

export default Router;
