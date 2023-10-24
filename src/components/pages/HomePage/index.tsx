import { useEffect, useState } from 'react'
import { Stack, Box, Pagination } from '@mui/material'
import Sidebar from 'components/organisms/Sidebar'
import ListItem from 'components/molecules/ListItem'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const postsPerPage = 5

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage)
  }

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const displayedPosts = posts.slice(startIndex, endIndex)

  const handleDelete = (postId: number) => {
    const filteredData = posts.filter((post) => post.id !== postId)
    setPosts(filteredData)
  }

  return (
    <Stack direction="row">
      <Sidebar />
      <Stack marginLeft="40px" spacing={3}>
        {displayedPosts.map((post, index) => (
          <ListItem
            key={post.id}
            title={post.title}
            subtitle={post.body}
            datetime="Mon, 21 Dec 2020 14:57 GMT"
            onDelete={() => handleDelete(post.id)}
          />
        ))}
        <Box>
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Stack>
    </Stack>
  )
}

export default HomePage
