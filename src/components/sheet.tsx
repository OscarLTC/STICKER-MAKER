import { useRecoilValue } from 'recoil'
import { nameState } from '../store/sheet/name.atom'

export const Sheet = () => {
  const name = useRecoilValue(nameState)
  const repetitions = Array.from({ length: 30 })
  return (
    <div className='w-1/2 lg:w-1/3 h-full bg-[#121212] flex justify-center'>
      <div className='p-4 bg-white w-[420px] h-[600px] rounded self-center'>
        <div className='grid gap-1 grid-cols-2'>
          {name &&
            repetitions.map((_, index) => (
              <div
                key={index}
                className='border border-black w-fit p-1 rounded'
              >
                <h3>{name}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
