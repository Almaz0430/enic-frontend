import React from 'react';
import { useForm } from 'react-hook-form';

interface AccreditationFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  documents: FileList;
}

export const AccreditationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AccreditationFormData>();

  const onSubmit = (data: AccreditationFormData) => {
    console.log(data);
    // Здесь будет логика отправки заявки
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="accreditation-form">
      <div className="form-group">
        <label htmlFor="organizationName">Название организации</label>
        <input
          type="text"
          id="organizationName"
          {...register('organizationName', { required: 'Обязательное поле' })}
        />
        {errors.organizationName && <span className="error">{errors.organizationName.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="contactPerson">Контактное лицо</label>
        <input
          type="text"
          id="contactPerson"
          {...register('contactPerson', { required: 'Обязательное поле' })}
        />
        {errors.contactPerson && <span className="error">{errors.contactPerson.message}</span>}
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
        <label htmlFor="phone">Телефон</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Обязательное поле' })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="documents">Документы</label>
        <input
          type="file"
          id="documents"
          multiple
          {...register('documents', { required: 'Загрузите необходимые документы' })}
        />
        {errors.documents && <span className="error">{errors.documents.message}</span>}
      </div>

      <button type="submit">Отправить заявку</button>
    </form>
  );
}; 