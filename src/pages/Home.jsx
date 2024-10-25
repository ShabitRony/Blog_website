import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div className="hero_content">
            <h1>Make Zone Better!</h1>
            <h4>Why Better Zone Important?</h4>
          </div>
          <div className="hero_img">
            <img src="images/hero.png" alt="Hero-image" />
          </div>
        </section>
        <div className="h-card">
          <div className="card-content">
            <h1>long established</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              voluptates qui aspernatur totam dicta laboriosam rerum eligendi
              saepe, nobis eveniet iste deleniti fugiat! Architecto, blanditiis
              exercitationem voluptas saepe quae quis nihil inventore
              repudiandae autem, enim quo deleniti sapiente accusamus sequi.
            </p>
            <div className="status">
              <p>8 Feb 2022</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
          <img src="images/long-card.png" alt="long card" />
        </div>

        <div className="card_container">
          <div className="card_wrapper">
            <div className="v-card">
              <div className="card-content">
                <h1>long established</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae voluptates qui aspernatur totam dicta laboriosam
                  rerum eligendi saepe, nobis eveniet iste deleniti fugiat!
                  Architecto, blanditiis exercitationem voluptas saepe quae quis
                  nihil inventore repudiandae autem, enim quo deleniti sapiente
                  accusamus sequi.
                </p>
                <div className="status">
                  <p>8 Feb 2022</p>
                  <button className="read-btn">Read More</button>
                </div>
              </div>
              <img src="images/card1.png" alt="long card" />
            </div>
          </div>
          <div className="card_wrapper">
            <div className="v-card">
              <div className="card-content">
                <h1>long established</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae voluptates qui aspernatur totam dicta laboriosam
                  rerum eligendi saepe, nobis eveniet iste deleniti fugiat!
                  Architecto, blanditiis exercitationem voluptas saepe quae quis
                  nihil inventore repudiandae autem, enim quo deleniti sapiente
                  accusamus sequi.
                </p>
                <div className="status">
                  <p>8 Feb 2022</p>
                  <button className="read-btn">Read More</button>
                </div>
              </div>
              <img src="images/card2.png" alt="long card" />
            </div>
          </div>
          <div className="card_wrapper">
            <div className="v-card">
              <div className="card-content">
                <h1>long established</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae voluptates qui aspernatur totam dicta laboriosam
                  rerum eligendi saepe, nobis eveniet iste deleniti fugiat!
                  Architecto, blanditiis exercitationem voluptas saepe quae quis
                  nihil inventore repudiandae autem, enim quo deleniti sapiente
                  accusamus sequi.
                </p>
                <div className="status">
                  <p>8 Feb 2022</p>
                  <button className="read-btn">Read More</button>
                </div>
              </div>
              <img src="images/card3.png" alt="long card" />
            </div>
          </div>
        </div>
        <div className="lorem">
          <div className="lorem-content">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              cumque est accusantium quisquam quos commodi magnam iste incidunt.
              Vel reprehenderit inventore, fuga voluptate sequi voluptatem vero
              maiores quibusdam sit porro?
            </p>
            <div className="status">
              <p>8 Feb 2022</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
          <img src="images/card1.png" alt="pc" />
        </div>
      </main>
      <footer>
        <p>GreatZone 2022 copyright all rights reserved</p>
        <ul>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="className= fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-linkedin"></i>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Home;
