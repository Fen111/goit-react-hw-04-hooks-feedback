import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(item => (
        <button
          className={s.feedbackButton}
          type="button"
          key={item}
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
