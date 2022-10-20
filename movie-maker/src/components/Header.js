import React from 'react'

export default function Header() {
  return (
    <div className='topnav'>
        <a className='logo' href='/'>Movie Maker</a>
        <div className='search-container'>
            <form>
                <a href='/'>Add Movies</a>
                <input type='text' placeholder='Search...' name='search' ></input>
                <button type='submit'><i className="fa fa-search">Submit</i></button>
            </form>
        </div>
    </div>
  )
}
