'use client';

import { useFormState } from 'react-dom';

import ImagePicker from '@/components/imagePicker/ImagePicker';
import { shareMeal } from '@/lib/serverActions';
import MealsFormSubmit from '@/components/meals/mealsFormSubmit/MealsFormSubmit';

import styles from './page.module.scss';

export default function ShareMealPage() {
  const { header, highlight, main, form, row, actions } = styles;

  const [state, formAction] = useFormState(shareMeal, { message: '' });

  return (
    <>
      <header className={header}>
        <h1>
          Share your <span className={highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={main}>
        <form className={form} action={formAction}>
          <div className={row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows="10" required></textarea>
          </p>
          <ImagePicker name={'image'} label={' Your image'} />
          {state.message && <p>{state.message}</p>}
          <p className={actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
