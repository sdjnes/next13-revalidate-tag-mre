import Image from 'next/image'

export default async function Home() {
  const request = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Madrid', {
    next: {
      tags: ['time']
    }
  })
  const requestJson = await request.json()
  const { dateTime } = requestJson

  return (
   <main>
    Time in Madrid {dateTime}
   </main>
  )
}
