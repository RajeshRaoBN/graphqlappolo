import React, { Component } from 'react'
import Movie from '../components/Movie'
import imagejwp from './imagejwp.jpeg'
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const allMovies = gql`
  query allMovies {
    movies {
      name
      genre
      year
    }
  }
`;

export default class Movies extends Component {
    state= {
        movies: [
            {
                id: 1,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 2,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 3,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 4,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 5,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 6,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            },
            {
                id: 7,
                name: 'John Wick Parabellum',
                genre: 'Action',
                year: 2019,
                image: imagejwp
            }
        ]
    }
  render() {
    console.log(this.props)
    return (
      <div className='movies'>
        {this.state.movies.map((movie) => {
            return <Movie key={movie.i}
            name={movie.name} 
            genere={movie.genre} 
            year={movie.year} 
            image={movie.image} />
        })}
      </div>
    )
  }
}
