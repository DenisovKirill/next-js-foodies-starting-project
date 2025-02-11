import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/api/meals';
import styles from './page.module.scss';

export default function MealDetailsPage({ params }) {
  const {
    header,
    image: imageStyle,
    headerText,
    creator: creatorStyle,
    summary: summaryStyle,
    instructions: instructionsStyle,
  } = styles;
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  const { title, image, summary, instructions, creator, creator_email } = meal;
  return (
    <>
      <header className={header}>
        <div className={imageStyle}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={headerText}>
          <h1>{title}</h1>
          <p className={creatorStyle}>
            by <a href={`mailto: ${creator_email}`}>{creator}</a>
          </p>
          <div className={summaryStyle}>{summary}</div>
        </div>
      </header>
      <main>
        <div className={instructionsStyle}>
          {instructions.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </main>
    </>
  );
}
