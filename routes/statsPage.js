import express from "express";
import {
  getTotalVisits,
  getTotalMedTime,
  getAllDataMoodLog,
  getAverageMood,
} from "../models/statsPageModels.js";

const statsRouter = express.Router();

statsRouter.get("/:userId", async function (req, res) {
  // example id = CNXBkvXJbxUjh5bOxk8NN2DV2l72
  const userId = req.params.userId;

  const result = {
    visits: await getTotalVisits(userId),
    meditationTime: await getTotalMedTime(userId),
    moodData: {
      moodstats: await getAverageMood(userId),
      allmoodlogs: await getAllDataMoodLog(userId),
    },
  };

  res.json({
    success: true,
    payload: result,
  });
});

export default statsRouter;

/*


get request    using state ??  to get the userID  CNXBkvXJbxUjh5bOxk8NN2DV2l72 
FRONT END - using firebase to track which user is logged. 
Access in each front end page to the userid 


let userId = CNXBkvXJbxUjh5bOxk8NN2DV2l72 -- getting from firbase 
"https://medi-mate-app.herokuapp.com/stats/${userId}"  END POINT 

UPDATE Request   --- sending json {
  userId: 

}



*/
