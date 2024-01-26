import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";


const Main = () => {
  const navigate = useNavigate();

  //todo: declair state varriables
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(10);

  let apiKey = "q4kZZMSqSc4_PR-zs4DAzm2pxiiG0H3V5t2uwxkowLo";

  //todo: useEffact
  useEffect(() => {
    fetchAPI();
  }, []);

  //todo: fetching images from API
  async function fetchAPI() {
    let data = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
    );
    let res = await data.json();
    setImages((prevImages) => [...prevImages, ...res]);
  }

  //todo: logic for infinite scroll
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("chutiya mayakn");
      setCount((prevCount) => prevCount + 10);
      fetchAPI();
    }
  };

  //todo: fn to handle log out
  const handleLogOut = async () => {
    try {
      await auth.signOut();
      navigate("/logIn");
    } catch (err) {
      alert("error occurd, try again");
    }
  };

  return (
    <>
      <header>
        <nav>
          <p>Infinite Image Scroller</p>
          <button onClick={handleLogOut}>Log Out</button>
        </nav>
      </header>
      <main>
        {images.map((item) => {
          return (
            <div className="image_child" key={Date.now()}>
              <img
                src={item.urls.small}
                alt={item.alt_description}
                width="250px"
                height="200px"
              />
              <div className="image_overlay">
                <div className="profile">
                  <img
                    src={item.user.profile_image.medium}
                    alt="profile_photo"
                  />
                  <div className="names">
                    <h4>{item.user.name}</h4>
                    <p>@{item.user.username}</p>
                    <p className="desc">{item.alt_description}</p>
                  </div>
                </div>
                <div className="download">
                  <a href={item.urls.small_s3}>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Main;
