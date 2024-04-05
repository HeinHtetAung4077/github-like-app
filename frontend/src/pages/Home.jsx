import React from 'react'
import Search from '../components/Search'
import SortRepo from '../components/SortRepo'
import ProfileInfo from '../components/ProfileInfo'
import Repo from '../components/Repo'

const Home = () => {
  return (
    <div className='m-4'>
      <Search />
      <SortRepo />
      <div className='flex flex-col lg:flex-row gap-4 justify-center items-start'>
        <ProfileInfo />
        <Repo />
      </div>
    </div>
  )
}

export default Home