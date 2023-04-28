import Image from 'next/image'
import { Inter } from 'next/font/google'
import DateTimePicker from "@/components/DateTimePicker";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'flex flex-col justify-center items-center p-2'}>
      <DateTimePicker />
    </main>
  )
}
