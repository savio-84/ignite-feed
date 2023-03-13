import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

const posts: PostType[]  = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/savio-84.png",
      name: "Sávio Araújo",
      role: "CTO @Simplifica Aqui",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic officiis, quos rerum dolore consequuntur nulla non quae ipsum alias repellat repellendus? Doloribus illum voluptatibus laboriosam porro in expedita soluta.'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic officiis, quos rerum dolore consequuntur nulla non quae ipsum alias repellat repellendus? Doloribus illum voluptatibus laboriosam porro in expedita soluta.'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
];

function App() {
  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
