
import Link from "next/Link";
import Layout from "../components/Layout";


export default function Home({ res }) {
  console.log(res)
  return (
    <Layout page='crypto Monaie - Accueil'>
      <ul className="flex flex-wrap  justify-around py-8">
        {res.map((crypto, index) => (
          <li key={index} 
          className="relative hover:shadow-xl p-8 border border-blue-300 
          rounded-3Xl bg-green-100  mb-10 mx-3 w-1/5 h-338">
            <Link href={`/${crypto.id}`}>
              <a className="rounded-md">
                <div className="text-center">
                  <img 
                  src={crypto.logo_url} 
                  alt={crypto.name}
                  className="w-20 h-20 mx-auto mb-6"/>
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  {crypto.name}
                </h2>
                <h3 className="font-bold text-2xl mb-4">{parseFloat(crypto.price).toFixed(2)} USD </h3>
                <p> 
                  1 jour : {" "}
                   <span className="font-bold">
                     {" "}
                     {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(2) + "%"}
                     </span>{crypto["1d"].price_change_pct < 0 ? (<span className="text-red-500"> &#x2798;</span>
                     ) : (
                       <span className="text-green-500"> &#x279A;</span>
                     )}
                    </p>
                      <p> 
                  1 mois : {" "}
                   <span className="font-bold">
                     {" "}
                     {Math.round(crypto["30d"].price_change_pct * 100).toFixed(2) + "%"}
                     </span>{crypto["30d"].price_change_pct < 0 ? (<span className="text-red-500"> &#x2798;</span>
                     ) : (
                       <span className="text-green-500"> &#x279A;</span>
                     )}
                    </p>
                    <p>
                  1 an :{" "}
                  <span className="font-bold">
                    {Math.round(crypto["365d"].price_change_pct * 100).toFixed(2) + "%"}{" "}
                  </span>
                  {crypto["365d"].price_change_pct < 0 ? (
                    <span className="text-red-500">&#x2798;</span>
                  ) : (
                    <span className="text-green-500">&#x279A;</span>
                  )}
                </p>
                </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
    // rendue cotée serveur 
  export async function getStaticProps(context) {
    try {
      const res = await fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=c42ee402d588ced13ab5b4b6cd0a2617d9bb3c0d&ids=BTC,ETH,XRP,AAVE,ADA,BNB,EUM,GAS&interval=1d,30d,365d,"'
      ).then((res) => res.json());
      
      return {
        props: { res },
      }
    } catch (err) {
      console.log(err);
    }
  }