import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className='rounded-md bg-neutral-700 p-5'>
      <div className='w-full'>
        <Image
          className='h-auto w-full rounded-md object-cover'
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
        />
      </div>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p>{description}</p>
      <button
        type='button'
        className='mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-neutral-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        <a href={projectUrl} target='_blank' rel='noopener noreferrer'>
          View Project
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
