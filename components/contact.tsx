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
        Contact Me
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
            className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            placeholder='name@mail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='relative h-10 w-full min-w-[200px]'>
          <input
            className='border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0'
            placeholder=' '
            type='text'
            id='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
            Subject
          </label>
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
          className='rounded-lg border-none bg-neutral-800 px-5 py-3 text-center text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 sm:w-fit'
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
