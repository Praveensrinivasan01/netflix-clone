import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import request from '../../utils/request'

const HomeScreen = () => {
  return (
    <div className='homeScreen'> 
      <Nav/>
      <Banner />
      <Row title={"NETFLIX ORIGINALS"} fetchURL={request.fetchNetflixOriginals} isLarge />
      <Row title={"TRENDING NOW"} fetchURL={request.fetchTrending} isLarge={false} />
      <Row title={"TOP RATED"} fetchURL={request.fetchTopRated} isLarge={false} />
      <Row title={"ACTION MOVIES"} fetchURL={request.fetchActionMovies} isLarge={false} />
      <Row title={"COMEDY MOVIES"} fetchURL={request.fetchComedyMovies} isLarge={false} />
      <Row title={"HORROR MOVIES"} fetchURL={request.fetchHorrorMovies} isLarge={false} />
      <Row title={"ROMANCE MOVIES"} fetchURL={request.fetchRomanceMovies} isLarge={false} />
      <Row title={"DOCUMENTARIES"} fetchURL={request.fetchDocumentaries} isLarge={false} />
    </div>
  )
}

export default HomeScreen
