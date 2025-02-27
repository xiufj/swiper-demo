import React from 'react';

interface CardProps {
  image: string;
  amount: string;
  currency: string;
  icon?: string;
  title: string;
  subtitle: string;
  rightText?: string;
  action?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  image,
  icon,
  title,
  subtitle,
  rightText,
  action,
}) => {
  return (
    <div className='rounded-3xl overflow-hidden shadow-lg relative group transition-transform duration-300 hover:scale-105'>
      <img
        src={image}
        alt={title}
        className='w-full  object-cover rounded-3xl'
      />
      <div className='absolute top-4 left-4 right-4'>
        <div className='mt-4  backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 group-hover:translate-y-1'>
          <div className='flex items-center gap-2'>
            {icon && <div className='p-2 rounded-full'>{icon}</div>}
            <div className='text-white'>
              <div className='line-clamp-1'>{title}</div>
              <div className='text-sm opacity-80'>{subtitle}</div>
            </div>
            {rightText && <div className='ml-auto text-white'>{rightText}</div>}
            {action}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
