import React, { Component } from 'react';
import Button from '../ui/ButtonUi';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    pricing: [
      {
        price: 100,
        position: 'balcony',
        desc:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias',
        link: 'http://susujahe.ga',
        delay: 500
      },
      {
        price: 150,
        position: 'Medium',
        desc:
          'similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
        link: 'http://susujahe.ga',
        delay: 0
      },
      {
        price: 250,
        position: 'Star',
        desc:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est',
        link: 'http://susujahe.ga',
        delay: 500
      }
    ]
  };

  showBoxes = () => {
    return this.state.pricing.map(p => {
      return (
        <Zoom delay={p.delay} key={p.position}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${p.price}</span>
                <span>{p.position}</span>
              </div>
              <div className="pricing_description">{p.desc}</div>
              <div className="pricing_buttons">
                <Button
                  link={p.link}
                  bck="#ffa800"
                  text="Purchase"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </Zoom>
      );
    });
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
