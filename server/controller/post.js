import express from 'express'
import mongoose from 'mongoose'

const router = express.Router();

import User from '../models/User';

export const getUser = async (req,res) => {
    const userId = req.params;
    try {
        const post = await User.findById(userId)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export default router;