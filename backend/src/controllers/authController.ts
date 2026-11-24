import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcrypt from "bcrypt";


export const register = async (req: Request, res: Response) => {
  try {
    const { FullName, Email, Password, ConfirmPassword } = req.body;
    console.log(req.body)

    // Validation
    if (Password !== ConfirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // Check existing user
    const existingUser = await prisma.user.findUnique({
      where: { Email:Email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Save user
    const user = await prisma.user.create({
      data: {
       FullName: FullName,
    Email: Email,
    Password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "Registration successful",
      user: {
        id: user.id,
        fullName: user.FullName,
        email: user.Email,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};