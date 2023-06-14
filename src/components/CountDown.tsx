'use client';

import { useCountdown, DateSplitted } from '@/hooks/useCountDown'
const translateDayDict: { [key: string]: string } = {
    days: "días",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
}
// const DatePart = ({ value, label, containerClasses = '' }: { value: number, label: string, containerClasses?: string }) => {
//     return (
//         <div className={`w-24 mx-1 p-2 bg-white text-yellow-500 ${containerClasses}`}>
//             <div className={`flex flex-col items-center`}>
//                 <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
//                     <div className="font-mono leading-none" x-text={label}>{value}</div>
//                     <div className="font-mono uppercase text-sm leading-none">{label}</div>
//                 </div>
//                 {/* <span className='text-xl sm:text-base'>{value}</span>
//                 <span className='text-xl sm:text-base'>{label}</span> */}
//             </div>
//         </div>
//     )
// }

const DatePart = ({ value, label, containerClasses = '' }: { value: number, label: string, containerClasses?: string }) => {
    return (
        <div className={`mx-1 p-2 bg-black text-yellow-500 rounded-lg ${containerClasses}`}>
            <div className="font-mono leading-none" x-text={label}>{value}</div>
            <div className="font-mono uppercase text-sm leading-none">{label}</div>
        </div>
    )
}
const BIRTHDATE = new Date(2023, 6, 8)

const CountDown = () => {
    const dateParts = useCountdown(BIRTHDATE)
    return (
        <div className='text-6xl text-center flex w-full items-center justify-center'>
            {
                Object.keys(dateParts).map((key: string) => {
                    return <DatePart key={key} containerClasses='basis-1/4 w-20' label={translateDayDict[key]} value={dateParts[key as keyof DateSplitted]} />
                })
            }
        </div>
        // <div className='flex flex-row gap-x-3'>
        //     {
        //         Object.keys(dateParts).map((key: string) => {
        //             return <DatePart key={key} containerClasses='basis-1/4 w-20' label={translateDayDict[key]} value={dateParts[key as keyof DateSplitted]} />
        //         })
        //     }
        // </div>
    )
}
export default CountDown;