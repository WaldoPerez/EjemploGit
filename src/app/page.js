import React from 'react';
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <img 
            src={equipo.imagen} 
            alt={equipo.nombre} 
            className={styles.teamImage} 
            style={{ width: "200px", height: "auto" }} 
          />
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                {jugador.imagen && (
                  <img 
                    src={jugador.imagen} 
                    alt={jugador.nombre} 
                    className={styles.playerImage} 
                    style={{ width: "200px", height: "auto" }} 
                  />
                )}
                <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON
const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "imagen": "https://1000logos.net/wp-content/uploads/2020/09/Real-Madrid-logo.png",

  "plantilla":[
  {"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74"},
  {"imagen": "https://cadenaser.com/resizer/dig2nQ5YddZQTvQuMqVefZAFBj0=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/MU4VRYBFOBCZ3MWJEHIKSDPVXI.jpg"},
  {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74",},
  {"imagen": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt34c30dfa5b2d1e56/64f330122d5df968960cc3d5/ezzzz_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"},
  {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81"},
  {"imagen": "https://img.lalr.co/cms/2022/05/10124115/KarimBenzema.jpg?size=xl"},
  
  ]},

  {"id": 2,
  "nombre": "Barcelona",
  "imagen": "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png",
  "plantilla":[
    {"imagen": "https://www.directvsports.com/__export/1702038985462/sites/dsports/img/2023/12/08/20231208_093624013_38kv3puida1r1e2abncyc8duh.jpg_1301049368.jpg"},
  
  {"id": 1,"nombre":"Marc-André ter Stegen ","Altura":"1.75","Peso":"74"},
  {"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUe-7jOrbVEh0F1oStUZq-5in5JLXTY3fgSZe-Uy4JA&s"},
{"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74"},
{"imagen": "https://images2.minutemediacdn.com/image/upload/c_crop,w_2960,h_1665,x_0,y_351/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/12up_es_international_web/01gpxvcxmty037scekgw.jpg"},
  {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81"}
  ]},
  // ... agregar otros equipos
  {"id": 3,
  "nombre": "Selección de fútbol de Francia",
  "imagen": "https://e7.pngegg.com/pngimages/843/375/png-clipart-france-national-football-team-2018-world-cup-french-football-federation-logo-football-logo-france.png",
  "plantilla":[
    {"imagen": "https://assets.laliga.com/squad/2023/t186/p475561/2048x2048/p475561_t186_2023_1_003_000.png"},
  {"id": 1,"nombre":"Eduardo Camavinga ","Altura":"1.82","Peso":"68"},
  {"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNua2UogoatDpyQ5AVGKf635Hk5WzJs_j51F7d7OBVA&s"},
  {"id": 2,"nombre":"Kylian Mbappé  ","Altura":"1.78","Peso":"70"},
  {"imagen": "https://assets.laliga.com/squad/2023/t175/p76650/2048x2048/p76650_t175_2023_1_002_000.jpg"},
  {"id": 3,"nombre":"Antoine Griezmann  ","Altura":"1.78","Peso":"69"}
  ]}
  ];
  return (
    <main className={styles.main}>
    <div>
    <h1>Mi Aplicación de Fútbol</h1>
    <Equipos equipos={equiposData} />
    </div>
    </main>
    );
    }