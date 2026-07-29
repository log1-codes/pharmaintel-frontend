import { Link, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      
:root{

--text:#E6EAF2;

--muted:rgba(230,234,242,.82);

--card:rgba(2,6,23,.62);

--border:rgba(255,255,255,.12);

}

*{

margin:0;

padding:0;

box-sizing:border-box;

}

html{

scroll-behavior:smooth;

}

body{

min-height:100vh;

font-family:

Inter,
system-ui,
Segoe UI,
Roboto,
Arial,
sans-serif;

overflow-x:hidden;

color:var(--text);

background-color:#000;


/* BACKGROUND IMAGE */

background-image:

linear-gradient(

90deg,

rgba(2,6,23,.40) 0%,

rgba(2,6,23,.25) 35%,

rgba(2,6,23,.18) 60%,

rgba(2,6,23,.35) 100%

),

linear-gradient(

180deg,

rgba(255,255,255,.04) 0%,

rgba(255,255,255,.02) 50%,

rgba(255,255,255,.04) 100%

),

url('./Gemini_Generated_Image_k4it8mk4it8mk4it (4).png');

background-size:cover;

/* show more lower image */

background-position:center bottom;

background-repeat:no-repeat;

background-attachment:fixed;

}


/* BACK BUTTON */

.cta-home{

position:fixed;

top:25px;

left:25px;

display:flex;

align-items:center;

gap:10px;

padding:12px 18px;

border-radius:999px;

text-decoration:none;

font-weight:700;

color:white;

background:

rgba(10,10,10,.42);

border:

1px solid rgba(255,255,255,.14);

backdrop-filter:blur(10px);

z-index:999;

transition:.25s;

}

.cta-home:hover{

transform:translateY(-2px);

background:

rgba(192,38,211,.25);

}


/* PAGE POSITIONING */

.wrap{

min-height:100vh;

display:flex;

justify-content:center;

/* card lower */

align-items:flex-start;

padding-top:140px;

padding-left:20px;

padding-right:20px;

padding-bottom:40px;

width:100%;

}


/* CARD */

.card{

width:100%;

max-width:980px;

background:var(--card);

border:

1px solid var(--border);

border-radius:22px;

padding:32px;

backdrop-filter:blur(14px);

box-shadow:

0 25px 70px rgba(0,0,0,.35),

inset 0 1px 0 rgba(255,255,255,.06);

margin-bottom:50px;

}


/* HEADER */

.brand{

display:flex;

flex-direction:column;

gap:8px;

margin-bottom:22px;

}

.brand small{

font-size:12px;

letter-spacing:.15em;

text-transform:uppercase;

font-weight:700;

color:

rgba(255,255,255,.72);

}

h1{

font-size:

clamp(
28px,
4vw,
42px
);

line-height:1.1;

}

.glow{

text-shadow:

0 0 20px rgba(192,38,211,.25),

0 0 40px rgba(255,91,77,.15);

}


/* CONTENT */

.content h2{

font-size:24px;

margin-bottom:18px;

}

.content p{

font-size:16px;

line-height:1.95;

margin-bottom:18px;

color:var(--muted);

text-align:justify;

}

.content strong{

color:white;

}


/* MOBILE */

@media(max-width:768px){

.wrap{

padding-top:110px;

}

.card{

padding:24px;

border-radius:18px;

}

.cta-home{

top:15px;

left:15px;

padding:10px 14px;

font-size:14px;

}

.content p{

font-size:15px;

}

}
      `}</style>




      <Link to="/" className="cta-home">
        Back To Home
      </Link>



      <div className="wrap">

        <main className="card">


          <div className="brand">

            <small>

              AmethIntel

            </small>


            <h1>

              <span className="glow">

                The Name “AmenthIntel”?

              </span>

            </h1>

          </div>



          <section className="content">


            <h2>

              Origins of AmenthIntel

            </h2>



            <p>

              Amenth is for

              <strong>

                Amethyst

              </strong>

              and Intel is obviously for

              <strong>

                Intelligence

              </strong>

              leading to the hybrid name

              <strong>

                AmenthIntel

              </strong>

            </p>



            <p>

              The amethyst stone was rare and valuable in the ancient world.

              The stone became associated with royalty,

              luxury and the divine because of its rare purple color.

            </p>



            <p>

              The name amethyst comes from the ancient Greek word

              <em>

                amethystos

              </em>

              (ἀμέθυστος)

              which translates directly to

              <strong>

                “not intoxicated”

              </strong>

              Greeks and Romans believed the stone preserved clarity,

              prevented deception,

              and promoted rational thinking.

            </p>



            <p>

              With this history in mind,

              we chose the name AmenthIntel

              to be your sober,

              clear minded guide

              to strategic information

              within the biopharma space.

            </p>



            <p>

              <strong>

                Join with us to get better,

                concise,

                and relevant information

                for your drug discovery strategy!

              </strong>

            </p>


          </section>

        </main>

      </div>
    </>
  );
};

export default AboutPage;
