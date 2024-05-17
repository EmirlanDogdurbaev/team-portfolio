import classes from "./About.module.scss";
import { Link } from "react-router-dom";
import git from "../../assets/free-icon-social-10096702.png";

const About = () => {
  return (
    <div className={classes.About}>
      <header>
        <article>
          <h4>Lorem ipsum dolor.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            atque aut eaque exercitationem iste itaque nam nostrum tempora
            tenetur ut.
          </p>
        </article>
      </header>

      <section className={classes.who}>
        <div>
          <h2>This is who we are </h2>
          <span className={classes.line} />
          <p>
            At Elite Exped, mountains are more than just our profession.
            Climbing is our passion, adventure is our lifeblood, and the
            Himalayas are our home. Run by three record breaking mountaineers -
            Nirmal ‘Nimsdai’ Purja, MBE, Mingma David Sherpa and Mingma Tenzi
            Sherpa - we exist to help others learn from our experiences, and to
            pass on a love for the peaks that inspire us every day
          </p>
        </div>
      </section>

      <section className={classes.icons_container}>
        <div className={classes.inner}>
          <div>
            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 13.07L16.49 16.36L17.51 14.64L13 11.93V6.42H11V13.07Z"
                  fill="#FF6B00"
                />
              </svg>

              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>

            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM15.97 8H18.92C17.96 6.35 16.43 5.07 14.59 4.44C15.19 5.55 15.65 6.75 15.97 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4 12C4 12.69 4.1 13.36 4.26 14H7.64C7.56 13.34 7.5 12.68 7.5 12C7.5 11.32 7.56 10.66 7.64 10H4.26C4.1 10.64 4 11.31 4 12ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM5.08 8H8.03C8.35 6.75 8.81 5.55 9.41 4.44C7.57 5.07 6.04 6.34 5.08 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM9.5 12C9.5 12.68 9.57 13.34 9.66 14H14.34C14.43 13.34 14.5 12.68 14.5 12C14.5 11.32 14.43 10.65 14.34 10H9.66C9.57 10.65 9.5 11.32 9.5 12ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.5 12C16.5 12.68 16.44 13.34 16.36 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10H16.36C16.44 10.66 16.5 11.32 16.5 12Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>

            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>

            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 13.07L16.49 16.36L17.51 14.64L13 11.93V6.42H11V13.07Z"
                  fill="#FF6B00"
                />
              </svg>

              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>

            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM15.97 8H18.92C17.96 6.35 16.43 5.07 14.59 4.44C15.19 5.55 15.65 6.75 15.97 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4 12C4 12.69 4.1 13.36 4.26 14H7.64C7.56 13.34 7.5 12.68 7.5 12C7.5 11.32 7.56 10.66 7.64 10H4.26C4.1 10.64 4 11.31 4 12ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM5.08 8H8.03C8.35 6.75 8.81 5.55 9.41 4.44C7.57 5.07 6.04 6.34 5.08 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM9.5 12C9.5 12.68 9.57 13.34 9.66 14H14.34C14.43 13.34 14.5 12.68 14.5 12C14.5 11.32 14.43 10.65 14.34 10H9.66C9.57 10.65 9.5 11.32 9.5 12ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.5 12C16.5 12.68 16.44 13.34 16.36 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10H16.36C16.44 10.66 16.5 11.32 16.5 12Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>

            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>
            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>
            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>
            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>
            <aside>
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                  fill="#FF6B00"
                />
              </svg>
              <span>
                <h4>Lorem, ipsum dolor.</h4>
              </span>
            </aside>
          </div>
        </div>
      </section>

      <section className={classes.team_card_cont}>
        <article>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            cupiditate dicta est eveniet, ipsum nemo quo repellat. Doloremque,
            nesciunt, quia?
          </p>
        </article>
        <div>
          <article>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq3PFFQd8dHI1UH2cUD_gOggRkas7SwRc9a-WB5eqPA&s"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>Asanbaev Baitemir</h4>
              <h6>еврей</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
          <article>
            <img
              src="https://i.pinimg.com/236x/39/ca/02/39ca02bf6c7952bb4a1dfb6ffc24ead4.jpg"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>lorem ipsum dolor. dolor.</h4>
              <h6>Lorem, ipsum dolor.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
          <article>
            <img
              src="https://i.pinimg.com/originals/b5/47/39/b54739a42c4a634024186ecc031aa830.jpg"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>lorem ipsum dolor. dolor.</h4>
              <h6>Lorem, ipsum dolor.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
          <article>
            <img
              src="https://i.pinimg.com/736x/4b/a0/46/4ba04641386489b5dc647fed33e59231.jpg"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>lorem ipsum dolor. dolor.</h4>
              <h6>Lorem, ipsum dolor.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
          <article>
            <img
              src="https://d1vzi28wh99zvq.cloudfront.net/images/5549/381747-thumb140.jpg"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>lorem ipsum dolor. dolor.</h4>
              <h6>Lorem, ipsum dolor.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
          <article>
            <img
              src="https://i.pinimg.com/236x/39/ca/02/39ca02bf6c7952bb4a1dfb6ffc24ead4.jpg"
              alt=""
              className={classes.img}
            />
            <aside>
              <h4>lorem ipsum dolor. dolor.</h4>
              <h6>Lorem, ipsum dolor.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus distinctio ea repudiandae rerum saepe vero.
              </p>

              <span>
                <div>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                  <Link to={"/"}>
                    <img src={git} alt="" width={30} />
                  </Link>
                </div>

                <Link to={"/"}>Узнать больше</Link>
              </span>
            </aside>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
