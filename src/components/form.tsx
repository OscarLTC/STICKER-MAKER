import { useSetRecoilState } from 'recoil'
import { nameState } from '../store/sheet/name.atom'
import { GithubPicker } from 'react-color'

export const Form = () => {
  const setName = useSetRecoilState(nameState)
  return (
    <div className='w-1/2 lg:w-2/3 h-full p-10'>
      <div className='bg-gray-300 w-full h-full rounded-lg'>
        <div className='flex flex-col p-5 gap-4'>
          <div className='w-full flex rounded bg-gray-400 animate-pulse'>
            <h4 className='m-auto py-4 text-white text-2xl'>Comming soon</h4>
          </div>
          <div className='flex flex-col'>
            <span>Texto</span>
            <input
              className='rounded p-2'
              type='text'
              placeholder='Nombre y apellido'
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className='flex flex-col'>
            <span>Colores</span>
            <div className='flex gap-2 bg-white rounded'>
              <div className='flex'>
                <h4 className='p-2 rounded h-fit'>Texto</h4>
                <div className='absolute invisible'>
                  <GithubPicker width='212px' />
                </div>
              </div>
              <div className='flex'>
                <h4 className='p-2 rounded h-fit'>Texto</h4>
                <div className='absolute invisible'>
                  <GithubPicker width='212px' />
                </div>
              </div>
              <div className='flex'>
                <h4 className='p-2 rounded h-fit'>Texto</h4>
                <div className='absolute invisible'>
                  <GithubPicker width='212px' />
                </div>
              </div>
            </div>
          </div>
          <div>column - repetitions</div>
          <button className='w-full bg-stone-800 text-white rounded p-4'>
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
