import { sendOpt } from "../extra/sendOpt.js";
import { User } from "../Models/UserModels.js";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";

export const RegisterUser = async (req, res) => {
  const { role, f_name, l_name, password, email, country, mils, terms } =
    req.body;

  // check the see if the all fildes  inter  || not inter  the feilders
  if (!f_name || !l_name || !password || !email || !role || !country) {
    res.status(400); //bad requets

    throw new Error("Inter The All Feildes");
  }
  const compareEmail = await User.findOne({
    email,
  });

  if (compareEmail) {
    res.status(400);
    throw new Error("Already Email");
  }

  let otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  let hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    role,
    f_name,
    l_name,
    password: hashPassword,
    email,
    country,
    mils,
    terms,
    otp,
  });

  sendOpt({ email, otp });

  setTimeout(async () => {
    let user = await User.findone({
      email,
    });

    if (!user) {
      res.status(404);
      throw new Error("Invailed email");
    }
    user.otp = null;
    await user.save();
  }, 600000);

  res.send(newUser);
};
