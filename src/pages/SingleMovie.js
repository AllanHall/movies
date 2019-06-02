import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'
import IndividualMovies from '../components/IndividualMovies.jsx'

const imagePreUrl = 'https://image.tmdb.org/t/p/'
const imageSize = ['w300', 'w780', 'w1280', 'original']
const apiKey = '?api_key=afc7a0ada171a2a77126fd0d421b758c'
// const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
// const apiUrlEnd = '&language=en-US&page=1'
const testUrl = 'https://api.themoviedb.org/3/movie/'

class SingleMovie extends Component {
  state = {
    movieTitle: '',
    moviePoster: '',
    movieTagLine: ''
  }
  componentDidMount() {
    const movieId = this.props.match.params.id
    Axios.get(`${testUrl}${movieId}${apiKey}`).then(resp => {
      console.log({ resp })
      this.setState({
        movieTitle: resp.data.original_title,
        moviePoster: imagePreUrl + imageSize[0] + resp.data.backdrop_path,
        movieTagLine: resp.data.tagline
      })
      console.log(this.state.moviePoster)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.movieTitle}</h1>
        <img src={`${this.state.moviePoster}`} />
        <h2>{this.state.movieTagLine}</h2>
        {/* <div>
          {/* <IndividualMovies movie={this.state.movieInfo.original_title} /> */}
        {/* </div>
        <IndividualMovies moOb={this.state.movieInfo} /> */}{' '}
        <HomeButton />
      </div>
    )
  }
}

export default SingleMovie
