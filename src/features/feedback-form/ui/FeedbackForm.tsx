import React from 'react';
import { useForm } from 'react-hook-form';

interface FeedbackFormData {
  name: string;
  email: string;
  message: string;
}

export const FeedbackForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FeedbackFormData>();

  const onSubmit = (data: FeedbackFormData) => {
    console.log(data);
    // Здесь будет логика отправки обратной связи
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
      <div className="form-group">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Обязательное поле' })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email'
            }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          {...register('message', { required: 'Обязательное поле' })}
        />
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}; 