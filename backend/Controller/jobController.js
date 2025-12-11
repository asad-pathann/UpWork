import { Jobs } from "../Models/jobModels.js";

export const postJob = async (req, res) => {
  const { title, tags, scope, dic, rate, file } = req.body;

  if (!title || !dic || !tags || !file || !scope || !rate) {
    res.status(404);
    throw new Error("Inter The All Fileds");
  }

  // ---- create Job
  const createJobs = await Jobs.create({
    dic,
    title,
    tags,
    scope,
    rate,
    file,
  });

  res.send(createJobs);
};
