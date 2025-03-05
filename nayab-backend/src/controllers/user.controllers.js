import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import logger from "../../logger.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const existedUser = await User.findOne({
    $or: [{ email }],
  });

  console.log("existedUser", existedUser);

  if (existedUser) {
    throw new ApiError(400, "Username Or Email Already Exists in our DB");
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("USer", user);

    const createdUser = await User.findById(user._id).select("-password");

    console.log("Created", createdUser);

    if (!createdUser) {
      throw new ApiError(501, "Server Error While Creating User");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User Created Successfully"));
  } catch (error) {
    logger.error(`User Creation Failed`);

    throw new ApiError(501, "Server Error While Creating User");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "User Not Found Please Sign Up");
  }

  const isPasswordValid = user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const accessToken = await user.generateAccessToken();

  const loggedInUser = await User.findById(user._id).select("-password");

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: loggedInUser,
        accessToken,
      },
      "User logged In Successfully"
    )
  );
});

export { registerUser, loginUser };
