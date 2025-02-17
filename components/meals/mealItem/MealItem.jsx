import Image from 'next/image';
import Link from 'next/link';
import { IMAGES_API_BASE_URL } from '@/config/api';
import styles from './mealItem.module.scss';

export default function MealItem({ title, slug, image, summary, creator }) {
  const { meal, headerText, imageHolder, content, summaryParagraph, actions } = styles;

  return (
    <article className={meal}>
      <header>
        <div className={imageHolder}>
          <Image src={`${IMAGES_API_BASE_URL}${image}`} alt={title} fill />
        </div>
        <div className={headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={content}>
        <p className={summaryParagraph}>{summary}</p>
        <div className={actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
