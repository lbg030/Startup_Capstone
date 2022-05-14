import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/main.css';
const saleButtonStyle = {color: 'white', backgroundColor:'#565656', width: 105, height: 35, fontSize: 16};
const SaleInfo = () => (
  <section id="highlights" className="wrapper style3">
    <div className="title">할인 정보</div>
    <div className="container">
      <div className="row aln-center">
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/367520/Hollow_Knight/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925" alt=""/>
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/367520/Hollow_Knight/" target='_blank'>Hollow Knight</a>
            </h3>
            <p>
              <del>₩16,000</del><h3>₩6,400</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/367520/Hollow_Knight/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/1253920/Rogue_Legacy_2/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1253920/header.jpg?t=1652116054" alt="" />
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/1253920/Rogue_Legacy_2/" target='_blank'>Rogue Legacy 2</a>
            </h3>
            <p>
              <del>₩26,000</del><h3>₩20,800</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/1253920/Rogue_Legacy_2/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/1446780/MONSTER_HUNTER_RISE/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1652190664" alt="" />
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/1446780/MONSTER_HUNTER_RISE/" target='_blank'>Monster Hunter Rise</a>
            </h3>
            <p>
              <del>₩66,800</del><h3>₩33,400</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/1446780/MONSTER_HUNTER_RISE/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/646570/Slay_the_Spire/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg?t=1592339399" alt="" />
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/646570/Slay_the_Spire/" target='_blank'>Slay the Spire</a>
            </h3>
            <p>
              <del>₩26,000</del><h3>₩10,400</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/646570/Slay_the_Spire/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907" alt="" />
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" target='_blank'>Red Dead Redemption 2</a>
            </h3>
            <p>
              <del>₩66,000</del><h3>₩33,000</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-4 col-8-medium">
          <section className="highlight">
            <a href="https://store.steampowered.com/app/1296610/Peglin/" className="image featured" target='_blank'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1296610/header.jpg?t=1651802907" alt="" />
            </a>
            <h3>
              <a href="https://store.steampowered.com/app/1296610/Peglin/" target='_blank'>Peglin</a>
            </h3>
            <p>
            <del>₩20,500</del><h3>₩18,450</h3>
            </p>
            <ul className="actions">
              <li>
                <Button href="https://store.steampowered.com/app/1296610/Peglin/" style={saleButtonStyle} className="button style1" target='_blank'>
                  스팀 링크
                </Button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default SaleInfo;
