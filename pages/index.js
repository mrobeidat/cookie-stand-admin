import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/RepostTable'
import { hours } from "../data"
export default function Home() {

  // const [randCust, setRandCust] = useState([])
  const [cookiesArray, setCoookiesArray] = useState([])

  
  function submitHandler(event) {
    const randCust = []
    const cookiesPurches = []
    const totals = 0
    
    event.preventDefault();
    for (let i = 0; i < hours.length; i++) {
      const customer = Math.floor(Math.random() * (Math.floor(~event.target.maxCustomer.value) - Math.ceil(~event.target.minCustomer.value) + 1) - Math.ceil(~event.target.minCustomer.value))
      randCust.push(customer)
      const sales = Math.ceil(customer * event.target.avg.value)
      cookiesPurches.push(sales)
      totals += sales
      console.log(randCust);
      console.log(cookiesPurches);
    }

    const cookiesdata = {
      maxCustomer: event.target.maxCustomer.value,
      minCustomer: event.target.minCustomer.value,
      avg: event.target.avg.value,
      location: event.target.location.value,
      customerPerHour: cookiesPurches,
      total: totals,
    }
    setCoookiesArray(x => [...x, cookiesdata])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <CreateForm onSubmit={submitHandler} />
        <ReportTable cookiesArray={cookiesArray}/>
      </main>
      <Footer len={cookiesArray.length} />
    </div>
  )
}
