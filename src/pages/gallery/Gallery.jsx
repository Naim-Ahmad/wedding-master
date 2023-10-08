import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import './gallery.css'

export default function Gallery() {
    const { user } = useContext(AuthContext)
  return (
    <main>
    <div className="profile-container pt-16 px-8">
      <div className="profile-photo">
        <img src={user?.photoURL || "https://graph.facebook.com/276753505267036/picture"} alt="Profile photo"/>
      </div>
              <h1 className="profile-name mt-3">{ user.displayName }</h1>
      <p className="description">Dhaka, Bangladesh</p>
      <div className="profile-info-container">
        <div className="profile-info-item">
          <h2 className="title">Oct, 8 2023</h2>
          <p className="description">Date of Marriage</p>
        </div>
        <div className="profile-info-item">
          <h2 className="title">6</h2>
          <p className="description">Gallery Photos</p>
        </div>
        <div className="profile-info-item">
          <h2 className="title">1,430</h2>
                <p className="description">Invited</p>
        </div>
      </div>
    </div>
    <div className="gallery-container max-w-3xl mx-auto grid-cols-1">
      <div className="gallery-item"><img src="https://i.ibb.co/2qz8gPz/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament-min.jpg" alt=""/></div>
      <div className="gallery-item"><img src="https://i.ibb.co/dQ4N1Vy/frontview-traditional-indian-men-clothes-min.jpg" alt=""/></div>
      <div className="gallery-item"><img src="https://i.ibb.co/QJt5zPM/room-with-flowers-min.jpg" alt=""/></div>
      <div className="gallery-item"><img src="https://i.ibb.co/3f9bjY6/traditional-indian-men-clothes-pagri-turban-min.jpg" alt="/"/></div>
      <div className="gallery-item"><img src="https://i.ibb.co/rMD5mxw/young-muslim-bride-groom-wedding-min.jpg" alt=""/></div>
      <div className="gallery-item"><img src="https://i.ibb.co/4ZX5FPQ/young-muslim-bride-groom-wedding-photos-min.jpg" alt=""/></div>
    </div>
   </main>
  )
}
