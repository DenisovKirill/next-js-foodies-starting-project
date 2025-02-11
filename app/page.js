import Link from 'next/link';

import styles from './page.module.scss'
import ImageSlideshow from '@/components/images/ImagesSlideshow';

export default function Home() {
    const { header, slideshow, hero, cta, section } = styles;
  return (
    <>
        <header className={header}>
            <div className={slideshow}>
                <ImageSlideshow />
            </div>
            <div>
                <div className={hero}>
                    <h1>NetLevel Food for NextLevel Foodies</h1>
                    <p>Taste and share food from all over the world.</p>
                </div>
                <div className={cta}>
                    <Link href={'/community'}>Join the Community</Link>
                    <Link href={'/meals'}>Explore Meals</Link>
                </div>
            </div>
        </header>
        <main>
            <section className={section}>
                <h2>How it works</h2>
                <p>
                    NextLevel Food is a platform for foodies to share their favorite
                    recipes with the world. It&apos;s a place to discover new dishes, and to
                    connect with other food lovers.
                </p>
                <p>
                    NextLevel Food is a place to discover new dishes, and to connect
                    with other food lovers.
                </p>
            </section>

            <section className={section}>
                <h2>Why NextLevel Food?</h2>
                <p>
                    NextLevel Food is a platform for foodies to share their favorite
                    recipes with the world. It&apos;s a place to discover new dishes, and to
                    connect with other food lovers.
                </p>
                <p>
                    NextLevel Food is a place to discover new dishes, and to connect
                    with other food lovers.
                </p>
            </section>
        </main>
    </>
  );
}
