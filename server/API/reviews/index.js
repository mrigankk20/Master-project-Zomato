import express, { Route } from "express";
import passport from "passport";

// Database modal
import { ReviewModel } from "../../database/AllModels";

const Router = express.Router();

Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;
        await ReviewModel.create(reviewData);
        return res.json({ review: "Successfully Created Review" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//delete

Router.delete("/delete/:_id", async (req, res) =>{
    try{
        const{_id}=req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Review Deleted" });
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;