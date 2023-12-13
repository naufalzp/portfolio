'use client';

import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {};
  return (
    <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
      <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
        Contact Me{' '}
        <span className='font-bold text-red-600'>NOT WORKING YET</span>
      </h2>
      <p className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
        Interested in connecting? Need web solutions for your business? Let
        {"'"}s get to know each other! Feel free to reach out and start a
        conversation. Im here to help.
      </p>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            disabled
            className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            placeholder='name@mail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            disabled
            className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='message'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Your message
          </label>
          <textarea
            id='message'
            rows={6}
            disabled
            className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            placeholder='Leave a comment...'
            defaultValue={''}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          disabled
          className='rounded-lg border-none bg-neutral-800 px-5 py-3 text-center text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 sm:w-fit'
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
