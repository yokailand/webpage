//import styled from 'styled-components';
import React from 'react';
import logoSP from '../assets/LogoSP.svg';
import logoMain from '../assets/LogoMain.svg';
import titleLogo from '../assets/TitleLogo.png';
import hanautah from '../assets/Hanautah.png';
import yokai01 from '../assets/YokaiHana01.svg';
import yokai02 from '../assets/YokaiGod01.svg';
import yokai03 from '../assets/Tengu_.svg';
import yokai04 from '../assets/Cat04.svg';
import yokai05 from '../assets/Kikurihime_.svg';
import artist from '../assets/Artist.png';
import unUniFi from '../assets/LogoUnUniFi.svg';
import learnMore from '../assets/BtnLearnMore.svg';
import artistInstagram from '../assets/Instagram.svg';
import twitter from '../assets/IconTwitter.svg';
import discord from '../assets/IconDiscord.svg';
import instagram from '../assets/IconInstagram.svg';
import distribution from '../assets/Dis00.svg';
import distribution01 from '../assets/Dis_01.svg';
import distribution02 from '../assets/Dis02.svg';
import distribution03 from '../assets/Dis_03.svg';
import joinWhitelist from '../assets/BtnJoinWht.svg';
import joinDiscord from '../assets/BtnJoinDiscord.svg';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

const App = () => {
  return (
    <>
      <Yokai {...yokaiData} />
    </>
  )
}
export default App

function Yokai() {
  return (
    <div className="cnt">
    
      <div className="hero">
      <Sns />
        <div className="mainLogo">
        <img src={logoSP} />
        </div>
        <div className="primaryBtn">
        <Link href="https://discord.gg/6ZNpJat7wn"><img className="joinDiscord" src={joinDiscord} /></Link>
        </div>
      </div>

      <div className="yokailand-intro">
        <div className="wrap">
          <div className="introduction">
      <h2>Welcome to</h2>
      <img className="titleLogo" src={titleLogo} />
      <p>Yokais have lived with us humans for a long time. The door to the world of the Yokai Metaverse is about to open. Yokai Land is your Metaverse navigator.</p>
      </div>
      <div className="haanutah-prof">
      <img className="hanautah" src={hanautah} />
      </div>
      </div>
      </div>

      <div className="yokai-intro">
      <div className="wrap">
      <h3>Yokais</h3>
      <p>Yokais DAO will guide you to the NFT x DeFi world</p>
      <div class="yokais">
      <img className="yokai" src={yokai01} />
      <img className="yokai" src={yokai02} />
      <img className="yokai" src={yokai03} />
      <img className="yokai" src={yokai04} />
      <img className="yokai" src={yokai05} />
      </div>
      </div>
      </div>

      <div className="artist-intro">
      <div className="wrap">
      <h3>Artist</h3>
      <p>Our artist, Hideyuki Katsumata, born in Tokyo, is considered as a traditional Japanese style artist. He creates the peculiar Ukiyoe/Manga world, vibrant and brave. He had installations in Argentina, Brazil, China, France, Hong-Kong, Japan, Scotland, Taiwan, Thailand, U.S., etc., therefore his character and friend “Hanautah” is painted on the walls, of these countries. He also has enthusiastic collectors for his “Shunga” art. He is funny and relaxed.
</p>
      <div><img className="artist" src={artist} alt="Hideyuki Katsumata" /></div>
      <div className="artistinstagram">
      <Link href="https://www.instagram.com/hanautah/">
        <img className="artist" src={artistInstagram} />
      </Link>
      </div>
      </div>
      </div>
      
      <div className="ununifi-intro">
      <div className="wrap">
      <h3>A Collaberation with UnUniFi Protocol</h3>
      <p>We are so excited to be the first NFT project that is going to be integrated on UnUniFi Protocol. Hold your NFT tight and ready to get incredible membership privileges.</p>
      <div className="ununifiLogoMark"><img src={unUniFi} /></div>
      <p>UnUniFi Protocol is a NFT x Defi platform that automatically generate earnings for your NFTs.</p>
      <div className="learnMore"><Link href="https://ununifi.io/"><img src={learnMore} /></Link></div>
      </div>
      </div>
      
      <div className="total-distribution">
      <div className="wrap">
      <h3>Total Distribution</h3>
      <img src={distribution} />

      <div className="distributiondetail">
      <div><img src={distribution01} /></div>
      <div><img src={distribution02} /></div>
      <div><img src={distribution03} /></div>
      </div>
      </div>
      </div>

      <div className="faq">
      <div className="wrap">
      <h3>FAQs</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>When minting starts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Community Presale: Minting will start on late April. Only for our early supporters. Join our Discord to see more information now!<br />
Public sale: TBA
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why should I own a Yokai NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yokai Land is the first NFT project using for UnUniFi Protocol and you will get the fully access and privilieges by holding a Yokai NFT.<br />
          Yokai Land DAO will be contributing to UnUniFi Protocol and rewarding our holders with equivilent benefits.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Who can mint one ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          People who join our Discord,  Twitter and get a whitelist from any of our campaigns will get to mint up to 5 Yokai NFTs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What does it cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Community Presale: 0.08Ξ<br />
Public sale price: TBA<br />
Why we didn’t set free mint or low price on presale is because the foundation of our DAO is going to be contributing UnUniFi Protocol in the early stage and hosting UnUniFi's validator node which will give our ecosystem stable rewards in the long run.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>

      <div className="final-message">
      <div className="wrap">
        <h3>Be our Yokai frens!</h3>
        <div className="joinDiscord">
        <Link href="https://discord.gg/6ZNpJat7wn"><img className="joinDiscord" src={joinDiscord} /></Link>
        </div>
      </div>
      <div className="landscape"></div>
      </div>

      <footer>
      <Sns />
      <p>@2022 Simulation labs</p>
      </footer>
    </div>
  )
} 

function Sns() {
  return (
    <div className="sns">
    <div><Link href="https://twitter.com/yokailandnft"><img className="twitter" src={twitter} /></Link></div>
    <div><Link href="https://discord.gg/6ZNpJat7wn"><img className="discord" src={discord} /></Link></div>
    <div><Link href="https://www.instagram.com/hanautah/"><img className="instagram" src={instagram} /></Link></div>
    </div>
  )
}

function Mint() {
  return (
    <>
    <div>mint</div>
    </>
  )
}

const yokaiData = {
  hanautah: hanautah,
  logoSP: logoSP,
  logoMain: logoMain,
  yokai01: yokai01,
  yokai02: yokai02,
  yokai03: yokai03,
  yokai04: yokai04,
  yokai05: yokai05,
  artist: artist,
  unUniFi: unUniFi,
  learnMore: learnMore,
  artistInstagram: artistInstagram,
  twitter: twitter,
  discord: discord,
  instagram: instagram,
  distribution: distribution,
  distribution01: distribution01,
  distribution02: distribution02,
  distribution03: distribution03,
  joinWhitelist: joinWhitelist,
  joinDiscord: joinDiscord,
};


