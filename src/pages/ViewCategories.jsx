import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewCategories = () => {
  const { genreId } = useParams()
  const [games, setGames] = useState([])
  const navigate = useNavigate()
}

export default ViewCategories
