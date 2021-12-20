import Head from 'next/head'
import { useState } from 'react';
export default function Home() {

  const [cookieStand, set_data] = useState([]);
  function CreateCookiesHandler(event) {
    event.preventDefault();

    const save_data = {
      location: event.target.location.value,
      min_customers: event.target.min.value,
      max_customers: event.target.max.value,
      avg_cookies: event.target.avg.value,

    }
    set_data(cookieStand => [...cookieStand, save_data])

  }

  return (
    <div className="">
      <head>
        <title>
          Cookie Stand Admin
        </title>
      </head>

      <header className="bg-emerald-400" p-4>
        <h1 className="text-4xl"> Cookie Stand Admin </h1>
      </header>

      <main className="bg-emerald-300">
      <form type="submit" className="bg-emerald-300 text-xs w-1/2 mx-auto p-4" onSubmit={CreateCookiesHandler}>
          <h1>Create Cookie Stand </h1>

          <label className=" m-3">Location</label>
          <input className="bg-gray-100 m-3 w-2/3" name="location" type="text" />
          
          <div className="flex ">
            <div className="m-3 p-4">
            <label className=" m-3">Minimum Customers Per Hour</label>
            <br/>
            <input className="bg-gray-100 m-3 w-2/3" name="min" type="number" />
            </div>

            <div className="m-3 p-4">
            <label className=" m-3">Maximum Customers Per Hour</label>
            <br/>
            <input className="bg-gray-100 m-3 w-2/3" name="max" type="number" />
            </div>

            <div className="m-3 p-4">
            <label className=" m-3">Average Cookies Per Sale</label>
            <br/>
            <input className="bg-gray-100 m-3 w-2/3" name="avg" type="number" />
            </div>

            <button className="bg-emerald-500 w-1/4 p-4 h-12 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">Create</button>
          </div>
        </form>
        <h2 className='text-2xl'>
          Report Table Coming Soon...
        </h2>
        <div className="">
          {
            cookieStand.map(item => {
              return (
                <p class="">{JSON.stringify(item)}</p>
              )
            })
          }
        </div>
      </main>

      <footer className="bg-emerald-500" p-4 >
        <h3 className="text-4xl">&copy;2021</h3>
      </footer>
    </div>
  )
}
