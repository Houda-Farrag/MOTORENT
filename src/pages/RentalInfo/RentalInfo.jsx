import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import useUser from '../Auth/useUser';
import LoadingIndicator from '../../ui/LoadingIndicator';
import RentalInfoForm from "../../components/RentalInfoForm/RentalInfoForm"

export default function RentalInfo() {
    const { data: user, isLoading : LoadingUser } = useUser();
  return (
    <div>
      {LoadingUser && <LoadingIndicator load={LoadingUser}/>}  
      <Navbar user={user}/>
      <RentalInfoForm />
    </div>
  )
}
