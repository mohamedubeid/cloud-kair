import Joi from "joi";

export const formSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.empty": "Full Name is required",
    "string.min": "Full Name must be at least 3 characters",
    "string.max": "Full Name must be at most 50 characters",
  }),
  email: Joi.string()
    .email({
      tlds: {
        allow: ["com", "net", "edu", "myTld", "org", "gov", "co", "mil", "io"],
      },
    })
    .min(5)
    .max(100)
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
      "string.min": "Email must be at least 5 characters",
      "string.max": "Email must be at most 100 characters",
    }),
  password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[!@#$%^&*])"))
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be at most 20 characters",
      "string.pattern.base":
        "Password must contain at least one special character [!@#$%^&*]",
    }),
  dateOfBirth: Joi.date().max("now").messages({
    "date.empty": "Date of birth is required",
    "date.format": "Invalid date format",
    "date.max": "Invalid date of birth",
    "date.valid": "Date of Birth must be a valid format",
  }),
  healthCareLevel: Joi.string()
    .allow(null, "")
    .valid("Primary", "Secondary", "Tertiary", "Quaternary Care")
    .messages({
      "any.only": "Invalid health care level",
    }),
});
