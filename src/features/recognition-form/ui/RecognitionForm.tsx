import React from 'react';
import { useForm } from 'react-hook-form';

interface RecognitionFormData {
  file: FileList;
  description: string;
}

export const RecognitionForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RecognitionFormData>();

  const onSubmit = (data: RecognitionFormData) => {
    console.log(data);
    // Здесь будет логика отправки формы
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="recognition-form">
      <div className="form-group">
        <label htmlFor="file">Загрузить файл</label>
        <input
          type="file"
          id="file"
          {...register('file', { required: 'Пожалуйста, загрузите файл' })}
        />
        {errors.file && <span className="error">{errors.file.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          {...register('description', { required: 'Пожалуйста, добавьте описание' })}
        />
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}; 