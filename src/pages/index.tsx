import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
            <div>
                <p>EASIA Foods OÜ is a trading company situated in Tallinn, Estonia. We are specialize in import-export of frozen pork, </p>
                <p>beef and poultry meat and offal products. Our main commercial partners are from Europe and North/South America. </p>
                <p>Currently our main export destination is Asia market.</p>
            </div>

            <div style={{marginTop: "40px"}}>
                <p>We can offer a wide range of frozen meat products, the main products we offer are pork front feet, pork hind feet, </p>
                <p>pork ears, ear flaps, pork stomach, pork tails, pork aorta, pork intestines, pork tongues, pork head, pork snout, </p>
                <p>pork heart, pork bones, pork ribs, pork liver. beef short ribs, beef tripes, beef honeycomb, beef omasum, beef pizzle, </p>
                <p>beef aorta, chicken feet, chicken wings. our products are sourced directly from reliable producer from Europe and North/South America.</p>
            </div>

            <div style={{marginTop: "40px"}}>
                <p>We are interested in establishing a long term and mutual-beneficial business relationship with supplier and customers. </p>
                <p>In order to offer the best quality and cost-effective products to our customers, We are carefully monitoring the quality</p>
                <p> of products which we buy and sell by regular visits and audits of our suppliers.We would be grateful if you would consider to work with us.</p>
            </div>

          {/*<SocialList />*/}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
