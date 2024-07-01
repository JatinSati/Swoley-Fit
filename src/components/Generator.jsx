import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utilis/swoldier'

function Header(props){
  const {index, title, description}= props
  return(
    <div className='flex flex-col gap-4 items-center justify-center'>
      <div className='flex  gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl m-1'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {

  const [ShowModal , setShowModal]= useState(false)
  const [Poison , setPoison]= useState('individual')
  const [Muscles , setMuscles]= useState([])
  const [Goals , setGoals]= useState('strength_power')

  function toggleModal(){
    setShowModal(!ShowModal)
  }

  function updateMuscle(muscleGroup){

    if(Muscles.includes(muscleGroup)){
      setMuscles(Muscles.filter(val => val!==muscleGroup))
      return
    }

    if(Muscles.length >2){
      return
    }

    if(Poison!== 'individual'){
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...Muscles, muscleGroup])

    if(Muscles.length ===2){
      setShowModal(false)
    }
  }

  return (
    <div>
      <SectionWrapper header={"Generate your workout"} title={['it\'s','huge','o\'clock']}>

        <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'}/>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {Object.keys(WORKOUTS).map((type, typeIndex) =>{
            return(
              <button onClick={() => {
                  setMuscles([])
                  setPoison(type)
                }} key={typeIndex} className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg ' + (type === Poison ? 'border-blue-600' : 'border-blue-400')}>
                <p className='capitalize'>{type.replaceAll('_'," ")}</p>              
              </button>
            )
          })}
        </div>
        

        <Header index={'02'} title={'Lock on Targets'} description={'Select the muscle judged for annihilation'}/>

        <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
          
          <button onClick={toggleModal} className='relative flex items-center justify-center py-3'>
            <p className='capitalize'>{Muscles.length>0 ? Muscles.join(' ') : 'Select muscle groups'}</p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2  fa-caret-down"></i> 
          </button>

          {ShowModal && (
            <div className='flex flex-col p-3'>
              {(Poison === 'individual' ? WORKOUTS[Poison] : Object.keys(WORKOUTS[Poison])).map((muscleGroup, muscleGroupIndex) => {
                return(
                  <button onClick={() => {
                    updateMuscle(muscleGroup)
                  }} className={'hover:text-blue-400 duration-200 ' +(Muscles.includes(muscleGroup) ? 'text-blue-400': '')} key= {muscleGroupIndex}>
                    <p className='uppercase '>{muscleGroup.replaceAll('_',' ')}</p>
                  </button>
                )
              })}
            </div>
          )}
        </div>


        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective'}/>

        <div className='grid grid-cols-3  gap-4'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) =>{
            return(
              <button onClick={() => {
                setGoals(scheme)
              }} key={schemeIndex} className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg ' + (scheme === Goals ? 'border-blue-600' : 'border-blue-400')}>
              <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>              
            </button>
            )
          })}
        </div>
      </SectionWrapper>
    </div>
  )
}
