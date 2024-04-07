import * as Joi from 'joi';

export const ConfigValidationSchema = Joi.object({
  ORIGIN: Joi.string(),

  PORT: Joi.number().optional().default(5000),

  PASSWORD_SALT: Joi.number(),
  TOKEN_SALT: Joi.number(),

  JWT_ALGORITHM: Joi.string(),
  JWT_ACCESS_SECRET: Joi.string(),
  JWT_ACCESS_EXPIRES_IN: Joi.string(),
  JWT_REFRESH_SECRET: Joi.string(),
  JWT_REFRESH_EXPIRES_IN: Joi.string(),

  COOKIE_NAME: Joi.string(),
  COOKIE_MAX_AGE: Joi.number(),

  SERVE_STATIC_FOLDER: Joi.string(),
  SERVE_STATIC_PREFIX: Joi.string(),

  THROTTLER_TTL: Joi.number(),
  THROTTLER_LIMIT: Joi.number(),
}).options({ presence: 'required' });
