import * as z from "zod";

export const eventFormSchema = z.object({
    title:z.string().min(3,'Title must be at least 3 characters'),
    description: z.string().min(3 ,' Description must be at least 3 characters').max(400 , 'Description must be less than 400 characters'),
    location: z.string().min(3 ,'LOcation must be less than 3 characters').max(400 , 'Location must be less than 400 characters'),
    startDateTime:z.date(),
    endDateTime:z.date(),
    categoryId : z.string(),
    isFree:z.boolean(),
    url: z.string().url(),
    price: z.string(),
    imageUrl : z.string()
    });
  
