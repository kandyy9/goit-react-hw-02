import css from "./Feedback.module.css";

export default function Feedback({
  values: { good, bad, neutral },
  total,
  rate,
}) {
  return (
    total > 0 && (
      <ul className={css.feedbackList}>
        <li>
          Good:
          <span>{good}</span>
        </li>
        <li>
          Neutral:
          <span>{neutral}</span>
        </li>
        <li>
          Bad:
          <span>{bad}</span>
        </li>
        <li>
          Total:
          <span>{total}</span>
        </li>
        <li>
          Positive:
          <span>{rate}%</span>
        </li>
      </ul>
    )
  );
}
