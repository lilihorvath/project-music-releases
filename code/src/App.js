import React from 'react'
import data from './data.json'
import './index.css'
import { Header } from './components/Header.js'
import { Album } from './components/Album.js'

export const App = () => {
  return (
    <>
      <Header />
      <div className="album-container">
        {data.albums.items.map((album) => {
          return (
            <Album key = {album.id}
            albumTitle = {album.name}
            image = {album.images[0].url}
            artists = {album.artists}
            albumLink = {album.external_urls.spotify}
            />
           )
        })}
      </div>
    </>
  )
}