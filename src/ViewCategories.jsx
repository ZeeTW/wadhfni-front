import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryCard from '/pages/Category'
import axios from 'axios'

const ViewCategories = () => {
  const { genreId } = useParams()
  const [games, setGames] = useState([])
  const navigate = useNavigate()
}

export default ViewCategories
