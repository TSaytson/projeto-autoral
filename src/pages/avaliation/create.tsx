import React, { useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../../layouts/Layout";
import axios from 'axios';

export default function CreateAvaliation() {
  const [form, setForm] = useState({
    title: '',
    description: ''
  })
  function handleForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function addAvaliation(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post('/api/avaliation', form);
      Swal.fire({
        toast: true,
        icon: 'success',
        text: 'Successfully created',
        timer: 1500,
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/v9sdELSzVw4AAAAM/nyan-cat-kawaii.gif")
          left top
          no-repeat
        `
      })

    } catch (error) {
      Swal.fire({
        toast: true,
        icon: 'error',
        text: 'An error ocurred',
        position:"center-end" ,
      })
    }
  }
  return (
    <Layout>
      <form onSubmit={addAvaliation} className="max-w-screen-lg mx-auto flex flex-col px-4">
        <h1 className="text-2xl font-bold mb-2">
          Share an avaliation
        </h1>
        <span className="text-xl text-gray-500 mb-14">
          Share what you found with others
        </span>
        <div className="w-full flex flex-col gap-2 mb-6">
          <label htmlFor='title' className="text-base text-gray-500">
            Name
          </label>
          <input
            name='title'
            onChange={handleForm}
            value={form.title}
            id='title'
            type='text'
            className='w-full border-[1px] h-9 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-offset-0 focus:outline-gray-400 focust:outline-[3px] transition-all'
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-5">
          <label htmlFor="description" className="text-base text-gray-500">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleForm}
            id='description'
            className="w-full border-[1px] h-32 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-gray-400 focus:outline-[3px] transition-all"
          />
        </div>
        <button className="px-6 py-3 bg-sky-700 text-white rounded-lg ml-auto outline-none
        focus:outline-offset-0 focus:outline-sky-300 focus:outline-[3px] transition-all">
          Add finding
        </button>
      </form>
    </Layout>
  )
}