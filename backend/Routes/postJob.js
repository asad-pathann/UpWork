 import express from "express"
import { postJob } from '../Controller/jobController.js'


export const jobRouter = express.Router()


jobRouter.post("/post-job",postJob)