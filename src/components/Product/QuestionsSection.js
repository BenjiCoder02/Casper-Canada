import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChatIcon } from '../../icons/ChatIcon';

export const QuestionsSection = ({ styles }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerQuestions}>
        <h6>{t('questions')}</h6>
        <p>{t('questionsDesc')}</p>
      </div>
      <button className={styles.chatWithUs}>
        <ChatIcon />
        <span>{t('chatWithUs')}</span>
      </button>
    </div>
  );
}
