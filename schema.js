// schema.js
const Joi = require('joi');

const listingSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Title is required.'
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Description is required.'
    }),
    image: Joi.object({
        url: Joi.string().uri().allow(''),
        filename: Joi.string().allow('')
    }).optional(), // optional because image might be handled via multer/cloudinary
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price must be a number.',
        'number.min': 'Price cannot be negative.',
        'any.required': 'Price is required.'
    }),
    quantity: Joi.number().min(0).required().messages({
        'number.base': 'Quantity must be a number.',
        'number.min': 'Quantity cannot be negative.',
        'any.required': 'Quantity is required.'
    }),
    location: Joi.string().required().messages({
        'string.empty': 'Location is required.'
    }),
    country: Joi.string().required().messages({
        'string.empty': 'Country is required.'
    }),
    // category: Joi.string().valid(
    //     "Equipments", "General", "Authorized", "Biohazard",
    //     "Radiative", "Flamable", "High Temprature",
    //     "Virus Alert", "Out of Country", "Expensive", "Bacteria"
    // ).optional(),
});

const reviewSchema = Joi.object({
    comment: Joi.string().required().messages({
        'string.empty': 'Comment cannot be empty.'
    }),
    rating: Joi.number().min(1).max(5).required().messages({
        'number.base': 'Rating must be a number.',
        'number.min': 'Rating must be at least 1.',
        'number.max': 'Rating cannot be more than 5.',
        'any.required': 'Rating is required.'
    })
});

module.exports = {
    listingSchema,
    reviewSchema
};
