import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Row/Row'
import request from '../../utils/request'

const HomeScreen = () => {
  return (
    <div className='homeScreen'> 
      <Nav/>
      <Banner />
      <Row title={"NETFLIX ORIGINALS"} fetchURL={request.fetchNetflixOriginals} isLarge />
      <Row title={"TRENDING NOW"} fetchURL={request.fetchTrending} isLarge />
      <Row title={"TOP RATED"} fetchURL={request.fetchTopRated} isLarge />
      <Row title={"ACTION MOVIES"} fetchURL={request.fetchActionMovies} isLarge />
      <Row title={"COMEDY MOVIES"} fetchURL={request.fetchComedyMovies} isLarge />
      <Row title={"HORROR MOVIES"} fetchURL={request.fetchHorrorMovies} isLarge />
      <Row title={"ROMANCE MOVIES"} fetchURL={request.fetchRomanceMovies} isLarge />
      <Row title={"DOCUMENTARIES"} fetchURL={request.fetchDocumentaries} isLarge />
    </div>
  )
}

export default HomeScreen
