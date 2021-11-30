import Layout from "../components/Layout"

export default function Currency({ res }) {
    
    
    return(
        <Layout page={"Page" + res.name}>
            <div className="relative mb-8 mt-6 hover:shadows-md p-8 border border-blue-300 sm:rounded-3xl bg-green-100 md:w-auto flex-1 mx-15">
                <div className="text-center">
                    <img
                    src={res.logo_url}
                    alt={res.name}
                    className="w-20 h-20 mx-auto mb-9"
                    />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
                <p>{res.description}</p>
                <p className="pt-5 text-blue-500">
                    <a target="_blank" href={res.reddit_url}>{res.reddit_url}
                    </a>
                </p>
            </div>
        </Layout>
       
    );
}

// SSR rendue a la demande 
export async function getServerSideProps({ query }) {
    //const id = query.id
    //console.log(query.currency);
    try {
        const res = await fetch(
        `https://api.nomics.com/v1/currencies?key=c42ee402d588ced13ab5b4b6cd0a2617d9bb3c0d&ids=${query.currency}&=id,name,logo_url,description,reddit_url`
        );   
        const result = await res.json();

        return{
            props: { res: result[0] },
        };
    } catch ( err ) {
        console.error(err);
    }
}