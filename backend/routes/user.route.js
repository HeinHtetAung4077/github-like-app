import express from 'express';
import { getUserProfileAndRepos } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);

// TODO => GET likes (who liked our profile)
// TODO => POST a like 

export default router;