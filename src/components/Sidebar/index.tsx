import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/savio-84.png"/>
        <strong>Sávio Araújo</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20}/>Editar seu perfil</a>
      </footer>
    </aside>
  )
}