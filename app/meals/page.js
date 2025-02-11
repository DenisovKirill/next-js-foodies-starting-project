import { Suspense } from 'react';
import Link from 'next/link';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/api/meals';

import styles from './page.module.scss';

async function Meals () {
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
}


export default function MealsPage() {
    const { header, main, highlight, cta, loading } = styles;

  return (
      <>
          <header className={header}>
              <h1>
                  Delicious meals, created <span className={highlight}>by you</span>
              </h1>
              <p>
                  Choose your favourite recipe and cook it yourself. It is easy and fun.
              </p>
              <p className={cta}>
                  <Link href={'meals/share'}>Share your favourite recipes</Link>
              </p>
          </header>
          <main className={main}>
           <Suspense fallback={<p className={loading}>
               Fetching meals...
           </p>}>
               <Meals/>
           </Suspense>
          </main>
      </>
  );
}
