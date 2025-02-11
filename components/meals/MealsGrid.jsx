import styles from './mealsGrid.module.scss';
import MealItem from '@/components/meals/mealItem/MealItem';

export default function MealsGrid({ meals }) {
  const { meals: mealsStyles } = styles;

  return (
    <ul className={mealsStyles}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
