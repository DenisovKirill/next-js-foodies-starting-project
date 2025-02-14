'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from '@/lib/api/meals';

export const shareMeal = async (prevState, formData) => {
  const isInvalidText = (text) => {
    return !text || !text.trim().length;
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    summary: formData.get('summary'),
  };

  const { image, ...rest } = meal;

  const isTextFieldInvalid = Object.values(rest).some(isInvalidText);

  if (isTextFieldInvalid || !isValidEmail(meal.creator_email) || !meal.image || !meal.image.size) {
    // throw new Error('Invalid input');
    return {
      message: 'Invalid input',
    };
  }

  await saveMeal(meal);
  redirect('/meals');
};
